const rutaEmpleados = require('express').Router();
const conexion = require('../Config/conexionMySQL');

// SELECT
rutaEmpleados.get('/', (req, res) => {
    let sql = 'SELECT * FROM empleados';

    conexion.query(sql,(error,filas,campos) => {
        if(error) throw error;
        else
        {
            res.json(filas);
        }
    })
});

// SINGLE SELECT
rutaEmpleados.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'SELECT * FROM empleados WHERE id_empleado = ?' //Consulta a la base de datos
    conexion.query(sql,[id],(error,filas,campos)=>{
        if(error) throw error;
        else
        {
            res.json(filas)
        }
    })
});

// INSERT
rutaEmpleados.post('/', (req, res)=>{
    const {nomEmpleado, apellEmpleado, mail, id, pass, puesto} = req.body;
    let sql = `INSERT INTO empleados(id_empleado, nombre_empleado, apellido_empleado, email_empleado, password_empleado, puesto_empleado) `+
    `VALUES('${id}', '${nomEmpleado}', '${apellEmpleado}', '${mail}', '${pass}', '${puesto}')`
    conexion.query(sql, (error, filas, campos)=>{
        if(error) throw error;
        else
        {
            res.json({status: 'empleado agregado'})
            console.log("empleado agregado");
        }
    })
});

// UPDATE
rutaEmpleados.put('/:id', (req, res)=>{
    const {id} = req.params
    const {mail, pass, puesto} = req.body;
    let sql = `UPDATE empleados SET email_empleado = '${mail}',
                password_empleado = '${pass}',
                puesto_empleado = '${puesto}'
                WHERE id_empleado = '${id}'`
    conexion.query(sql, (error, filas,campos)=>{
        if(error) throw error;
        else
        {
            res.json({status: 'empleado actualizado'})
        }
    });
});

// DELETE
rutaEmpleados.delete('/:id', (req, res)=>{
    const {id} = req.params
    let sql = `DELETE FROM empleados WHERE id_empleado = '${id}'`
    conexion.query(sql, (error, filas,campos)=>{
        if(error) throw error;
        else
        {
            res.json({status: 'empleado eliminado'})
        }
    });
});

module.exports = rutaEmpleados;