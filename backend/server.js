const express = require('express'); // Crea el servidor
const dotenv = require('dotenv'); // Para usar variables de entorno
const cors = require('cors'); 
const bcrypt = require('bcrypt'); // Sirve para encriptar conraseñas
const conectarBDmongo = require ('./src/config/db.js'); //MongoDB
const conectarBD = require('./src/config/db.js');

dotenv.config(); //Carga las variables de un archivo .env
conectarBD();

const app = express(); // inicia servidor

app.use(express.json());// permite leer JSON en las solicitudes
app.use(cors());

app.use("/api/auth", require("./src/routes/auth.js"));
app.use("/api/tareas", require("./src/routes/tasks.js"));

conectarBDmongo(); // se llama la funcion de base de datos

console.log("Hello world");