import { classroomsData } from '../../data/index.js'

import makeCreateClassrooms from './create-classroom.service.js'

const createClassrooms = makeCreateClassrooms({ classroomsData })

const classroomsServices = {
    'create-classroom': createClassrooms
}

export default classroomsServices
