# App para cargar y ver Alumnos

---

## Parte 1: Solo en el Navegador (carpeta `parte-1`)

### ¿Cómo se usa?

1. Abrí el archivo `parte-1/index.html` con tu navegador (hacé doble clic o arrastralo a Chrome, Edge, Firefox, etc).
2. Completá los datos y apretá **Cargar**.
3. La tabla se actualiza sola y ves todos los alumnos ordenados.
4. Si cerrás y volvés a abrir la página, los datos siguen estando.

### ¿Cómo guarda los datos?

- Usa `localStorage`, que es como una "cajita" que tiene tu navegador para guardar cosas.
- Cada vez que abrís la página, lee lo que guardaste antes y lo muestra.

---

## Parte 2: Con Backend (carpeta `parte-2`)

### ¿Qué podés hacer?

- Igual que la parte 1, pero los datos se guardan en el servidor (en la memoria, por usuario).
- Cada persona que entra desde su compu tiene su propia lista (se usa sesión, no se mezclan los datos).
- Si cerrás y volvés a abrir la página desde la misma compu/navegador, ves tus datos.
- Si entrás desde otra compu, arrancás con la lista vacía para vos.

### ¿Cómo se usa?

1. Instalá Node.js si no lo tenés: https://nodejs.org/
2. Abrí una terminal en la carpeta `parte-2`.
3. Instalá las dependencias:
   ```
   npm install express express-session
   ```
4. Arrancá el servidor:
   ```
   node server.js
   ```
5. Abrí tu navegador y andá a: [http://localhost:3001](http://localhost:3001)
6. Cargá los datos y apretá **Cargar**.
7. La tabla se actualiza sola y ves todos los alumnos ordenados.

### ¿Cómo guarda los datos?

- Usa la memoria del servidor y sesiones de usuario.
- Cada usuario tiene su lista mientras no borre las cookies del navegador.
- Si apagás el servidor, se pierden los datos (no se guardan en disco).

### ¿Y si quiero entrar desde otra compu?

- Si estás en la misma red, poné la IP de tu compu en vez de `localhost`.
- Ejemplo: `http://192.168.1.10:3001` (cambiá por la IP de tu PC).
- El servidor ya está listo para aceptar conexiones desde cualquier IP.

---
