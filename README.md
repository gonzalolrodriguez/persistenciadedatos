# App para Cargar y Ver Alumnos

Este proyecto tiene dos partes, bien simples, para que aprendas cómo guardar datos en el navegador y también usando un servidor. Todo pensado para que lo entienda cualquiera que recién arranca.

---

## Parte 1: Solo en el Navegador (carpeta `parte-1`)

### ¿Qué podés hacer?

- Cargar datos de alumnos: **nombre**, **edad** y **nota**.
- Ver la lista de alumnos ordenada por **nota** (de mayor a menor) y después por **nombre** (alfabético).
- Los datos se guardan en tu compu (en el navegador), así que aunque cierres la página, siguen ahí.

### ¿Cómo se usa?

1. Abrí el archivo `parte-1/index.html` con tu navegador (hacé doble clic o arrastralo a Chrome, Edge, Firefox, etc).
2. Completá los datos y apretá **Cargar**.
3. La tabla se actualiza sola y ves todos los alumnos ordenados.
4. Si cerrás y volvés a abrir la página, los datos siguen estando.

### ¿Cómo guarda los datos?

- Usa `localStorage`, que es como una "cajita" que tiene tu navegador para guardar cosas.
- Cada vez que abrís la página, lee lo que guardaste antes y lo muestra.

### Diseño

- Súper simple y minimalista, para que no te pierdas.

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

### Diseño

- Igual de simple y minimalista que la parte 1.

---

## Estructura del Proyecto

```
parte-1/
  index.html         # Solo navegador, sin backend
parte-2/
  server.js          # Backend Node.js
  public/
    index.html       # Página web servida por el backend
package.json         # (opcional, para dependencias de Node.js)
```

---

## Requisitos

- Para parte-1: solo necesitás un navegador moderno.
- Para parte-2: tenés que tener Node.js instalado.

---

## Notas para quienes recién empiezan

- El código es bien simple, pensado para los que están arrancando.
- Podés tocar los archivos y probar cambios sin miedo.
- Si te trabás, buscá en Google o preguntale a tu profe.

---

¡Éxitos y a meterle pilas programando!
