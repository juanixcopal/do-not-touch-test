const express = require('express')
const reportes = express.Router()
// const httpServer = require('http')

// const {Server} = require("socket.io")(httpServer, {
//     cors: {
//       origin: "http://172.27.20.114",
//       methods: ["GET", "POST"]
//     }
//   });
// const  = require('socket.io')

// const io = new Server(3040)

reportes.get('/reportes',(req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query(`SELECT * FROM tb_reporte;`, (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


reportes.post('/reportes', (req, res)=>{
    req.getConnection((err, conn)=>{
        const {titulo, descripcion, id_estado_incidencia, id_aula} = req.body
        if(err) return res.send(err)
        conn.query('INSERT INTO tb_reporte (titulo, descripcion, id_estado_incidencia, id_aula) VALUES (?,?,?,?)', [titulo, descripcion, id_estado_incidencia, id_aula], (err, rows)=>{
            if(err) return res.send(err)
            // io.on("connection", (socket) => {
            //     socket.emit('refreshRemote', "SIUUUUU")
            // })
            res.json(rows)
        })
    })
})


reportes.put('/reportes/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        const {titulo, descripcion, id_estado_incidencia, id_aula} = req.body
        const {id} = req.params
        if(err) return res.send(err)
        conn.query('UPDATE tb_reporte set titulo = ?, descripcion = ?, id_estado_incidencia = ?, id_aula = ? WHERE id_reporte = ?', [titulo, descripcion, id_estado_incidencia, id_aula, id], (err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

reportes.delete('/reportes/:id', (req,res)=>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)
        conn.query('DELETE FROM tb_reporte WHERE id_reporte = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = reportes