const mongoose = require('mongoose');
// Al poner el nombre de la constante en { } hago referencia a que de todo los métodos que tiene una 
//dependencia, solo requiere trabajar con ese metodo.
const { Schema } = mongoose;

const registerUser = new Schema({
    name: { type: String, required: true },
    email : { type: String, required: true },
    password : {type: String, required: true},
    avatar : { type: String, required: false}
})

module.exports = mongoose.model('registerUser', registerUser);