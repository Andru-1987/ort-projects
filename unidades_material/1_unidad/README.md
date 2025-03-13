### Metodologías de Trabajo: TDD y BDD

#### **TDD (Test-Driven Development)**
TDD es una metodología de desarrollo de software que se basa en la creación de pruebas antes de escribir el código de producción. El ciclo de trabajo en TDD sigue tres pasos principales:

1. **Red**: Escribir una prueba que falle (ya que el código aún no existe).
2. **Green**: Escribir el código mínimo necesario para que la prueba pase.
3. **Refactor**: Mejorar el código sin cambiar su comportamiento, asegurándose de que las pruebas sigan pasando.

**Ventajas de TDD**:
- Mejora la calidad del código.
- Facilita la detección temprana de errores.
- Fomenta un diseño modular y desacoplado.
- Proporciona una suite de pruebas automatizadas.

**Desventajas de TDD**:
- Puede ralentizar el desarrollo inicial.
- Requiere disciplina y experiencia para aplicarlo correctamente.

---

#### **BDD (Behavior-Driven Development)**
BDD es una extensión de TDD que se centra en el comportamiento del sistema desde la perspectiva del usuario. En lugar de escribir pruebas técnicas, se describen escenarios en un lenguaje natural (usando un formato como Gherkin) que todos los miembros del equipo pueden entender.

**Características de BDD**:
- Se enfoca en la colaboración entre desarrolladores, QA y stakeholders.
- Usa un lenguaje comprensible para no técnicos (Given-When-Then).
- Las pruebas se centran en el "qué" (comportamiento) en lugar del "cómo" (implementación).

**Ventajas de BDD**:
- Mejora la comunicación entre equipos.
- Las pruebas son más legibles y fáciles de mantener.
- Alinea el desarrollo con los requisitos del negocio.

**Desventajas de BDD**:
- Puede ser más lento que TDD debido a la necesidad de colaboración.
- Requiere herramientas adicionales (como Cucumber o Jest con soporte para BDD).

---

### Ejemplos de Pruebas: TDD vs BDD

#### **10 Ejemplos de Pruebas con TDD**

1. **Suma de dos números**:
   ```javascript
   it('debería sumar dos números correctamente', () => {
     expect(suma(2, 3)).to.equal(5);
   });
   ```

2. **Resta de dos números**:
   ```javascript
   it('debería restar dos números correctamente', () => {
     expect(resta(5, 3)).to.equal(2);
   });
   ```

3. **Multiplicación de dos números**:
   ```javascript
   it('debería multiplicar dos números correctamente', () => {
     expect(multiplicacion(2, 3)).to.equal(6);
   });
   ```

4. **División de dos números**:
   ```javascript
   it('debería dividir dos números correctamente', () => {
     expect(division(10, 2)).to.equal(5);
   });
   ```

5. **Verificar si un número es par**:
   ```javascript
   it('debería devolver true si el número es par', () => {
     expect(esPar(4)).to.be.true;
   });
   ```

6. **Longitud de un string**:
   ```javascript
   it('debería devolver la longitud de un string', () => {
     expect(longitudString('Hola')).to.equal(4);
   });
   ```

7. **Reverso de un string**:
   ```javascript
   it('debería devolver el string invertido', () => {
     expect(reversoString('Hola')).to.equal('aloH');
   });
   ```

8. **Suma de elementos de un array**:
   ```javascript
   it('debería sumar los elementos de un array', () => {
     expect(sumaArray([1, 2, 3])).to.equal(6);
   });
   ```

9. **Valor máximo de un array**:
   ```javascript
   it('debería devolver el valor máximo de un array', () => {
     expect(maxArray([1, 2, 3])).to.equal(3);
   });
   ```

10. **Factorial de un número**:
    ```javascript
    it('debería devolver el factorial de un número', () => {
      expect(factorial(5)).to.equal(120);
    });
    ```

---

#### **10 Ejemplos de Pruebas con BDD**

1. **Suma de dos números**:
   ```gherkin
   Scenario: Sumar dos números
     Given Tengo los números 2 y 3
     When Los sumo
     Then El resultado debe ser 5
   ```

2. **Resta de dos números**:
   ```gherkin
   Scenario: Restar dos números
     Given Tengo los números 5 y 3
     When Los resto
     Then El resultado debe ser 2
   ```

