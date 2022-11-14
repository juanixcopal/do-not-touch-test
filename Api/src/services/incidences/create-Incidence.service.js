export default ({ incidencesData }) => {
    return async ({ request }) => {
        try {
            const { titulo, descripcion, id_estado_incidencia, id_aula } = request.body

            const params = [titulo, descripcion, id_estado_incidencia, id_aula]
            const { affectedRows } = await incidencesData.postCreateIncidence(params)

            return affectedRows > 0 ? { result: true, message: 'Incidencia creada' } : { result: false, message: 'No se ha podido crear la incidencia' }
        } catch (e) {
            console.log(e)
            return null
        }
    }
}
