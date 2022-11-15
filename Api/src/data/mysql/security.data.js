import querys from './querys.js'

export default function makeSecurityData({ makeDbConnection }) {
    async function postLogin(params) {
        try {
            const db = await makeDbConnection(querys.postTryLogin, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al enviar el login' }
        }
    }

    async function validateUserCredentials(params) {
        try {
            const db = await makeDbConnection(querys.validateUserCredentials, params || '')
            return db
        } catch (e) {
            console.log(e)
            throw { status: 500, message: 'Error al enviar el login' }
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

    return Object.freeze({ postLogin, validateUserCredentials })
}