3. **Multiplicación de dos números**:
   ```gherkin
   Scenario: Multiplicar dos números
     Given Tengo los números 2 y 3
     When Los multiplico
     Then El resultado debe ser 6
   ```

4. **División de dos números**:
   ```gherkin
   Scenario: Dividir dos números
     Given Tengo los números 10 y 2
     When Los divido
     Then El resultado debe ser 5
   ```

5. **Verificar si un número es par**:
   ```gherkin
   Scenario: Verificar si un número es par
     Given Tengo el número 4
     When Verifico si es par
     Then El resultado debe ser true
   ```

6. **Longitud de un string**:
   ```gherkin
   Scenario: Obtener la longitud de un string
     Given Tengo el string "Hola"
     When Obtengo su longitud
     Then El resultado debe ser 4
   ```

7. **Reverso de un string**:
   ```gherkin
   Scenario: Obtener el reverso de un string
     Given Tengo el string "Hola"
     When Lo invierto
     Then El resultado debe ser "aloH"
   ```

8. **Suma de elementos de un array**:
   ```gherkin
   Scenario: Sumar elementos de un array
     Given Tengo el array [1, 2, 3]
     When Sumo sus elementos
     Then El resultado debe ser 6
   ```

9. **Valor máximo de un array**:
   ```gherkin
   Scenario: Obtener el valor máximo de un array
     Given Tengo el array [1, 2, 3]
     When Obtengo el valor máximo
     Then El resultado debe ser 3
   ```

10. **Factorial de un número**:
    ```gherkin
    Scenario: Calcular el factorial de un número
      Given Tengo el número 5
      When Calculo su factorial
      Then El resultado debe ser 120
    ```

---

### Comparación Final

| **Aspecto**          | **TDD**                                  | **BDD**                                  |
|----------------------|------------------------------------------|------------------------------------------|
| **Enfoque**          | Pruebas técnicas (código).               | Comportamiento del sistema (negocio).    |
| **Lenguaje**         | Técnico (código).                        | Natural (Given-When-Then).               |
| **Colaboración**     | Principalmente desarrolladores.          | Equipos multidisciplinarios.             |
| **Herramientas**     | Mocha, Jest, Chai.                       | Cucumber, Jest con soporte BDD.          |
| **Uso**             | Ideal para lógica de negocio y algoritmos. | Ideal para validar requisitos del negocio. |

Ambas metodologías son complementarias y pueden usarse juntas para garantizar un software robusto y alineado con las necesidades del negocio.

