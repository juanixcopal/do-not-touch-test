const express = require('express')
const aulas = express.Router()

aulas.get('/aulas', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(`SELECT * FROM tb_aula;`, (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

aulas.post('/aulas', (req, res) => {
    req.getConnection((err, conn) => {
        const { aula, id_planta, id_tipo_aula } = req.body
        if (err) return res.send(err)

        conn.query('INSERT INTO tb_aula (aula, id_planta, id_tipo_aula) VALUES (?,?,?)', [aula, id_planta, id_tipo_aula], (err, rows) => {
            if (err) return (err)
            res.json(rows)
        })
    })
})

aulas.put('/aulas/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const { aula, id_planta, id_tipo_aula } = req.body
        const { id } = req.params
        if (err) return res.send(err)
        conn.query('UPDATE tb_aula set aula = ?, id_planta = ?, id_tipo_aula = ? WHERE id_aula = ?', [aula, id_planta, id_tipo_aula, id], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

aulas.delete('/aulas/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_aula WHERE id_aula = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = aulas