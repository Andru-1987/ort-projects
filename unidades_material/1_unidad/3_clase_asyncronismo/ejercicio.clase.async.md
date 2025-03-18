**Guía de Ejercicios de Asincronismo**

**Ejercicio 1: Planificando un Viaje a Bariloche**

**Objetivo:** Practicar el manejo de arrays y objetos, y la lógica condicional, para simular la planificación de un viaje. Luego, modificar el código para obtener los datos de una API externa.

**Parte 1: Preparativos Locales**

1.  **Datos Iniciales:**

    * Tenemos un array de objetos llamado `preparativos` con la siguiente estructura:

    ```javascript
    const preparativos = [
      { requisito: "pasajes comprados", valor: true },
      { requisito: "alojamiento reservado", valor: true },
      { requisito: "seguro de viaje", valor: false },
      { requisito: "transporte confirmado", valor: true },
      { requisito: "dinero cambiado", valor: false },
    ];
    ```

2.  **Función `listoParaViajar`:**

    * Crea una función llamada `listoParaViajar` que recibe el array `preparativos` como argumento.
    * Utiliza los métodos de array `filter`, `map` y `join` para:
        * Filtrar los requisitos con `valor: false`.
        * Mapear esos requisitos para obtener solo los nombres.
        * Unir los nombres en un mensaje.
    * La función debe devolver un mensaje indicando si están listos para viajar o qué requisitos faltan.

3.  **Agregar un Requisito:**

    * Agrega un nuevo requisito al array `preparativos` usando `push`: `{ requisito: "vacunas necesarias", valor: true }`.

4.  **Eliminar un Requisito:**

    * Elimina el requisito "seguro de viaje" del array `preparativos`.
    * Usa `findIndex` para encontrar el índice del requisito y `splice` para eliminarlo.

5.  **Actualizar un Requisito:**

    * Actualiza el valor del requisito "transporte confirmado" a `false`.
    * Usa `find` para encontrar el requisito y modificar su propiedad `valor`.

6.  **Verificar Cambios:**

    * Vuelve a ejecutar la función `listoParaViajar` con el array modificado y verifica que el resultado sea correcto.

**Parte 2: Preparativos desde una API**

7.  **Obtener Datos de la API:**

    * Modifica la función `listoParaViajar` para que realice una petición GET a la API: `https://www.mockachino.com/33754ea7-2586-48/preparativos`.
    * Usa `fetch` o `axios` para obtener los datos.
    * Asegúrate de manejar la respuesta como JSON.
    * Modifica la forma en que muestras la información final para que se adapte a los datos obtenidos de la API.

**Ejercicio 2: Preparando una Comida Rápida**

**Objetivo:** Practicar el uso de promesas o async/await para simular tareas asíncronas con tiempos de espera.

1.  **Simulación de Preparación:**

    * Crea tres funciones asíncronas: `prepararEnsalada`, `prepararHamburguesa` y `prepararBebida`.
    * Cada función debe simular el tiempo de preparación correspondiente (4, 8 y 2 segundos) usando `setTimeout` y promesas o async/await.
    * Cada función debe resolver la promesa con un mensaje indicando que el ítem está listo.

2.  **Función Principal `prepararPedido`:**

    * Crea una función asíncrona `prepararPedido` que coordine la preparación de los tres ítems.
    * Usa `Promise.all` o `async/await` para esperar a que todos los ítems estén listos.
    * Si todas las promesas se resuelven, muestra un mensaje indicando que el pedido está listo.
    * Si alguna promesa es rechazada, muestra un mensaje de error.




<details>
<summary>Propuesta de solucion</summary>
    
``` javascript
    const preparativos = [
    { requisito: "pasajes comprados", valor: true },
    { requisito: "alojamiento reservado", valor: true },
    { requisito: "seguro de viaje", valor: false },
    { requisito: "transporte confirmado", valor: true },
    { requisito: "dinero cambiado", valor: false },
    ];

    function listoParaViajar(preparativos) {
    const faltantes = preparativos
        .filter((prep) => !prep.valor)
        .map((prep) => prep.requisito)
        .join(", ");

    if (faltantes) {
        return `Faltan los siguientes preparativos: ${faltantes}`;
    } else {
        return "¡Estamos listos para viajar!";
    }
    }

    // Parte 1: Preparativos locales
    console.log(listoParaViajar(preparativos));

    preparativos.push({ requisito: "vacunas necesarias", valor: true });

    const seguroIndex = preparativos.findIndex(
    (prep) => prep.requisito === "seguro de viaje"
    );
    if (seguroIndex !== -1) {
    preparativos.splice(seguroIndex, 1);
    }

    const transporte = preparativos.find(
    (prep) => prep.requisito === "transporte confirmado"
    );
    if (transporte) {
    transporte.valor = false;
    }

    console.log(listoParaViajar(preparativos));

    // Parte 2: Preparativos desde la API con Axios
    async function listoParaViajarDesdeAPI() {
    try {
        const respuesta = await axios.get(
        "https://www.mockachino.com/33754ea7-2586-48/preparativos"
        );
        const preparativosAPI = respuesta.data;
        console.log(listoParaViajar(preparativosAPI));
    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
    }
    }

    listoParaViajarDesdeAPI();
```    

    **Resolución con Fetch**

```javascript
    // ... (Parte 1: Preparativos locales - igual que en la resolución con Axios)

    // Parte 2: Preparativos desde la API con Fetch
    async function listoParaViajarDesdeAPI() {
    try {
        const respuesta = await fetch(
        "https://www.mockachino.com/33754ea7-2586-48/preparativos"
        );
        if (!respuesta.ok) {
        throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        const preparativosAPI = await respuesta.json();
        console.log(listoParaViajar(preparativosAPI));
    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
    }
    }

    listoParaViajarDesdeAPI();
```

    **Resolución con Got**

    Nota: `got` es una librería para Node.js, por lo que esta solución está pensada para ejecutarse en un entorno Node.js.

    Primero, debes instalar `got`:

    ```bash
    npm install got
    ```

    Luego, puedes usarlo así:

```javascript
    const got = require("got");

    // ... (Parte 1: Preparativos locales - igual que en las resoluciones anteriores)

    // Parte 2: Preparativos desde la API con Got
    async function listoParaViajarDesdeAPI() {
    try {
        const respuesta = await got(
        "https://www.mockachino.com/33754ea7-2586-48/preparativos"
        ).json();
        console.log(listoParaViajar(respuesta));
    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
    }
    }

    listoParaViajarDesdeAPI();
```
</details>

    **Algunas librerias interesantes:**

    * **Axios:**
        * Es una librería popular y fácil de usar para peticiones HTTP.
        * `axios.get()` realiza una petición GET y devuelve una promesa.
        * `respuesta.data` contiene los datos de la respuesta en formato JSON.
    * **Fetch:**
        * Es una API nativa de JavaScript para peticiones HTTP.
        * `fetch()` devuelve una promesa que se resuelve con un objeto `Response`.
        * `respuesta.json()` devuelve una promesa que se resuelve con los datos en formato JSON.
        * Es necesario revisar si la respuesta fue ok, antes de tratar de convertirla a json.
    * **Got:**
        * Es una librería para Node.js que ofrece una API moderna y fácil de usar para peticiones HTTP.
        * got().json() transforma automaticamente la respuesta en formato json, si la respuesta es valida.
    * **Async/Await:**
        * Se utiliza para simplificar el manejo de promesas y hacer que el código asíncrono sea más legible.
