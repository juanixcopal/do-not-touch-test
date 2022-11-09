const express = require('express')
const estados = express.Router()

estados.get('/estados', (req,res)=>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tb_estado_incidencia', (err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)      
        })
    })
})

estados.post('/estados', (req, res)=>{
    req.getConnection((err, conn)=>{
        const {estado} = req.body
        if(err) return res.send(err)

        conn.query('INSERT INTO tb_estado_incidencia (estado) VALUES (?)', [estado], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

estados.put('/estados/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        const {estado} = req.body
        const {id} = req.params

        if(err) return res.send(err)
        conn.query('UPDATE tb_estado_incidencia set estado = ? WHERE id_estado_incidencia = ?', [estado, id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

estados.delete('/estados/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM tb_estado_incidencia WHERE id_estado_incidencia = ? ', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})
module.exports = estados