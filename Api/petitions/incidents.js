const express = require('express')
const incidencias = express.Router()

incidencias.get('/abiertas', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(
            `SELECT tb_reporte.titulo, tb_reporte.descripcion, tb_estado_incidencia.estado, tb_aula.aula
        FROM tb_reporte
        INNER JOIN tb_estado_incidencia
        ON tb_reporte.id_estado_incidencia = tb_estado_incidencia.id_estado_incidencia
        INNER JOIN tb_aula
        ON tb_reporte.id_aula = tb_aula.id_aula
        WHERE tb_reporte.id_estado_incidencia = 1;`,
            (err, rows) => {
                if (err) return res.send(err)
                res.json(rows)
            }
        )
    })
})

incidencias.get('/pendientes', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(
            `SELECT tb_reporte.titulo, tb_reporte.descripcion, tb_estado_incidencia.estado, tb_aula.aula
        FROM tb_reporte
        INNER JOIN tb_estado_incidencia
        ON tb_reporte.id_estado_incidencia = tb_estado_incidencia.id_estado_incidencia
        INNER JOIN tb_aula
        ON tb_reporte.id_aula = tb_aula.id_aula
        WHERE tb_reporte.id_estado_incidencia = 2;`,
            (err, rows) => {
                if (err) return res.send(err)
                res.json(rows)
            }
        )
    })
})

incidencias.get('/cerradas', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(
            `SELECT tb_reporte.titulo, tb_reporte.descripcion, tb_estado_incidencia.estado, tb_aula.aula
        FROM tb_reporte
        INNER JOIN tb_estado_incidencia
        ON tb_reporte.id_estado_incidencia = tb_estado_incidencia.id_estado_incidencia
        INNER JOIN tb_aula
        ON tb_reporte.id_aula = tb_aula.id_aula
        WHERE tb_reporte.id_estado_incidencia = 3;`,
            (err, rows) => {
                if (err) return res.send(err)
                res.json(rows)
            }
        )
    })
})

incidencias.get('/datos', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query(
            `SELECT tb_reporte.id_reporte, tb_estado_incidencia.id_estado_incidencia, tb_planta.id_planta, tb_aula.id_aula, tb_estado_incidencia.estado,  tb_aula.aula,  tb_planta.planta
        FROM tb_reporte
        INNER JOIN tb_estado_incidencia
        ON tb_reporte.id_estado_incidencia = tb_estado_incidencia.id_estado_incidencia
        INNER JOIN tb_aula
        ON tb_reporte.id_aula = tb_aula.id_aula
        INNER JOIN tb_planta
        ON tb_aula.id_planta = tb_planta.id_planta
        WHERE tb_reporte.id_estado_incidencia = 1;`,
            (err, rows) => {
                if (err) return res.send(err)
                res.json(rows)
            }
        )
    })
})

module.exports = incidencias
