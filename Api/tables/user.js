const express = require('express')
const user = express.Router()

user.get('/user', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query(`SELECT * FROM tb_user`,(err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

user.post('/user', (req, res)=>{
    req.getConnection((err, conn)=>{
        const { name, surname, password, username } = req.body
        if(err) return res.send(err)
        conn.query(`INSERT INTO tb_user (name, surname, password, username) VALUES (?,?,?,?)`, [name, surname, password, username], (err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})

user.put('/user/:id',(req,res)=>{
    req.getConnection((err, conn)=>{
        const { name, surname, password, username } = req.body
        const {id} = req.params

        if(err) return res.send(err)
        conn.query(`UPDATE tb_user set name = ?, surname = ?, password = ?, username = ? WHERE id_user = ?`, [name, surname, password, username, id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

user.delete('user/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query(`DELETE FROM tb_user WHERE id_user = ?`, [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = user