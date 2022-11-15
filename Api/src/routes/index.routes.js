import events from 'events'
events.EventEmitter.defaultMaxListeners = 20

import { Router, json, urlencoded } from 'express'

import cors from 'cors'
import helmet from 'helmet'
import 'express-async-errors'
import compression from 'compression'
import timeout from 'connect-timeout'

import { NotFoundMiddleware, ErrorMiddleware } from '../middlewares/index.js'
import { incidencesRoutes, classroomsRoutes, securityRoutes } from './index.js'

export default ({ config }) => {
    const { SERVER_TIMEOUT } = config
    const router = Router()
    const apiRoutes = Router()

    apiRoutes
        .use(json())
        .use(cors())
        .use(helmet())
        .use(compression())
        .use(urlencoded({ extended: true }))
        .use(timeout(SERVER_TIMEOUT))

    apiRoutes.use('/incidences', incidencesRoutes())
    apiRoutes.use('/classrooms', classroomsRoutes())
    apiRoutes.use('/security', securityRoutes())

    router.use('/v1', apiRoutes)
    router.use(NotFoundMiddleware)
    router.use(ErrorMiddleware)

    return router
}
