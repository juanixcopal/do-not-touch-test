import { incidencesData } from '../../data/index.js'

import makeClassroomsService from './classrooms.service.js'
import makeOpenIncidencesService from './open-incidences.service.js'
import makeFloorsService from './floors.service.js'
import makeCreateIncidenceService from './create-Incidence.service.js'

const classroomsService = makeClassroomsService({ incidencesData })
const openIncidencesService = makeOpenIncidencesService({ incidencesData })
const floorsService = makeFloorsService({ incidencesData })
const createIncidenceService = makeCreateIncidenceService({ incidencesData })

const incidencesServices = {
    classrooms: classroomsService,
    'open-incidences': openIncidencesService,
    floors: floorsService,
    'create-incidence': createIncidenceService
}

export default incidencesServices
