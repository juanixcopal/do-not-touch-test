import querys from './querys.js'

export default function makeTicketAccessData({ makeDbConnection }) {
    async function getClassrooms(params) {
        try {
            const db = await makeDbConnection(querys.getClassrooms, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al obtener las aulas' }
        }
    }

    async function getOpenIncidences(params) {
        try {
            const db = await makeDbConnection(querys.getOpenIncidences, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al obtener las incidencias abiertas' }
        }
    }

    async function getFloors(params) {
        try {
            const db = await makeDbConnection(querys.getFloors, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al obtener las incidencias abiertas' }
        }
    }

    async function postCreateIncidence(params) {
        try {
            const db = await makeDbConnection(querys.postCreateIncidence, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al crear la incidencia' }
        }
    }

    async function postCreateClassrooms(params) {
        try {
            const db = await makeDbConnection(querys.postCreateClassrooms, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al crear la incidencia' }
        }
    }

    // async function getCategories(params) {
    //     try {
    //         const db = await makeDbConnection()
    //         if (params) {
    //             const result = db
    //                 .collection('categories')
    //                 .doc(params || null)
    //                 .get()
    //             return result
    //         } else {
    //             const result = db.collection('categories').get()
    //             return result
    //         }
    //     } catch (e) {
    //         console.log(e)
    //         throw { status: 500, message: 'Error al obtener los tickets' }
    //     }
    // }

    // async function createTicket(params, id_category) {
    //     try {
    //         const db = await makeDbConnection()
    //         const reference = {
    //             ...params,
    //             id_category: db.collection('categories').doc(id_category)
    //         }
    //         const result = db.collection('tickets').add(reference)
    //         return result
    //     } catch (e) {
    //         console.log(e)
    //         throw { status: 500, message: 'Error al crear el ticket' }
    //     }
    // }

    // async function updateTicket(params, id_for_update, id_category) {
    //     try {
    //         const db = await makeDbConnection()
    //         const reference = {
    //             ...params,
    //             id_category: db.collection('categories').doc(id_category)
    //         }

    //         const result = db.collection('tickets').doc(id_for_update).update(reference)

    //         return result
    //     } catch (e) {
    //         throw { status: 500, message: 'Error al actualizar el ticket' }
    //     }
    // }

    // async function deleteTicket(id) {
    //     try {
    //         const db = await makeDbConnection()
    //         const result = db.collection('tickets').doc(id).delete()
    //         return result
    //     } catch (e) {
    //         throw { status: 500, message: 'Error al eliminar el ticket' }
    //     }
    // }

    return Object.freeze({ getClassrooms, getOpenIncidences, getFloors, postCreateIncidence, postCreateClassrooms })
}
