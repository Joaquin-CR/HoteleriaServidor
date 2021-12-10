const rutaReservacion = require('express').Router();
const conexion = require('../Config/conexionMySQL');

// rutaReservacion.get('/', function(req, res) {
//     res.send("La ruta principal funciona");
// });

// SELECT
rutaReservacion.get('/', (req, res) => {
    let sql = 'SELECT * FROM reservacion';
    conexion.query(sql,(error, filas, campos) => {
        if(error) throw error;
        else
        {
            res.json(filas);
        }
    })
});

// SINGLE SELECT
rutaReservacion.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'SELECT * FROM reservacion WHERE id_res = ?' //Consulta a la base de datos
    conexion.query(sql,[id],(error,filas,campos)=>{
        if(error) throw error;
        else
        {
            res.json(filas)
        }
    })
})

//  INSERT
rutaReservacion.post('/', (req, res)=>{
    const{idRes, idUser, fecIn, fecOut, numA, numN, numC} = req.body;
    const fecRes = new Date(Date.now()).toISOString();
    console.log(fecIn);
    console.log(fecRes);
    let sql = `INSERT INTO reservacion(id_res, iduser_res, fecRes_res, fecIn_res, fecOut_res, numA_res, numN_res, numC_res) `+
    `VALUES('${idRes}', '${idUser}', '${fecRes}', '${fecIn}', '${fecOut}', '${numA}', '${numN}', '${numC}')`
    conexion.query(sql, (error, filas, campos)=>{
        if(error) throw error;
        else
        {
            res.json({status: 'reservacion agregada'})
            // console.log("reservacion agregada");
        }
    })
});

// DELETE
rutaReservacion.delete('/:id', (req, res)=>{
    const {id} = req.params
    let sql = `DELETE FROM reservacion WHERE id_res = '${id}'`
    conexion.query(sql, (error, filas,campos)=>{
        if(error) throw error;
        else
        {
            res.json({status: 'reservacion eliminada'})
        }
    });
});

// UPDATE
rutaReservacion.put('/:id', (req, res)=>{
    const {id} = req.params
    const{fecIn, fecOut, numA, numN, numC} = req.body;
    let sql = `UPDATE reservacion SET fecIn_res = '${fecIn}',
                fecOut_res = '${fecOut}',
                numA_res = '${numA}',
                numN_res = '${numN}',
                numC_res = '${numC}'
                WHERE id_res = '${id}'`
    conexion.query(sql, (error, filas,campos)=>{
        if(error) throw error;
        else
        {
            res.json({status: 'reservacion actualizada'})
        }
    });
});

module.exports = rutaReservacion;