const rutaUsuarios = require('express').Router();
const conexion = require('../Config/conexionMySQL');

rutaUsuarios.get('/', (req, res) => {
    let sql = 'SELECT * FROM usuarios';
    conexion.query(sql,(error,filas,campos) => {
        if(error) throw error;
        else
        {
            res.json(filas);
        }
    })
});

// SINGLE SELECT
// rutaUsuarios.get('/:id', (req, res)=>{
//     const {id} = req.params
//     let sql = 'SELECT * FROM usuarios WHERE userN_user = ?' //Consulta a la base de datos
//     conexion.query(sql,[id],(error,filas,campos)=>{
//         if(error) throw error;
//         else
//         {
//             res.json(filas)
//         }
//     })
// });

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

//  INSERT
rutaUsuarios.post('/', (req, res)=>{
    const {nomUser, apellUser, userN, mail, pass, cell} = req.body;
    let sql = `INSERT INTO usuarios(nombre_user, apellido_user, userN_user, mail_user, password_user, cel_user) `+
    `VALUES('${nomUser}', '${apellUser}', '${userN}', '${mail}', '${pass}', '${cell}')`
    conexion.query(sql, (error, filas, campos)=>{
        if(error) throw error;
        else
        {
            res.json({status: 'usuario agregado'})
            console.log("usuario agregado");
        }
    })
});

// UPDATE
rutaUsuarios.put('/:id', (req, res)=>{
    const {id} = req.params
    const {apellUser, userN, mail, pass, cell} = req.body;
    let sql = `UPDATE usuarios SET apellido_user = '${apellUser}',
                userN_user = '${userN}',
                mail_user = '${mail}',
                password_user = '${pass}',
                cel_user = '${cell}'
                WHERE id_user = '${id}'`
    conexion.query(sql, (error, filas,campos)=>{
        if(error) throw error;
        else
        {
            res.json({status: 'usuario actualizado'})
        }
    });
});

//DELETE
rutaUsuarios.delete('/:id', (req, res)=>{
    const {id} = req.params
    let sql = `DELETE FROM usuarios WHERE id_user = '${id}'`
    conexion.query(sql, (error, filas,campos)=>{
        if(error) throw error;
        else
        {
            res.json({status: 'usuario eliminado'})
        }
    });
});

module.exports = rutaUsuarios;