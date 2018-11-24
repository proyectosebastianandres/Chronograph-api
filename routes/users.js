const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// use body parser so we can get info from POST and/or URL parameters
//app.use(bodyParser.urlencoded( { extended : false}));
//app.use(bodyParser.json());

// Ruta para ver ultimo usuario registrador
router.get('/user/', function(req, res) {
    res.send('Ultimo usuario registrado: ');
});
  
// Ruta para crear usuarios
router.post('/user/register', function(req, res) {
    res.send('Registrar usuario:');
});

router.get('/user/login', function(req, res){
    res.send('Login para los usuarios');
})
  
//Se exporta el módulo para utilizar el código en otro archivo
module.exports = router;