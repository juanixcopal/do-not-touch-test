export default ({ classroomsData }) => {
    return async ({ request }) => {
        try {
            const { aula, id_planta, id_tipo_aula } = request.body

            const params = [aula, id_planta, id_tipo_aula]
            const { affectedRows } = await classroomsData.postCreateClassroom(params)

            return affectedRows > 0 ? { result: true, message: 'Aula creada' } : { result: false, message: 'No se ha podido crear el aula' }
        } catch (e) {
            console.log(e)
            return null
        }
    }
}
