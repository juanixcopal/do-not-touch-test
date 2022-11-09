const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const myconn = require('express-myconnection');
const plantas = require('./tables/plantas.js');
const aulas = require('./tables/aulas.js');
const estados = require('./tables/estado.js');
const reportes = require('./tables/reporte.js');
const tipoaulas = require('./tables/tipoAulas.js')
const incidencias = require('./petitions/incidents.js');
const classrooms = require('./petitions/classrooms.js')

const app = express()

app.set('port', process.env.PORT || 3050)

const dbOptions ={
    host: '172.27.18.199',
    port: 3306,
    user: 'rene',
    password: 'ixcopalsj',
    database: 'incidencias'
}

//Middlewares-----
app.use(myconn(mysql, dbOptions, 'single'))
app.use(cors())
app.use(express.json())

//Routes
app.get('/',(req, res)=>{
    res.send('Welcome to APY the welcome to the issues API')
})

app.use('/reporte', reportes)
app.use('/aula', aulas)
app.use('/estado', estados)
app.use('/tipo', tipoaulas)
app.use('/planta', plantas)
app.use('/incidencias', incidencias)
app.use('/classroom', classrooms)

//Server running
app.listen(app.get('port'), ()=>{
    console.log('Server running on port', app.get('port'));
})