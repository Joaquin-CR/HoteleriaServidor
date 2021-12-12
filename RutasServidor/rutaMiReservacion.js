const rutaMiReservacion = require('express').Router();
const conexion = require('../Config/conexionMySQL');

// SINGLE SELECT
rutaMiReservacion.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'SELECT * FROM reservacion WHERE iduser_res = ?' //Consulta a la base de datos
    conexion.query(sql,[id],(error,filas,campos)=>{
        if(error) throw error;
        else
        {
            res.json(filas)
        }
    })
});

module.exports = rutaMiReservacion;