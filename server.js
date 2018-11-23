const express = require('express');
const app = express();

//Se llaman los archivo que contiene la ruta base /api
const registerUser = require('./routes/users');
const createProject = require('./routes/projects')
const baseApi = require('./routes/api');

//middleware para mirar las peticiones en la consola
const morgan = require('morgan');
app.use(morgan('dev'));

// Se utiliza la varible para generar el registro con la url de base /api
app.use('/api', baseApi);
app.use('/api', registerUser);
app.use('/api', createProject);

// Ruta base del servidor con Express
app.get('/', function(req, res) {
    res.send("API CHRONOGRAHP");
})

// Puerto que se utilizara para entrar al servidor.
app.listen('3000', function(){
    console.log('Servidor iniciado en el puerto 3000');
})