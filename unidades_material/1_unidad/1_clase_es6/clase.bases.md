**ES6 (ECMAScript 2015):**

* ## [LexicalData ](https://dev.to/antonzo/lexical-scope-lexical-environment-execution-context-closure-in-javascript-5bn6)

* **Descripción:**
    * ES6 introdujo una serie de características importantes que modernizaron JavaScript. Incluye mejoras en la sintaxis, nuevas formas de trabajar con datos y un mejor soporte para la programación orientada a objetos y el asincronismo.
    * Algunas características clave son:
        * `let` y `const` para declarar variables.
        * Funciones de flecha (arrow functions).
        * Clases.
        * Promesas.
        * Módulos.
        * Template literals.
        * Destructuring.
        * Spread/Rest operator.

**Funciones Closure:**

* **Descripción:**
    * Una closure es una función que recuerda el entorno léxico en el que fue creada. Esto significa que puede acceder a variables de su ámbito exterior incluso después de que la función exterior haya terminado de ejecutarse.
    * Las closures son útiles para crear funciones privadas y para mantener el estado entre llamadas a funciones.

**Funciones de Alto Orden (Funciones de Alto Nivel):**

* **Descripción:**
    * Son funciones que pueden tomar otras funciones como argumentos o devolver funciones como resultados.
    * Permiten escribir código más flexible y reutilizable.
    * Ejemplos comunes son `map`, `filter` y `reduce`.

