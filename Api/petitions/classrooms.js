const express = require('express')
const classrooms = express.Router()

classrooms.get('/classrooms', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(`SELECT tb_aula.id_aula, tb_aula.aula, tb_tipo_aula.tipo_aula, tb_planta.planta, tb_planta.id_planta 
        FROM tb_aula 
        INNER JOIN tb_tipo_aula 
        ON tb_aula.id_tipo_aula = tb_tipo_aula.id_tipo_aula 
        INNER JOIN tb_planta 
        ON tb_aula.id_planta = tb_planta.id_planta;`, (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = classrooms