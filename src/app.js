const express = require('express');
const config = require('./config');

const clientes = require('./modulos/clientes/rutas.js') //asiganamos ruta
const app = express();

//configuracion
app.set('port', config.app.port);  // asignamos puerto que viene desde el archivo confing


//rutas 
app.use('/api/clientes', clientes)

module.exports = app;
