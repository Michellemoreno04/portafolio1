const nodemailer = require("nodemailer")
const express = require('express');

// Crea una instancia de Express
const app = express();



const port = 3000;

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});


