const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(session({
    secret: 'mi-clave-secreta',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express sirve automáticamente la carpeta public y busca el index.html
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    if (!req.session.alumnos) {
        req.session.alumnos = [];
    }
    next();
});

app.get('/datos', (req, res) => {
    // Ordenar por nota descendente y luego por nombre ascendente
    let alumnos = req.session.alumnos.slice();
    alumnos.sort((a, b) => {
        if (b.nota != a.nota) return b.nota - a.nota;
        return a.nombre.localeCompare(b.nombre);
    });
    res.json(alumnos);
});

app.post('/alumno', (req, res) => {
    let { nombre, edad, nota } = req.body;
    if (nombre && edad && nota) {
        // Convertir edad y nota a número
        edad = parseInt(edad);
        nota = parseFloat(nota);
        req.session.alumnos.push({ nombre, edad, nota });
    }
    res.redirect('/');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('Servidor corriendo en http://localhost:' + PORT);
});