import { Router } from 'express'
import routeCallback from './router-callback.js'

import { ValidationMiddleware, ServiceSelectMiddleware } from '../middlewares/index.js'

import { classroomsController } from '../controllers/index.js'

const router = Router()

export default () => {
    router.post('/manager', [ValidationMiddleware], (request, response) => {
        const moduleKey = `create-classroom`
        routeCallback({ request, response, moduleKey, controller: classroomsController })
    })

    // router.put('/manager', [ValidationMiddleware], (request, response) => {
    //     const moduleKey = `update-ticket`
    //     routeCallback({ request, response, moduleKey, controller: ticketController })
    // })

    // router.delete('/manager', [ValidationMiddleware], (request, response) => {
    //     const moduleKey = `delete-ticket`
    //     routeCallback({ request, response, moduleKey, controller: ticketController })
    // })

    return router
}
