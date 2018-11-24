const mongoose = require('mongoose');

// Sino existe la dirección de la base de datos, mongodb por defecto la creara por nosotros.
const URI = 'mongodb://localhost/chronograph';

//Verificar la conexion mediante una promesa para mirar si hay error en la primera conexión 
//o si es valida la conexión.
mongoose.connect(URI).then(
    () => { console.log('Base de datos conectada')},
    err => { console.log(err)}
)

//Se exporta un objeto con los campos necesarios para hacer la conexion en el archivo server.js
module.exports = mongoose;