const express = require('express');
const router = express.Router();

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