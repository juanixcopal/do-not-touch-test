// import helpersObject from '../helpers/index.js'

import incidencesServices from '../services/incidences/index.js'
import classroomsServices from '../services/classrooms/index.js'
import securityServices from '../services/security/index.js'

import makeIncidencesController from './incidences.controller.js'
import makeClassroomsController from './classrooms.controller.js'
import makeSecurityController from './security.controller.js'

const incidencesController = makeIncidencesController({ incidencesServices })
const classroomsController = makeClassroomsController({ classroomsServices })
const securityController = makeSecurityController({ securityServices })

export { incidencesController, classroomsController, securityController }
