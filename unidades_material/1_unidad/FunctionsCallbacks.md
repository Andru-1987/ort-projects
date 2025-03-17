## 📌 Funciones y Callbacks en JavaScript  

### 🔹 ¿Qué son las funciones?  
En JavaScript, **una función es un bloque de código reutilizable que realiza una tarea específica**. Se pueden declarar, invocar y reutilizar en diferentes partes del código.  

Ejemplo básico de función en JS:  
```js
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Andru")); // "Hola, Andru!"
```

---

### 🔹 ¿Qué son los Callbacks?  
Un **callback** es una función que se pasa como argumento a otra función y se ejecuta después de que esa función haya completado su tarea.  

Ejemplo de función con callback:  
```js
function procesarUsuario(nombre, callback) {
    console.log(`Procesando usuario: ${nombre}`);
    callback(nombre);
}

function mostrarMensaje(nombre) {
    console.log(`Bienvenido, ${nombre}!`);
}

// Llamamos a la función pasándole otra función como argumento
procesarUsuario("Emma", mostrarMensaje);
```
📌 **Salida en consola:**  
```
Procesando usuario: Emma  
Bienvenido, Emma!
```
Aquí, `mostrarMensaje` es un **callback** que se ejecuta dentro de `procesarUsuario`.

---

### 🔹 ¿Por qué en JavaScript las funciones son ciudadanos de primera clase?  
En JavaScript, las funciones son **ciudadanos de primera clase** porque:  
✅ Se pueden asignar a variables.  
✅ Se pueden pasar como argumentos a otras funciones (como los callbacks).  
✅ Se pueden devolver desde otras funciones.  

Ejemplo: Asignando una función a una variable y pasándola como parámetro.  
```js
const sumar = (a, b) => a + b;  // Función almacenada en una variable

function operar(a, b, operacion) {
    return operacion(a, b);
}

console.log(operar(5, 3, sumar)); // 8
```

---

### 🔹 ¿Para qué sirven los Callbacks?  
Los callbacks permiten:  
✅ **Controlar la ejecución asíncrona**, como leer archivos, hacer peticiones a APIs, etc.  
✅ **Reutilizar código** sin necesidad de modificar una función principal.  
✅ **Componer funciones más flexibles** que aceptan diferentes comportamientos.  

Ejemplo con `setTimeout`:  
```js
setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos.");
}, 2000);
```

---

### 🛠️ Conclusión  
Las funciones y callbacks son **fundamentales en JavaScript** y su naturaleza de **ciudadanos de primera clase** permite escribir código modular, reutilizable y flexible. 🚀