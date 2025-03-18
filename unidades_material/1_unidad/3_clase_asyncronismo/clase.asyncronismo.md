# JavaScript Avanzado

## 1. Objetos y Manipulación
### ✨ Conceptos Clave
- Un **objeto** en JavaScript es una colección de pares clave-valor.
- Se pueden modificar, recorrer y manipular mediante varios métodos.

### 📊 Ejemplo
```js
const persona = {
    nombre: "Andru",
    edad: 30,
    profesion: "Desarrollador",
};

console.log(persona.nombre); // "Andru"
persona.edad = 31; // Modificar valor
```

### 🗒️ Ejercicio
1. Crea un objeto `coche` con propiedades `marca`, `modelo` y `año`.
2. Agrega un método `mostrarInfo()` que imprima la información del coche.

---

## 2. Funciones y Funciones Flecha
### ✨ Conceptos Clave
- Las funciones en JavaScript pueden declararse de varias formas.
- Las **funciones flecha** (`=>`) son una versión más corta y moderna de escribir funciones.

### 📊 Ejemplo
```js
function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 2)); // 5

// Equivalente con función flecha
const sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(3, 2)); // 5
```

### 🗒️ Ejercicio
1. Crea una función tradicional que convierta grados Celsius a Fahrenheit.
2. Reescríbela como una función flecha.

---

## 3. Métodos de Array Modernos
### ✨ Conceptos Clave
Los arrays en JavaScript tienen varios métodos modernos para facilitar manipulaciones:
- `.map()`: Itera sobre el array y devuelve uno nuevo.
- `.filter()`: Filtra los elementos según una condición.
- `.reduce()`: Reduce un array a un solo valor.

### 📊 Ejemplo
```js
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(num => num * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]
```

### 🗒️ Ejercicio
1. Usa `.filter()` para obtener los números pares de un array.
2. Usa `.reduce()` para obtener la suma total de un array de números.

---

## 4. Promesas y Asincronía
### ✨ Conceptos Clave
- Las **promesas** permiten manejar operaciones asíncronas.
- `async/await` hace que el código asíncrono sea más legible.

### 📊 Ejemplo
```js
function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Datos recibidos"), 2000);
    });
}

async function procesar() {
    console.log("Cargando...");
    const datos = await obtenerDatos();
    console.log(datos);
}

procesar();
```

### 🗒️ Ejercicio
1. Crea una función asíncrona que simule la consulta a una API con `fetch()`.
2. Usa `try/catch` para manejar posibles errores.

---

📚 **Tarea:** Implementar una pequeña aplicación que use objetos, arrays y promesas para gestionar una lista de tareas.

# [MockaAPI](https://mockanapi.com/)
# [Mockachino](https://www.mockachino.com/)

----
peticiones HTTP con `fetch` y `axios`

**Clase: Asincronismo en JavaScript y Peticiones HTTP**

**Objetivo:** Comprender el concepto de asincronismo en JavaScript y aprender a realizar peticiones HTTP utilizando `fetch`, `axios` y otras técnicas.

**Contenido:**

**1. Introducción al Asincronismo (Teoría):**

* **¿Qué es el asincronismo?**
    * Explicar que es la capacidad de ejecutar múltiples tareas sin bloquear el hilo principal de ejecución.
    * Importancia del asincronismo en JavaScript:
        * Mejora la experiencia del usuario al evitar bloqueos.
        * Permite realizar operaciones de larga duración sin congelar la interfaz.
        * Esencial para la comunicación con servidores y APIs.
* **El bucle de eventos (Event Loop):**
    * Explicar cómo funciona el bucle de eventos para gestionar tareas asíncronas.
    * Colas de tareas (task queues) y colas de microtareas (microtask queues).
* **Callbacks, Promesas y Async/Await:**
    * Explicar la evolución de las técnicas para manejar el asincronismo.
    * Ventajas y desventajas de cada enfoque.

**2. Peticiones HTTP con `fetch` (Práctica):**

