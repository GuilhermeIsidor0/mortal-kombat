require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
app.use(express.static('public'));

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'app',
  password: process.env.DB_PASSWORD || 'app_pw',
  database: process.env.DB_NAME || 'meubanco',
  waitForConnections: true,
  connectionLimit: 10
});

app.get('/api/usuarios', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, nome, email FROM usuarios');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/health', (req, res) => res.send('ok'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
