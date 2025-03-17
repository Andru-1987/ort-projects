// Descripción
// Se proveen dos archivos de texto plano que contienen, por línea, la información de la anotación de un partido de un deporte, y de los equipos con el siguiente formato:

// partido.log
// JUGADOR(APELLIDO),TIPO DE ANOTACIÓN

// equipo-X.txt
// NOMBRE APELLIDO

// Objetivo
// Realizar un programa tipo script en NodeJS que muestre:
// el resultado final del partido, teniendo en cuenta las reglas de anotación de puntos del deporte;
// el nombre completo del jugador que haya hecho la mayor cantidad de puntos;
// la distribución de puntos por tipo de anotación.
// NOTA: se considera un _bonus_ si la información es presentada en un formato serializable. -> Json

import path from "path"
import fs from "fs/promises";
import { fileURLToPath } from 'url';


// Get the current file's URL and convert it to a path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class FileManager {
  constructor(encode = "utf8") {
    this.encode = encode;
  }

  async readFile(path) {
    try {
      const contenido = await fs.readFile(path, this.encode);
      return contenido;
    } catch (error) {
      console.error(`Error al leer archivo ${path}: ${error.message}`);
      return null;
    }
  }
}

class DataProcess {
  static async cleanDataWithRule(data, cleanerRule) {
    return await cleanerRule(data);
  }
}

class DataDisplay {

  static rugbyScore = Object.freeze({
    TRY: 5,
    CONVERSION: 2,
  });


  static _mappingBy(conversion, intencion) {
    return [conversion * this.rugbyScore.CONVERSION, intencion * this.rugbyScore.TRY]
  }

  static _filterByTeam(partido, team) {
    const teamSet = new Set(team.map(player => player.apellido))

    return Object.entries(partido)
      .filter(([key]) => teamSet.has(key))
      .map((playerLog) => playerLog)
  }

  static _sumByType(partido) {

    return Object
      .entries(partido)
      .reduce((acc, [, { conversion, try: intencion }]) => {
        let [partialConversion, partialIntecion] = DataDisplay._mappingBy(conversion, intencion)
        acc.conversion += partialConversion
        acc.try += partialIntecion
        return acc
      }, { conversion: 0, try: 0 })
  }

  static _getTotalByTeam(partido, team) {
    return DataDisplay._filterByTeam(partido, team).reduce((acc, [, { conversion, try: intencion }]) => {
      acc += DataDisplay._mappingBy(conversion, intencion).reduce((acc, value) => acc + value, 0)
      return acc
    }, 0)
  }


  static _getTopPlayer(partido, team) {
    const topPlayer = DataDisplay
      ._filterByTeam(partido, team)
      .map(([player, { conversion, try: intencion }]) => ({
        player,
        score: DataDisplay._mappingBy(conversion, intencion).reduce((acc, value) => acc + value, 0)
      })
      )
      .reduce((max, current) => current.score > max.score ? current : max, { score: -Infinity })

    const [{ nombre, apellido }] = team.filter(player => player.apellido === topPlayer.player)
    return {
      fullName: `${nombre} ${apellido}`,
      score: topPlayer.score
    }
  }

  static getTotalScoreByTeam(partido, equipoA, equipoB) {

    const totalEquipoA = DataDisplay._getTotalByTeam(partido, equipoA)
    const totalEquipoB = DataDisplay._getTotalByTeam(partido, equipoB)

    return {
      resultadoPorEquipo: {
        totalEquipoA,
        totalEquipoB
      }
    }


  }

  static higherPlayerScoccerByTeam(partido, equipoA, equipoB) {

    return {
      resultadoTopJugador: {
        topPlayerEquipoA: DataDisplay._getTopPlayer(partido, equipoA),
        topPlayerEquipoB: DataDisplay._getTopPlayer(partido, equipoB)

      }
    }
  }

  static aggScoringByType(partido) {
    return {
      resultadoByType: DataDisplay._sumByType(partido)
    }
  }
}

class Rules {
  /**
   * Rules for logger and matchin the schema of it
   */
  static async logs(data) {
    // const result = {}

    return data
      .split("\n")
      .map((line) => line.toLocaleLowerCase().trim().split(","))
      .reduce((acc, [name, action]) => {
        if (!name || !action) return acc;
        if (!acc[name]) {
          acc[name] = { conversion: 0, try: 0 };
        }

        if (action == "conversion") {
          acc[name].conversion += 1;
        } else {
          acc[name].try += 1;
        }

        return acc;
      }, {});
  }

  static async player(data) {
    return data
      .split("\n")
      .map((line) => line.toLocaleLowerCase().trim().split(" "))
      .map(
        ([nombre, apellido]) => ({ nombre, apellido })
      )

  }
}


class AppProject {

  constructor(fileManager, files) {
    this.files = files ?? ["partido.log", "equipo-A.txt", "equipo-B.txt"]
    this.FILES_URI = this.files.map(uri => path.join(__dirname, "data", uri))
    this.manager = fileManager
  }

  async start() {
    let [partido, equipoA, equipoB] = await Promise.all(this.FILES_URI.map(uri => this.manager.readFile(uri)))
    partido = await DataProcess.cleanDataWithRule(partido, Rules.logs)
    equipoA = await DataProcess.cleanDataWithRule(equipoA, Rules.player)
    equipoB = await DataProcess.cleanDataWithRule(equipoB, Rules.player)

    return {
      ...DataDisplay.getTotalScoreByTeam(partido, equipoA, equipoB),
      ...DataDisplay.higherPlayerScoccerByTeam(partido, equipoA, equipoB),
      ...DataDisplay.aggScoringByType(partido)
    }

  }
}



let app = new AppProject(new FileManager())

await app.start()