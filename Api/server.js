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
const classrooms = require('./petitions/classrooms.js');
const user = require('./tables/user.js')

const app = express()

app.set('port', process.env.PORT || 3050)

const dbOptions ={
    host: '172.27.18.199',
    port: 3306,
    user: 'rene',
    password: 'ixcopalsj',
    database: 'incidencias'
}

// 172.27.18.199

//Middlewares-----
app.use(myconn(mysql, dbOptions, 'single'))
app.use(cors())
app.use(express.json())

//Routes
app.get('/',(req, res)=>{
    res.send('Welcome to APY the welcome to the issues API')
})

app.use('/api', reportes)
app.use('/api', aulas)
app.use('/api', estados)
app.use('/api', tipoaulas)
app.use('/api', plantas)
app.use('/api', incidencias)
app.use('/api', classrooms)
app.use('/api', user)

//Server running
app.listen(app.get('port'), ()=>{
    console.log('Server running on port', app.get('port'));
})