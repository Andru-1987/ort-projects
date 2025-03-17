import fs from 'fs/promises'
/**
 * A terminar de definir las operaciones -> faltan detalles
*/


async function readJsonFile(path) {

    try {
        const contenido = await fs.readFile(path, 'utf8');
        return JSON.parse(contenido);
    } catch (error) {
        console.error(`Error al leer archivo ${path}: ${error.message}`);
        return null;
    }
}

async function saveJsonFile(path, data) {
    try {
        const contenido = JSON.stringify(data, null, 2);
        await fs.writeFile(path, contenido);
    } catch (error) {
        console.error(`Error al guardar archivo ${path}: ${error.message}`);
    }
}

// TODO: Revisar el archivo original otorgado
function ordenarPorClave(array, claves) {
    // Crear copia del array para no modificar el original
    const resultado = [...array];

    // Si claves es un string, convertirlo en array
    const clavesArray = typeof claves === 'string' ? [claves] : claves;

    // Ordenar el array
    resultado.sort((a, b) => {
        // Iterar sobre cada clave
        for (const clave of clavesArray) {
            if (a[clave] < b[clave]) return -1;
            if (a[clave] > b[clave]) return 1;
        }
        return 0; // Si son iguales en todas las claves
    });

    return resultado;
}

function actualizarDeudas(deudas, pagos, logFunction) {
    // Crear copia de las deudas para no modificar el original
    const deudasCopia = JSON.parse(JSON.stringify(deudas));

    // Crear un mapa de deudas para facilitar el acceso por DNI
    const mapDeudas = {};
    deudasCopia.forEach(deuda => {
        mapDeudas[deuda.dni] = deuda;
    });

    // Procesar cada pago
    pagos.forEach(pago => {
        // Verificar si existe la deuda asociada al DNI
        if (!mapDeudas[pago.dni]) {
            logFunction(`Operación inválida: No existe deuda para DNI ${pago.dni}`);
            return;
        }

        // Verificar si coincide el apellido
        const deuda = mapDeudas[pago.dni];
        if (deuda.apellido !== pago.apellido) {
            logFunction(`Inconsistencia de datos: Deuda: ${JSON.stringify(deuda)}, Pago: ${JSON.stringify(pago)}`);
            return;
        }

        // Actualizar el monto de la deuda
        deuda.debe -= pago.pago;
    });

    // Filtrar y actualizar las deudas
    const deudasActualizadas = [];
    Object.values(mapDeudas).forEach(deuda => {
        if (deuda.debe > 0) {
            // Si aún debe, se mantiene en la lista de deudas
            deudasActualizadas.push(deuda);
        } else if (deuda.debe < 0) {
            // Si tiene saldo a favor, se registra en el log
            logFunction(`Cliente con saldo a favor: ${deuda.apellido}, ${deuda.nombre} (DNI: ${deuda.dni}) tiene ${Math.abs(deuda.debe)} a favor`);
        }
        // Si la deuda es exactamente 0, no se incluye en la lista de deudas actualizadas
    });

    return deudasActualizadas;
}

async function actualizarArchivosDeudas(rutaDeudasViejo, rutaPagos, rutaDeudasNuevo, rutaLog) {
    try {
        // Leer archivos de entrada
        const [deudasViejas, pagos] = await Promise.all([
            leerArchivoJSON(rutaDeudasViejo),
            leerArchivoJSON(rutaPagos)
        ]);

        // Verificar que se hayan leído correctamente
        if (!deudasViejas || !pagos) {
            console.error('Error al leer archivos de entrada');
            return;
        }

        // Array para almacenar los mensajes de log
        const mensajesLog = [];

        // Función para registrar eventos en el log
        const logFunction = (mensaje) => {
            mensajesLog.push({
                fecha: new Date().toISOString(),
                mensaje
            });
        };

        // Ordenar las deudas y pagos por DNI
        const deudasOrdenadas = ordenarPorClave(deudasViejas, 'dni');
        const pagosOrdenados = ordenarPorClave(pagos, ['dni', 'fecha']);

        // Actualizar las deudas con los pagos
        const deudasActualizadas = actualizarDeudas(deudasOrdenadas, pagosOrdenados, logFunction);

        // Guardar archivos de salida
        await Promise.all([
            guardarArchivoJSON(rutaDeudasNuevo, deudasActualizadas),
            guardarArchivoJSON(rutaLog, mensajesLog)
        ]);

        console.log('Actualización completada con éxito');
    } catch (error) {
        console.error(`Error al actualizar archivos: ${error.message}`);
    }
}

// Exportar las funciones para su uso
export {
    ordenarPorClave,
    actualizarDeudas,
    actualizarArchivosDeudas
};