**1. let y const**

* **a) Declaración y reasignación:**

```javascript
let edad = 30;
const nombre = "Juan";

edad = 31; // Esto es válido
nombre = "Carlos"; // Esto dará un error: Assignment to constant variable.
```

* **Explicación:**
    * `let` permite declarar variables que pueden ser reasignadas.
    * `const` declara constantes, cuyo valor no puede ser modificado después de la asignación inicial.

* **b) Bucles:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (const i = 0; i < 5; i++) { // Esto dará un error
  console.log(i);
}
```

* **Explicación:**
    * `let` es adecuado para variables que cambian dentro de un bucle.
    * `const` no puede ser usado en un bucle donde la variable necesita ser reasignada.

* **c) Objetos y constantes:**

```javascript
const persona = {
  nombre: "Ana",
  edad: 25,
};

persona.edad = 26; // Esto es válido
console.log(persona);
```

* **Explicación:**
    * `const` impide la reasignación de la variable `persona` en sí, pero no impide la modificación de sus propiedades internas.

**2. Array**

* **a) Añadir elementos:**

```javascript
const frutas = ["manzana", "plátano", "naranja", "uva", "pera"];
frutas.unshift("fresa"); // Añade al principio
frutas.push("kiwi"); // Añade al final
console.log(frutas);
```

* **b) Números pares:**

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);
```

* **c) Combinar arrays:**

```javascript
const colores1 = ["rojo", "verde", "azul"];
const colores2 = ["amarillo", "morado"];
const todosColores = [...colores1, ...colores2];
console.log(todosColores);
```

**3. Objetos y propiedades**

* **a) Acceder a propiedades:**

```javascript
const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anio: 1967,
};

console.log(libro.titulo);
console.log(libro["autor"]);
```

* **b) Modificar y añadir:**

```javascript
const persona = {
  nombre: "Luis",
  edad: 30,
};

persona.hobby = "leer";
persona.edad = 31;
console.log(persona);
```

* **c) Métodos de objeto:**

```javascript
const calculadora = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b,
};

console.log(calculadora.sumar(5, 3));
```

**4. Arrow Functions**

* **a) Conversión:**

```javascript
const saludar = (nombre) => `Hola, ${nombre}!`;
```

* **b) Cuadrado de un número:**

```javascript
const cuadrado = (numero) => numero * numero;
```

* **c) Arrow function en map:**

```javascript
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map((numero) => numero * 2);
```

**5. Template Literals**

* **a) Variables en cadena:**

```javascript
const nombre = "Elena";
const edad = 28;
const profesion = "programadora";
const mensaje = `Mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}.`;
```

* **b) Función con template literals:**

```javascript
const crearFrase = (producto, precio) =>
  `El producto ${producto} tiene un precio de ${precio} euros.`;
```

* **c) Mensaje de error:**

```javascript
const nombreError = "TypeError";
const descripcion = "Variable indefinida";
const mensajeError = `Error: ${nombreError}. Descripción: ${descripcion}.`;
```

**6. Métodos de array**

* **a) Encontrar número:**

```javascript
const numeros = [5, 12, 8, 15, 3];
const mayorQue10 = numeros.find((numero) => numero > 10);
```

* **b) Estudiantes aprobados:**

```javascript
const estudiantes = [
  { nombre: "Ana", calificacion: 8 },
  { nombre: "Pedro", calificacion: 5 },
  { nombre: "Sofía", calificacion: 9 },
];
const aprobados = estudiantes.filter((estudiante) => estudiante.calificacion >= 6);
```

* **c) Unir palabras:**

```javascript
const palabras = ["Hola", "mundo", "ES6"];
const frase = palabras.join(", ");
```

**7. Spread Operator**

* **a) Suma de argumentos:**

```javascript
const sumar = (...numeros) => numeros.reduce((acc, num) => acc + num, 0);
```

* **b) Número máximo:**

```javascript
const numeros = [10, 5, 20, 15];
const maximo = Math.max(...numeros);
```

* **c) Combinar objetos:**

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
```

**8. Destructuring**

* **a) Extraer propiedades:**

```javascript
const persona = { nombre: "Laura", edad: 27 };
const { nombre, edad } = persona;
```

* **b) Destructuring en función:**

```javascript
const mostrarInfo = ({ nombre, edad }) =>
  `Nombre: ${nombre}, Edad: ${edad}`;
```

* **c) Destructuring de array:**

```javascript
const ciudad = ["Madrid", "España", 3000000];
const [nombre, pais, poblacion] = ciudad;
```
