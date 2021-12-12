const rutaUsuarios = require('express').Router();
const conexion = require('../Config/conexionMySQL');

// SELECT PARA EL ID DEL USUARIO Y LA CONTRASEÑA
rutaUsuarios.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'SELECT id_user, password_user FROM usuarios WHERE userN_user = ?' //Consulta a la base de datos
    conexion.query(sql,[id],(error,filas,campos)=>{
        if(error) throw error;
        else
        {
            res.json(filas)
        }
    })
});

module.exports = rutaUsuarios;