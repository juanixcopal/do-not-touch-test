// import helpersObject from '../helpers/index.js'

import incidencesServices from '../services/incidences/index.js'

import makeIncidencesController from './incidences.controller.js'

const incidencesController = makeIncidencesController({ incidencesServices })

export { incidencesController }
