const express = require('express')
const tipoAulas = express.Router()

tipoAulas.get('/typeaulas', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM tb_tipo_aula', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

tipoAulas.post('/typeaulas', (req, res) => {
    req.getConnection((err, conn) => {
        const { tipo_aula } = req.body
        if (err) return res.send(err)
        conn.query('INSERT INTO tb_tipo_aula (tipo_aula) VALUES (?)', [tipo_aula], (err, rows) => {
            if (err) return res.send(err)
            res.send(rows)
        })
    })
})

tipoAulas.put('/typeaulas/:id', (req, res) => {
    req.getConnection((err, conn) => {
        const { tipo_aula } = req.body
        const { id } = req.params

        if (err) return res.send(err)
        conn.query('UPDATE tb_tipo_aula set tipo_aula = ? WHERE id_tipo_aula = ?', [tipo_aula, id], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

tipoAulas.delete('/typeaulas/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM tb_tipo_aula WHERE id_tipo_aula = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = tipoAulas
