## 📌 `async/await` en JavaScript  

### 🔹 ¿Qué es `async/await`?  
`async/await` es una forma más moderna y legible de manejar código asíncrono en JavaScript. Se introdujo para **simplificar el uso de Promises** y hacer que el código sea más fácil de entender en comparación con los callbacks y `.then()`.  

---

### 🔹 Uso de `async/await`  

📌 **Reglas básicas:**  
1. Una función con `async` siempre devuelve una **Promise**.  
2. `await` se usa dentro de funciones `async` para esperar el resultado de una Promise.  
3. `await` **pausa la ejecución** hasta que la Promise se resuelva o rechace.  

---

### 🔹 Ejemplo básico de `async/await`  
```js
async function obtenerSaludo() {
    return "Hola, Andru!";
}

obtenerSaludo().then(console.log); // "Hola, Andru!"
```
📌 **Explicación:**  
- `async` convierte la función en una que devuelve una **Promise**.  
- `.then(console.log)` captura el resultado cuando la Promise se resuelve.

---

### 🔹 Ejemplo con `await`  
Supongamos que queremos simular una petición a una API con `setTimeout`:  
```js
function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Datos recibidos 📦"), 2000);
    });
}

async function procesarDatos() {
    console.log("Cargando...");
    const resultado = await obtenerDatos();
    console.log(resultado);
}

procesarDatos();
```
📌 **Salida en consola:**  
```
Cargando...
(Dos segundos después...)
Datos recibidos 📦
```
✅ **`await` detiene la ejecución** de `procesarDatos()` hasta que `obtenerDatos()` termine.  
✅ Es más **legible y fácil de entender** que anidar `.then()`.  

---

### 🔹 Manejo de errores con `try/catch`  
Si la Promise falla, podemos capturar el error con `try/catch`:  
```js
async function obtenerUsuario() {
    try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let usuario = await respuesta.json();
        console.log(usuario);
    } catch (error) {
        console.log("Error al obtener usuario:", error);
    }
}

obtenerUsuario();
```
✅ Si `fetch()` falla, el `catch` capturará el error en lugar de romper el código.  

---

### 🔹 `async/await` vs Callbacks  
| Característica       | Callbacks | Promises | `async/await` |
|---------------------|----------|---------|--------------|
| Legibilidad        | Baja     | Mejor   | Excelente  |
| Manejabilidad     | Complejo si hay anidaciones  | Mejor con `.then()` | Muy simple con `try/catch` |
| Control de errores | Difícil  | `.catch()` | `try/catch` fácil |

---

### 🛠️ Conclusión  
✅ `async/await` es la mejor forma de manejar código asíncrono en JavaScript.  
✅ Hace que el código sea más limpio y fácil de entender.  
✅ Permite escribir código **sin anidar callbacks ni abusar de `.then()`**.  

🚀 **Úsalo siempre que trabajes con operaciones asíncronas!**


