Aquí tienes una explicación teórica y código de ejemplo sobre el **manejo de archivos sincrónico** en **Node.js** con el módulo `fs` (File System).

---

## 📌 **Teoría: Manejo de Archivos en Node.js con `fs`**
Node.js proporciona el módulo `fs` (File System) para interactuar con el sistema de archivos.  
Existen dos formas principales de manejar archivos:
1. **Manejo Sincrónico** (`fs.readFileSync`, `fs.writeFileSync`) → Bloquea la ejecución hasta que la operación termine.
2. **Manejo Asincrónico** (`fs.readFile`, `fs.writeFile`) → No bloquea el programa.

**Cuándo usar Sincrónico:**  
✅ Cuando el programa debe esperar el resultado antes de continuar.  
✅ Para scripts simples o tareas donde el rendimiento no es un problema.  
🚫 No recomendado para aplicaciones de alto rendimiento o servidores concurrentes.

---

## 🔹 **Ejemplo 1: Lectura de Archivos (`fs.readFileSync`)**
```javascript
import fs from 'fs';

// Leer un archivo de texto de forma sincrónica
try {
    const data = fs.readFileSync('archivo.txt', 'utf8'); // Bloquea la ejecución hasta que termine
    console.log("Contenido del archivo:", data);
} catch (error) {
    console.error("Error al leer el archivo:", error.message);
}
```
### **Explicación:**
- `fs.readFileSync('archivo.txt', 'utf8')` → Lee el archivo y devuelve su contenido como texto.
- Si el archivo no existe o hay un error, se maneja con `try...catch`.

---

## 🔹 **Ejemplo 2: Escritura de Archivos (`fs.writeFileSync`)**
```javascript
import fs from 'fs';

const contenido = "Este es un nuevo contenido escrito en el archivo.";

// Escribir un archivo de forma sincrónica
try {
    fs.writeFileSync('archivo.txt', contenido, 'utf8'); // Sobrescribe el contenido del archivo
    console.log("Archivo escrito con éxito.");
} catch (error) {
    console.error("Error al escribir el archivo:", error.message);
}
```
### **Explicación:**
- `fs.writeFileSync('archivo.txt', contenido, 'utf8')` → Escribe datos en el archivo.
- Si el archivo no existe, lo crea automáticamente.
- Si el archivo **ya existe**, lo sobrescribe.

---

## 🔹 **Ejemplo 3: Agregar Datos a un Archivo (`fs.appendFileSync`)**
Si no queremos sobrescribir el archivo, sino agregar contenido, usamos `fs.appendFileSync`:
```javascript
import fs from 'fs';

const nuevoContenido = "\nEste es un texto adicional.";

// Agregar contenido a un archivo de forma sincrónica
try {
    fs.appendFileSync('archivo.txt', nuevoContenido, 'utf8');
    console.log("Texto agregado con éxito.");
} catch (error) {
    console.error("Error al agregar contenido:", error.message);
}
```
### **Explicación:**
- `fs.appendFileSync('archivo.txt', nuevoContenido, 'utf8')` → Agrega texto al final del archivo sin sobrescribirlo.

---

## 🔹 **Ejemplo 4: Verificar si un Archivo Existe (`fs.existsSync`)**
```javascript
import fs from 'fs';

const archivo = 'archivo.txt';

// Verificar si el archivo existe
if (fs.existsSync(archivo)) {
    console.log("El archivo existe.");
} else {
    console.log("El archivo no existe.");
}
```
### **Explicación:**
- `fs.existsSync(archivo)` → Devuelve `true` si el archivo existe y `false` si no.

---

## 🔹 **Ejemplo 5: Eliminar un Archivo (`fs.unlinkSync`)**
```javascript
import fs from 'fs';

const archivo = 'archivo.txt';

// Eliminar un archivo
try {
    fs.unlinkSync(archivo);
    console.log("Archivo eliminado con éxito.");
} catch (error) {
    console.error("Error al eliminar el archivo:", error.message);
}
```
### **Explicación:**
- `fs.unlinkSync(archivo)` → Borra el archivo si existe.
- Si el archivo no existe, lanza un error.

---

## **📌 Conclusión**
🔹 **`fs.readFileSync`** → Lee archivos sincrónicamente.  
🔹 **`fs.writeFileSync`** → Escribe/sobrescribe archivos.  
🔹 **`fs.appendFileSync`** → Agrega contenido sin borrar el existente.  
🔹 **`fs.existsSync`** → Verifica si un archivo existe.  
🔹 **`fs.unlinkSync`** → Elimina un archivo.  

Este enfoque sincrónico es **fácil de usar**, pero **bloquea el hilo de ejecución**, por lo que **no se recomienda en aplicaciones con muchas operaciones de E/S concurrentes**. Para esas situaciones, es mejor utilizar el **modo asincrónico (`fs.promises`)**.


--- 
Usando **`fs.promises`** para trabajar de manera **asincrónica** con `async/await`.
Esto permite evitar bloquear el hilo principal de ejecución, lo cual es ideal para aplicaciones más eficientes.

---

