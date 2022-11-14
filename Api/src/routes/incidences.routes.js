import { Router } from 'express'
import routeCallback from './router-callback.js'

import { ValidationMiddleware, ServiceSelectMiddleware } from '../middlewares/index.js'

// import { loginValidate } from './validations/security/index.js'

import { incidencesController } from '../controllers/index.js'

const router = Router()

export default () => {
    router.get('/query', [ServiceSelectMiddleware], (request, response) => {
        const { service } = request.headers
        const moduleKey = service
        routeCallback({ request, response, moduleKey, controller: incidencesController })
    })

    router.post('/manager', [ValidationMiddleware], (request, response) => {
        const moduleKey = `create-incidence`
        routeCallback({ request, response, moduleKey, controller: incidencesController })
    })

    router.post('/managers', [ValidationMiddleware], (request, response) => {
        const moduleKey = `create-classroom`
        routeCallback({ request, response, moduleKey, controller: incidencesController })
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
