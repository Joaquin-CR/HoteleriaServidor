// IMPORTAMOS LA CONEXION 
require('./Config/conexionMySQL');

// IMPORTAMOS LA LIBRERÍA/FRAMEWORK DE EXPRESS
const express = require('express');

// RECUPERAMOS EL PUERTO EN EL CUAL SE ESTÁ PUBLICANDO EL SERVIDOR
const port = (process.env.port || 3000);

// CONSTANTE DE LA APLICACIÓN COMPLETA
const app = express();

/* ********* CONFIGURAR ********* */ 
// LE DECIMOS A LA APP QUE SE ASIGNE EN EL PUERTO QUE RECUPERAMOS
app.set('port', port);

/* ********* CONFIGURAR RUTAS ********* */ 
app.use('/apiReservacion', require('./RutasServidor/rutasReservacion'));
app.use('/apiUsuarios', require('./RutasServidor/rutaUsuarios'));
app.use('/apiEmpleados', require('./RutasServidor/rutaEmpleados'));

// INICIAR EXPRESS COMO SERVIDOR
app.listen(app.get('port'),(error) => {
    if(error)
    {
        console.log("Error al iniciar el servidor " + error);
    }
    else
    {
        console.log("Servidor iniciado en el puerto "+port);
    }
});