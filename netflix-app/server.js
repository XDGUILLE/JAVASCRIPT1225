// server.js - Backend Node.js + Express + MySQL
// Academia Fibonacci - Semana 14

const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = 3000;

// ─────────────────────────────────────────────
// Middleware
// ─────────────────────────────────────────────
app.use(express.json());
app.use(express.static('public')); // Sirve los archivos frontend

// ─────────────────────────────────────────────
// Conexion a MySQL
// ─────────────────────────────────────────────
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // Cambia por tu usuario
  password: '',        // Cambia por tu password
  database: 'NetflixDB'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a NetflixDB');
});

// ─────────────────────────────────────────────
// RUTAS API
// ─────────────────────────────────────────────

// GET /api/series - Obtener todas las series
app.get('/api/series', (req, res) => {
  const sql = 'SELECT * FROM Series ORDER BY titulo';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).json({ error: 'Error al obtener series' });
    }
    res.json(results);
  });
});

// GET /api/series/:id - Obtener serie con episodios (LEFT JOIN)
app.get('/api/series/:id', (req, res) => {
  const { id } = req.params;
  const sql = `
    SELECT 
      s.serie_id,
      s.titulo,
      s.descripcion,
      s.año_lanzamiento,
      s.genero,
      e.episodio_id,
      e.titulo AS episodio_titulo,
      e.temporada,
      e.duracion,
      e.rating_imdb
    FROM Series s
    LEFT JOIN Episodios e ON s.serie_id = e.serie_id
    WHERE s.serie_id = ?
    ORDER BY e.temporada, e.episodio_id
  `;
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).json({ error: 'Error al obtener la serie' });
    }
    res.json(results);
  });
});

// GET /api/series/:id/actores - Obtener actores de una serie
app.get('/api/series/:id/actores', (req, res) => {
  const { id } = req.params;
  const sql = `
    SELECT 
      a.actor_id,
      a.nombre,
      sa.personaje
    FROM Actores a
    INNER JOIN Series_Actores sa ON a.actor_id = sa.actor_id
    WHERE sa.serie_id = ?
    ORDER BY a.nombre
  `;
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).json({ error: 'Error al obtener actores' });
    }
    res.json(results);
  });
});

// ─────────────────────────────────────────────
// Iniciar servidor
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
