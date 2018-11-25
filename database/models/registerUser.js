const mongoose = require('mongoose');
// Al poner el nombre de la constante en { } hago referencia a que de todo los métodos que tiene una 
//dependencia, solo requiere trabajar con ese metodo.
const { Schema } = mongoose;

const newUser = new Schema({
    name: String,
    email : String,
    password : String,
    avatar : String
})


module.exports = mongoose.model('User', newUser);