---
Algunas herramientas: 
* [Sobre TDD y las herramientas mas comunes](https://www.youtube.com/watch?v=M44umyYPiuo)

- [SUPERTEST](https://www.npmjs.com/package/supertest)
- [JEST](https://jestjs.io/)
- [BUILTIN TESTING MODULES](https://nodejs.org/api/test.html#describe-and-it-aliases)



---
### **`package.json` en Node.js**

El archivo `package.json` es un archivo fundamental en cualquier proyecto de Node.js. Actúa como el manifiesto del proyecto, almacenando metadatos sobre el proyecto (como el nombre, la versión, la descripción, etc.) y gestionando las dependencias y scripts del proyecto.

---

### **Estructura de un `package.json`**

Un archivo `package.json` típico tiene la siguiente estructura:

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "description": "Un proyecto de ejemplo en Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "mocha"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "mocha": "^9.0.0",
    "chai": "^4.3.4"
  },
  "keywords": ["nodejs", "ejemplo"],
  "author": "Tu Nombre",
  "license": "MIT"
}
```

---

### **Campos Importantes en `package.json`**

1. **`name`**:
   - El nombre del proyecto.
   - Debe ser único si se publica en el registro de npm.
   - Ejemplo: `"name": "mi-proyecto"`.

2. **`version`**:
   - La versión del proyecto.
   - Sigue el formato `MAYOR.MENOR.PARCHE` (Semantic Versioning).
   - Ejemplo: `"version": "1.0.0"`.

3. **`description`**:
   - Una breve descripción del proyecto.
   - Ejemplo: `"description": "Un proyecto de ejemplo en Node.js"`.

4. **`main`**:
   - El punto de entrada del proyecto (archivo principal).
   - Ejemplo: `"main": "index.js"`.

5. **`scripts`**:
   - Comandos que se pueden ejecutar con `npm run <comando>`.
   - Ejemplo:
     ```json
     "scripts": {
       "start": "node index.js",
       "test": "mocha"
     }
     ```

6. **`dependencies`**:
   - Lista de paquetes necesarios para que el proyecto funcione en producción.
   - Se instalan con `npm install <paquete>`.
   - Ejemplo:
     ```json
     "dependencies": {
       "express": "^4.17.1"
     }
     ```

7. **`devDependencies`**:
   - Lista de paquetes necesarios solo para desarrollo (pruebas, compilación, etc.).
   - Se instalan con `npm install <paquete> --save-dev`.
   - Ejemplo:
     ```json
     "devDependencies": {
       "mocha": "^9.0.0",
       "chai": "^4.3.4"
     }
     ```

8. **`keywords`**:
   - Palabras clave relacionadas con el proyecto.
   - Útil para publicar en npm.
   - Ejemplo: `"keywords": ["nodejs", "ejemplo"]`.

9. **`author`**:
   - Información sobre el autor del proyecto.
   - Ejemplo: `"author": "Tu Nombre"`.

10. **`license`**:
    - La licencia bajo la cual se distribuye el proyecto.
    - Ejemplo: `"license": "MIT"`.

---

### **Dependencias en Node.js**

Las dependencias son paquetes externos que tu proyecto necesita para funcionar. Estas se dividen en dos tipos:

1. **Dependencias de Producción (`dependencies`)**:
   - Paquetes necesarios para que la aplicación funcione en producción.
   - Se instalan con:
     ```bash
     npm install <paquete>
     ```
   - Ejemplo: `express`, `lodash`, `axios`.

2. **Dependencias de Desarrollo (`devDependencies`)**:
   - Paquetes necesarios solo durante el desarrollo (pruebas, compilación, etc.).
   - Se instalan con:
     ```bash
     npm install <paquete> --save-dev
     ```
   - Ejemplo: `mocha`, `chai`, `eslint`.

---

### **Cómo Gestionar Dependencias**

1. **Instalar una dependencia**:
   - Para producción:
     ```bash
     npm install express
     ```
   - Para desarrollo:
     ```bash
     npm install mocha --save-dev
     ```

2. **Instalar todas las dependencias**:
   - Si clonas un proyecto, puedes instalar todas las dependencias con:
     ```bash
     npm install
     ```

3. **Eliminar una dependencia**:
   ```bash
   npm uninstall express
   ```

4. **Actualizar una dependencia**:
   ```bash
   npm update express
   ```

5. **Ver dependencias instaladas**:
   ```bash
   npm list
   ```

---

### **Versionamiento de Dependencias**

En el `package.json`, las dependencias tienen un formato de versión que sigue el **Semantic Versioning (SemVer)**:

- **`^4.17.1`**: Permite actualizaciones de características y parches, pero no cambios mayores.
  - Ejemplo: `^4.17.1` permite `4.18.0`, pero no `5.0.0`.
- **`~4.17.1`**: Permite solo actualizaciones de parches.
  - Ejemplo: `~4.17.1` permite `4.17.2`, pero no `4.18.0`.
- **`4.17.1`**: Versión exacta (no permite actualizaciones).

---

### **Ejemplo de Flujo de Trabajo con `package.json`**

1. Inicializar un proyecto:
   ```bash
   npm init -y
   ```

2. Instalar una dependencia de producción:
   ```bash
   npm install express
   ```

3. Instalar una dependencia de desarrollo:
   ```bash
   npm install mocha --save-dev
   ```

4. Agregar un script en `package.json`:
   ```json
   "scripts": {
     "start": "node index.js",
     "test": "mocha"
   }
   ```

5. Ejecutar un script:
   ```bash
   npm start
   npm test
   ```

---

### **Consejos para `package.json`**

1. **No editar manualmente `node_modules`**:
   - Las dependencias se gestionan automáticamente con `npm`.

2. **Usar `npm ci` en entornos de CI/CD**:
   - Instala las dependencias de manera limpia y rápida, ideal para integración continua.

3. **Mantener el `package-lock.json`**:
   - Este archivo asegura que todas las instalaciones usen las mismas versiones de dependencias.

4. **Revisar dependencias obsoletas**:
   - Usa `npm outdated` para ver qué dependencias necesitan actualizarse.

---

El `package.json` es el corazón de un proyecto Node.js, y entender cómo funciona te permitirá gestionar dependencias, scripts y metadatos de manera eficiente. ¡Es una herramienta poderosa para cualquier desarrollador de Node.js!
