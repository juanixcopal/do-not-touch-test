import express from 'express'
import config from '../config/env.js'
import router from '../routes/index.routes.js'

let _express = null
const { SERVER_PORT, SERVER_HOST } = config

const start = () => {
    _express = express().use(router({ config }))
    return new Promise(resolve => {
        _express.listen(SERVER_PORT, SERVER_HOST, console.log('Server running on port:', SERVER_PORT))
        resolve()
    })
}

start()
