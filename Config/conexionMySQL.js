const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    port: '3306', //Puerto default
    database: 'hotelcursodia' //Nombre de la base de datos 
});

connection.connect((error) => {
    if (error) 
    {
        console.log('Error connecting to hotel');
    } 
    else 
    {
        console.log('Connection to hotel');
    }
});

module.exports = connection;