**Clase: Control de Versiones con Git**


**Contenido:**

**1. Introducción al Control de Versiones (Teoría):**

* **¿Qué es el control de versiones?**
    * Explicar que es un sistema que registra los cambios realizados sobre un archivo o un conjunto de archivos a lo largo del tiempo, de modo que se puedan recuperar versiones específicas más adelante.
    * Importancia del control de versiones en el desarrollo de software:
        * Seguimiento de cambios.
        * Colaboración eficiente.
        * Recuperación de versiones anteriores.
        * Gestión de ramas (branches).
* **Tipos de sistemas de control de versiones:**
    * Centralizados (CVS, Subversion).
    * Distribuidos (Git).
* **¿Por qué Git?**
    * Popularidad y amplia adopción.
    * Flexibilidad y potencia.
    * Velocidad y eficiencia.
    * Comunidad activa.

**2. Conceptos Básicos de Git (Teoría y Gráficos):**

* **Repositorio:**
    * Explicar que es un directorio que contiene todos los archivos del proyecto y el historial de cambios.
    * Repositorios locales y remotos.
    * **Área de trabajo (Working Directory):**
        * Archivos en los que estás trabajando actualmente.
    * **Área de preparación (Staging Area o Index):**
        * Archivos que se van a incluir en el próximo commit.
    * **Commit:**
        * Una instantánea de los cambios realizados.
        * Cada commit tiene un identificador único (hash).
    * **Ramas (Branches):**
        * Líneas de desarrollo paralelas.
        * Rama principal (master o main).
        * Creación, fusión y eliminación de ramas.
    * **Gráfico del flujo de trabajo de Git:**
        * Incluir un diagrama que muestre el flujo de trabajo entre el área de trabajo, el área de preparación y el repositorio local.

**3. Comandos Básicos de Git (Práctica):**

* **Configuración inicial:**
    * `git config --global user.name "Tu Nombre"`
    * `git config --global user.email "tu.email@ejemplo.com"`
* **Inicialización de un repositorio:**
    * `git init`
* **Estado del repositorio:**
    * `git status`
* **Añadir archivos al área de preparación:**
    * `git add <archivo>`
    * `git add .` (para añadir todos los archivos)
* **Realizar un commit:**
    * `git commit -m "Mensaje del commit"`
* **Ver el historial de commits:**
    * `git log`
    * `git log --oneline` (versión simplificada)
* **Crear y cambiar de rama:**
    * `git branch <nombre_rama>`
    * `git checkout <nombre_rama>`
    * `git checkout -b <nombre_rama>` (crea y cambia a la rama)
* **Fusionar ramas:**
    * `git merge <nombre_rama>`
* **Repositorios remotos:**
    * `git remote add origin <URL_repositorio_remoto>`
    * `git push origin <nombre_rama>`
    * `git pull origin <nombre_rama>`
    * `git clone <URL_repositorio_remoto>`

**4. Comandos Avanzados y Parámetros Importantes:**

* **`git diff`:**
    * Muestra las diferencias entre el área de trabajo y el área de preparación, o entre commits.
    * `git diff --staged`
* **`git reset`:**
    * Deshace cambios en el área de preparación o en el repositorio.
    * `git reset HEAD <archivo>`
    * `git reset --hard <commit>`
* **`git stash`:**
    * Guarda cambios temporales sin hacer commit.
    * `git stash pop`
* **`git rebase`:**
    * Reescribe el historial de commits.
* **`.gitignore`:**
    * Especifica archivos y directorios que Git debe ignorar.

**5. Software Similares a Git:**

* **Subversion (SVN):**
    * Sistema de control de versiones centralizado.
* **Mercurial (Hg):**
    * Sistema de control de versiones distribuido, similar a Git.
* **Perforce:**
    * Sistema de control de versiones centralizado, utilizado en grandes proyectos.
* **Azure DevOps:**
    * Incluye control de versiones Git, además de otras herramientas de desarrollo.

**6. Recursos Adicionales:**

* **Documentación oficial de Git:** git-scm.com
* **Plataformas de alojamiento de repositorios Git:**
    * GitHub.
    * GitLab.
    * Bitbucket.

**Actividades Prácticas:**

* Crear un repositorio local y realizar commits.
* Crear y fusionar ramas.
* Clonar un repositorio remoto y realizar cambios.
* Resolver conflictos de fusión.
* Utilizar un archivo .gitignore.

**Auto -> Evaluación:**

* Participación en las actividades prácticas.
* Resolución de ejercicios propuestos.
* Creación de un proyecto en equipo, utilizando git para el control de versiones.
