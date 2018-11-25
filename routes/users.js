const express = require('express');
const app = express();
const User = require('../database/models/registerUser');
const router = express.Router();

// Ruta para ver ultimo usuario registrador
router.get('/user/', function(req, res) {
    User.find({}, function(err, users){
        res.send(users);
    })
});
  
// Ruta para crear usuarios
router.post('/user/register', function(req, res) {
    let user = new User(req.body);

    user.save(function(err) {
        if(err) throw err;
        res.send('Usuario guardado');
    })
});

router.get('/user/login', function(req, res){
    res.send('Login para los usuarios');
})
  
//Se exporta el módulo para utilizar el código en otro archivo
module.exports = router;