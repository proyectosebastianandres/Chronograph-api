const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Se llaman los archivo que contiene la ruta base /api
const registerUser = require('./routes/users');
const baseApi = require('./routes/api');

//Importar la configuracion para conectar a la base de datos
const config = require('./database/config');

//middleware para mirar las peticiones en la consola
const morgan = require('morgan');
app.use(morgan('dev'));

// Se utiliza la variable para generar el registro con la url de base /api
app.use('/api', baseApi);
app.use('/api', registerUser);

// Ruta base del servidor con Express
app.get('/', function(req, res) {
    res.send("API CHRONOGRAHP");
})

// Puerto que se utilizara para entrar al servidor.
app.listen('3000', function(){
    console.log('Servidor iniciado en el puerto 3000');
})