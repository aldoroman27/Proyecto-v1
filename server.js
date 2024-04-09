const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "chiva-puma.cbaskge6gh1c.us-east-2.rds.amazonaws.com",
    user: "root",
    password: "12345678",
    database: "chivapuma",
    port: "3306"
})

app.post('/Login', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE nombre_usuario = ? AND contraseña = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json("ERROR");
        if (data.length > 0) {
            return res.json("Login Success")
        } else {
            return res.json("No Record")
        }
    })
})

app.post('/SignIn', (req, res) => {
    const sql = "INSERT INTO usuarios (nombre_usuario, contraseña, nombre) VALUES (?,?,?)";
    db.query(sql, [req.body.email, req.body.password, req.body.name], (err, result) => {
        if (err) {
            console.error('Error al insertar en la base de datos:', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        } else {
            console.log('Nuevo usuario insertado con éxito');
            res.status(200).json({ message: 'Nuevo usuario insertado con éxito' });
        }
    })
})

app.listen(3000, () => {
    console.log("Listening...");
})