**Asincronismo:**
[El motivo por que JS usa mucho procesos async](https://bytearcher.com/articles/why-in-nodejs-lot-of-asynchronous-operations/)
* **Descripción:**
    * JavaScript es un lenguaje de un solo hilo, lo que significa que solo puede ejecutar una tarea a la vez.
    * El asincronismo permite realizar tareas que llevan tiempo (como peticiones de red o lectura de archivos) sin bloquear el hilo principal.
    * Esto mejora la capacidad de respuesta de las aplicaciones.

**Callbacks:**

* **Descripción:**
    * Son funciones que se pasan como argumentos a otras funciones y se ejecutan cuando una tarea asíncrona se completa.
    * Fueron la forma tradicional de manejar el asincronismo en JavaScript, pero pueden llevar a un "callback hell" (anidamiento excesivo de callbacks).

**Promesas:**

* **Descripción:**
    * Son objetos que representan el resultado eventual de una operación asíncrona.
    * Pueden estar en uno de tres estados: pendiente, cumplida o rechazada.
    * Proporcionan una forma más limpia y estructurada de manejar el asincronismo en comparación con los callbacks.

**Clases:**

* **Descripción:**
    * ES6 introdujo la sintaxis de clases para facilitar la programación orientada a objetos en JavaScript.
    * Las clases son "azúcar sintáctico" sobre la herencia basada en prototipos de JavaScript.
    * Permiten definir constructores, métodos y propiedades de manera más clara.

**Objeto "This":**

* **Descripción:**
    * La palabra clave `this` se refiere al objeto al que pertenece una función.
    * Su valor puede variar dependiendo de cómo se llame la función.
    * En el contexto del navegador, `this` a menudo se refiere al objeto `window`.
    * Las Arrow functions tienen un comportamiento diferente a las funciones tradicionales con respecto al objeto "this".
<details>
    <summary>
    <b>Explicacion un poco mas ampliada sobre this en las funciones</b></summary>

**Funciones Tradicionales:**

* El valor de `this` en una función tradicional se determina por cómo se llama la función.
* Puede cambiar dependiendo del contexto de llamada.
* En el contexto global (fuera de cualquier función), `this` se refiere al objeto global (en el navegador, `window`; en Node.js, `global`).
* Cuando se llama a una función como método de un objeto, `this` se refiere a ese objeto.

**Funciones de Flecha:**

* Las funciones de flecha no tienen su propio enlace a `this`.
* En cambio, heredan el valor de `this` del contexto léxico circundante (el ámbito donde se definieron).
* Esto significa que `this` dentro de una función de flecha siempre se refiere al mismo objeto que `this` en el código que rodea la función de flecha.
* Esta caracteristica hace que las funciones flechas sean muy utiles cuando se usan dentro de otras funciones, o cuando se usan callbacks.

**Ejemplos:**

```javascript
const objeto = {
  nombre: "Objeto",
  metodoTradicional: function() {
    console.log("Tradicional:", this.nombre); // 'this' se refiere a 'objeto'
    function funcionInterna() {
      console.log("Interna Tradicional:", this); // 'this' es el objeto global (o undefined en strict mode)
    }
    funcionInterna();
  },
  metodoFlecha: function() {
    console.log("Metodo Flecha:", this.nombre); // 'this' se refiere a 'objeto'
    const funcionInternaFlecha = () => {
      console.log("Interna Flecha:", this.nombre); // 'this' hereda de 'metodoFlecha'
    };
    funcionInternaFlecha();
  },
};

objeto.metodoTradicional();
objeto.metodoFlecha();
```

**Métodos `apply`, `call` y `bind`:**

Estos métodos permiten controlar el valor de `this` en funciones tradicionales:

* **`call(thisArg, arg1, arg2, ...)`:** Llama a una función con un valor de `this` específico y argumentos individuales.
* **`apply(thisArg, [argsArray])`:** Similar a `call`, pero acepta un array de argumentos.
* **`bind(thisArg, arg1, arg2, ...)`:** Crea una nueva función con el valor de `this` y los argumentos preestablecidos.

**Ejemplos:**

```javascript
function saludar(saludo) {
  console.log(saludo, this.nombre);
}

const persona1 = { nombre: "Ana" };
const persona2 = { nombre: "Pedro" };

saludar.call(persona1, "Hola"); // Hola Ana
saludar.apply(persona2, ["¡Qué tal"]); // ¡Qué tal Pedro

const saludarAna = saludar.bind(persona1);
saludarAna("Saludos"); // Saludos Ana
```

**Aplicaciones:**

* Las funciones de flecha son ideales para callbacks y funciones internas donde se desea mantener el valor de `this` del contexto circundante.
* `call`, `apply` y `bind` son útiles cuando se necesita controlar explícitamente el valor de `this`, como en el manejo de eventos o la creación de funciones reutilizables.
* En el desarrollo de componentes reutilizables, y el uso de librerias de terceros, es muy comun necesitar de estos metodos, para poder mantener el contexto del objeto que se esta usando.

</details>


**Browser y el DOM (Document Object Model):**

* **Descripción:**
    * El DOM es una representación en forma de árbol de la estructura de un documento HTML.
    * JavaScript puede interactuar con el DOM para modificar el contenido, la estructura y el estilo de una página web.
    * El navegador proporciona APIs (como `document.getElementById` y `document.querySelector`) para acceder y manipular el DOM.
---


**ES6 (ECMAScript 2015)**

* **`let` y `const`:**

```javascript
    let edad = 30;
    const nombre = "Juan";

    edad = 31; // Válido
    // nombre = "Carlos"; // Error: no se puede reasignar const
```

* **Funciones de flecha (arrow functions):**

```javascript
    const saludar = (nombre) => `Hola, ${nombre}!`;
    console.log(saludar("Ana"));
```

* **Clases:**

```javascript
    class Persona {
      constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
      }

      saludar() {
        console.log(`Hola, soy ${this.nombre}`);
      }
    }

    const persona1 = new Persona("Carlos", 25);
    persona1.saludar();
```

* **Promesas:**

```javascript
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promesa cumplida");
      }, 1000);
    });

    promesa.then((resultado) => console.log(resultado));
```

* **Template literals:**

```javascript
    const nombre = "Elena";
    const saludo = `Hola, ${nombre}!`;
    console.log(saludo);
```

* **Destructuring:**

```javascript
    const persona = { nombre: "Luis", edad: 30 };
    const { nombre, edad } = persona;
    console.log(nombre, edad);
```

* **Spread/Rest operator:**

```javascript
    const numeros = [1, 2, 3];
    const nuevosNumeros = [...numeros, 4, 5];
    console.log(nuevosNumeros);

    function sumar(...numeros) {
      return numeros.reduce((acc, num) => acc + num, 0);
    }
    console.log(sumar(1, 2, 3, 4));
```

**Funciones Closure**

```javascript
    function crearContador() {
      let contador = 0;
      return function() {
        contador++;
        return contador;
      };
    }

    const contar = crearContador();
    console.log(contar()); // 1
    console.log(contar()); // 2
```

**Funciones de Higher Order**

```javascript
    const numeros = [1, 2, 3, 4, 5];
    const pares = numeros.filter((num) => num % 2 === 0);
    console.log(pares);
```

**Asincronismo y Callbacks**

```javascript
    function obtenerDatos(callback) {
      setTimeout(() => {
        callback("Datos obtenidos");
      }, 1000);
    }

    obtenerDatos((datos) => console.log(datos));
```

**Promesas y Async/Await**

```javascript
    async function obtenerDatosAsync() {
      try {
        const resultado = await new Promise((resolve) => {
          setTimeout(() => resolve("Datos obtenidos"), 1000);
        });
        console.log(resultado);
      } catch (error) {
        console.error(error);
      }
    }

    obtenerDatosAsync();
```

**Objeto "This"**

```javascript
    const persona = {
      nombre: "Ana",
      saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
      },
    };

    persona.saludar();

    function saludarGlobal() {
      console.log(this);
    }
    saludarGlobal(); // En el navegador, 'this' será el objeto window
```

**Browser y el DOM**

```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>Ejemplo DOM</title>
    </head>
    <body>
      <h1 id="titulo">Hola Mundo!</h1>
      <script>
        const titulo = document.getElementById("titulo");
        titulo.textContent = "¡Hola desde JavaScript!";
      </script>
    </body>
    </html>
```

**Curry**

**Escenario:**

Imagina que estás construyendo un formulario de registro de usuarios. Necesitas validar varios campos, como el nombre, el correo electrónico y la contraseña. Cada campo tiene sus propias reglas de validación (por ejemplo, el correo electrónico debe tener un formato válido, la contraseña debe tener una longitud mínima, etc.).

**Sin Currificación:**

Podrías crear funciones de validación individuales para cada campo:

```javascript
function validarNombre(nombre) {
  return nombre.length > 3;
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarPassword(password) {
  return password.length >= 8;
}

// Uso:
if (validarNombre(nombreInput.value) && validarEmail(emailInput.value) && validarPassword(passwordInput.value)) {
  console.log("Formulario válido");
}
```

Esto funciona, pero puede volverse repetitivo y difícil de mantener a medida que agregas más campos y reglas de validación.

**Con Currificación:**

Podemos crear una función de validación genérica que acepte una regla de validación y devuelva una función de validación específica para un campo:

```javascript
function validarCampo(regla) {
  return function(valor) {
    return regla(valor);
  };
}

// Reglas de validación:
const nombreValido = (nombre) => nombre.length > 3;
const emailValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const passwordValido = (password) => password.length >= 8;

// Funciones de validación específicas:
const validarNombreInput = validarCampo(nombreValido);
const validarEmailInput = validarCampo(emailValido);
const validarPasswordInput = validarCampo(passwordValido);

// Uso:
if (validarNombreInput(nombreInput.value) && validarEmailInput(emailInput.value) && validarPasswordInput(passwordInput.value)) {
  console.log("Formulario válido");
}
```

**Ventajas de la Currificación:**

* **Reutilización:** La función `validarCampo` es genérica y se puede reutilizar para cualquier regla de validación.
* **Composición:** Puedes componer reglas de validación más complejas combinando funciones de validación más simples.
* **Legibilidad:** El código es más legible y fácil de entender.
* **Mantenimiento:** Es más fácil agregar o modificar reglas de validación sin modificar el código principal.

**Ejemplo más avanzado:**

Podemos incluso crear una función que acepte múltiples reglas de validación y devuelva una función que las aplique todas:

```javascript
function validarConReglas(...reglas) {
  return function(valor) {
    return reglas.every((regla) => regla(valor));
  };
}

// Reglas de validación combinadas:
const nombreYApellidoValido = validarConReglas(
  (nombre) => nombre.length > 3,
  (nombre) => nombre.split(" ").length === 2
);

const validarNombreCompletoInput = validarCampo(nombreYApellidoValido);

// Uso:
if (validarNombreCompletoInput(nombreCompletoInput.value)) {
  console.log("Nombre y apellido válidos");
}
```

En este ejemplo, la función `validarConReglas` currificada nos permite aplicar múltiples validaciones, como verificar que el nombre completo tenga al menos 3 caracteres y que contenga nombre y apellido, de una forma limpia y reutilizable.

Este es solo un ejemplo, pero la currificación se puede aplicar en muchos otros escenarios donde necesitas crear funciones flexibles y reutilizables.
