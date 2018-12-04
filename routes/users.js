const express = require('express');
const app = express();
const User = require('../database/models/registerUser');
const router = express.Router();

// Ruta para ver lista de los usuario registrador
router.get('/user', function(req, res) {
    User.find({}, 'name email avatar', function(err, users){
        if(err) throw err; 
        
        res.send(users);
    })
});

//Ruta para ver el id de un usuario
router.get('/user/:id', function(req, res) {
    let test = User.findById(req.params.id);
    User.findById(req.params.id)
        .then ( user => {
            res.send(user);
        })
        .catch (err => {
            res.send(err);
        }) 
});
  
// Ruta para crear usuarios
router.post('/user/register', function(req, res) {
    let user = new User(req.body);

    user.save()
    .then( item => {
       res.send('Usuario guardado');
    })
    .catch( err => {
       res.status(400).send('Usuario no guardado');
    })
});

router.post('/user/login', function(req, res){
    User.findOne({
        email: req.body.email
    }, function(err, user){
        if(!user){
            res.sendStatus(403);
        }
        else if(user){
            if(user.password != req.body.password) {
                res.sendStatus(403);
            } else{
                res.send(user);
            }
        }
        
    })
})
  
//Se exporta el módulo para utilizar el código en otro archivo
module.exports = router;