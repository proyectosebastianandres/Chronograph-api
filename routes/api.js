const express = require('express');
const router = express.Router();

// Ruta principal del api
router.get('/', function(req, res) {
    res.send('Ruta principal para las rutas /api ');
});

//Se exporta el módulo para utilizar el código en otro archivo
module.exports = router;