# 📌 **Ejemplo: Manejo de `usuarios.json` con `fs.promises`**
Usaremos el módulo **`fs.promises`** para leer, escribir y actualizar un archivo JSON que almacena usuarios.

## **1️⃣ Leer el Archivo JSON (`fs.promises.readFile`)**
```javascript
import fs from 'fs/promises';

const archivo = 'usuarios.json';

const leerUsuarios = async () => {
    try {
        // Verificar si el archivo existe antes de leerlo
        const data = await fs.readFile(archivo, 'utf8');
        const usuarios = JSON.parse(data); // Convertir JSON a objeto
        console.log("Usuarios actuales:", usuarios);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log("El archivo no existe, se creará cuando se agreguen usuarios.");
        } else {
            console.error("Error al leer el archivo:", error.message);
        }
    }
};

// Ejecutar la función
leerUsuarios();
```
### **Explicación:**
- **`fs.readFile(archivo, 'utf8')`** → Lee el archivo **de forma asíncrona**.
- **`JSON.parse(data)`** → Convierte el JSON a un objeto JavaScript.
- **Manejo de errores**:
  - `ENOENT` → Archivo no encontrado (se muestra un mensaje en lugar de fallar).

---

## **2️⃣ Agregar un Usuario (`fs.promises.writeFile`)**
Vamos a **leer, modificar y guardar** el JSON de manera **asíncrona**.

```javascript
import fs from 'fs/promises';

const archivo = 'usuarios.json';

const agregarUsuario = async (nombre, email) => {
    try {
        let usuarios = [];

        // Verificar si el archivo existe y leer su contenido
        try {
            const data = await fs.readFile(archivo, 'utf8');
            usuarios = JSON.parse(data);
        } catch (error) {
            if (error.code !== 'ENOENT') throw error;
        }

        // Crear el nuevo usuario
        const nuevoUsuario = {
            id: Date.now(), // Genera un ID basado en la fecha
            nombre,
            email
        };

        // Agregarlo al array
        usuarios.push(nuevoUsuario);

        // Guardar los datos actualizados
        await fs.writeFile(archivo, JSON.stringify(usuarios, null, 4), 'utf8');
        console.log("Usuario agregado con éxito.");
    } catch (error) {
        console.error("Error al agregar usuario:", error.message);
    }
};

// Ejecutar la función con datos de prueba
agregarUsuario("Carlos Gómez", "carlos@example.com");
```

### **Explicación:**
- **`fs.readFile(archivo, 'utf8')`** → Lee el archivo.
- **`JSON.parse()`** → Convierte el contenido en un array de usuarios.
- **Si el archivo no existe (`ENOENT`)**, se crea automáticamente al escribir datos.
- **`usuarios.push(nuevoUsuario)`** → Agrega un nuevo usuario.
- **`fs.writeFile()`** → Guarda los datos **sincrónicamente** en el JSON.

---

## **3️⃣ Eliminar un Usuario (`fs.promises.writeFile`)**
Podemos eliminar un usuario por su `id` de forma asíncrona.

```javascript
import fs from 'fs/promises';

const archivo = 'usuarios.json';

const eliminarUsuario = async (idAEliminar) => {
    try {
        // Leer el archivo si existe
        const data = await fs.readFile(archivo, 'utf8');
        let usuarios = JSON.parse(data);

        // Filtrar el usuario por ID
        const usuariosActualizados = usuarios.filter(user => user.id !== idAEliminar);

        // Guardar el nuevo contenido
        await fs.writeFile(archivo, JSON.stringify(usuariosActualizados, null, 4), 'utf8');
        console.log(`Usuario con ID ${idAEliminar} eliminado.`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log("El archivo no existe.");
        } else {
            console.error("Error al eliminar usuario:", error.message);
        }
    }
};

// Ejecutar la función con un ID de prueba
eliminarUsuario(1700000000000); // Cambia el ID por uno real
```

### **Explicación:**
- **Leer el archivo** (`fs.readFile`).
- **Convertir JSON a array** (`JSON.parse()`).
- **Filtrar los usuarios** para excluir el que queremos eliminar.
- **Guardar el nuevo contenido** (`fs.writeFile`).

---

# **🚀 Comparación `fs` vs `fs.promises`**
| Método              | Bloquea el hilo principal | Retorno | Uso recomendado |
|---------------------|-------------------------|---------|----------------|
| `fs.readFileSync()` | ✅ Sí                    | `string` | Scripts simples |
| `fs.readFile()`    | ❌ No                    | Callback | No recomendado (Callback Hell) |
| `fs.promises.readFile()` | ❌ No | `Promise` | Aplicaciones modernas |

---

# **📌 Conclusión**
✅ **`fs.promises`** permite manejar archivos de forma **asíncrona** usando `async/await`.  
✅ Es **más eficiente** porque **no bloquea el hilo principal**.  
✅ **Ideal para aplicaciones reales** donde varias operaciones de archivos pueden ocurrir al mismo tiempo.  
🚀 **Usar `fs.promises` es la mejor práctica en proyectos Node.js modernos**.
