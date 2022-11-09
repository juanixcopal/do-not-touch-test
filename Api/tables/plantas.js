const express = require('express')
const plantas = express.Router()

plantas.get('/plantas', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tb_planta', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

plantas.post('/plantas', (req, res)=>{
    req.getConnection((err, conn)=>{
        const {planta} = req.body
        if(err) return res.send(err)
        conn.query('INSERT INTO tb_planta (planta) VALUES (?)', [planta], (err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})

plantas.put('/plantas/:id',(req,res)=>{
    req.getConnection((err, conn)=>{
        const {planta} = req.body
        const {id} = req.params

        if(err) return res.send(err)
        conn.query('UPDATE tb_planta set planta = ? WHERE id_planta = ?', [planta, id], (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

plantas.delete('/plantas/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM tb_planta WHERE id_planta = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        } )
    })
})


module.exports = plantas