* **¿Qué es `fetch`?**
    * API nativa de JavaScript para realizar peticiones HTTP.
    * Basada en promesas.
* **Realización de peticiones GET, POST, PUT y DELETE:**
    * Mostrar ejemplos prácticos de cada tipo de petición.
    * Manejo de cabeceras (headers) y cuerpos (bodies) de las peticiones.
* **Manejo de respuestas:**
    * Extracción de datos en formato JSON.
    * Manejo de errores y códigos de estado HTTP.
* **Ejemplo de código:**

```javascript
    fetch('https://api.ejemplo.com/datos')
      .then(respuesta => {
        if (!respuesta.ok) {
          throw new Error('Error en la petición');
        }
        return respuesta.json();
      })
      .then(datos => {
        console.log(datos);
      })
      .catch(error => {
        console.error(error);
      });
```

**3. Peticiones HTTP con `axios` (Práctica):**

* **¿Qué es `axios`?**
    * Librería de terceros para realizar peticiones HTTP.
    * Basada en promesas y más fácil de usar que `fetch`.
    * Ventajas sobre fetch:
        * Transformación automática de datos JSON.
        * Protección contra ataques XSRF.
        * Cancelación de peticiones.
* **Realización de peticiones con `axios`:**
    * Mostrar ejemplos de peticiones GET, POST, PUT y DELETE.
    * Configuración de cabeceras y cuerpos.
    * Ejemplo de código:

```javascript
    axios.get('https://api.ejemplo.com/datos')
      .then(respuesta => {
        console.log(respuesta.data);
      })
      .catch(error => {
        console.error(error);
      });
```

**4. Async/Await (Práctica):**

* **¿Qué es async/await?**
    * Sintaxis más legible para trabajar con promesas.
    * Simplifica el manejo de código asíncrono.
* **Uso de async/await con `fetch` y `axios`:**
    * Mostrar ejemplos de cómo usar async/await para realizar peticiones HTTP.
    * Ejemplo de código:

```javascript
    async function obtenerDatos() {
      try {
        const respuesta = await fetch('https://api.ejemplo.com/datos');
        const datos = await respuesta.json();
        console.log(datos);
      } catch (error) {
        console.error(error);
      }
    }
```

**5. Otras formas de hacer peticiones HTTP:**

* **XMLHttpRequest (XHR):**
    * API más antigua para realizar peticiones HTTP.
    * Menos utilizada que `fetch` y `axios`.
    * Se muestra para dar contexto historico.
* **Librerías especializadas:**
    * Mencionar librerías como `superagent` o `got`, que ofrecen funcionalidades adicionales.

**6. Manejo de Errores y Buenas Prácticas:**

* **Manejo de errores en peticiones HTTP:**
    * Códigos de estado HTTP.
    * Excepciones y bloques `try...catch`.
* **Buenas prácticas:**
    * Uso de async/await para código más legible.
    * Manejo adecuado de errores.
    * Optimización de peticiones HTTP.

**7. Actividades Prácticas:**

* Realizar peticiones HTTP a APIs públicas.
* Crear una aplicación que muestre datos obtenidos de una API.
* Implementar manejo de errores en peticiones HTTP.
* Comparar el uso de `fetch` y `axios` en diferentes escenarios.

**8. Evaluación:**

* Participación en las actividades prácticas.
* Resolución de ejercicios propuestos.
* Creación de un proyecto que utilice peticiones HTTP.

**Recursos Adicionales:**

* Documentación de `fetch`: developer.mozilla.org/es/docs/Web/API/Fetch_API
* Documentación de `axios`: axios-http.com
* Artículos y tutoriales sobre asincronismo en JavaScript.


**EXTRA SUPER INTERESANTE** -> [GOT](https://www.npmjs.com/package/got) -> una library de JS que permite hacer peticiones de manera mas performante.

Ejercicio recomendado -> Realizar varias peticiones usando las 3 dependecias:
- fetch
- axios
- got