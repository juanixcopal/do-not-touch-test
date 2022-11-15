export default ({ securityData }) => {
    return async ({ request }) => {
        try {
            const { username, password } = request.body
            console.log('TRY LOGIN', request.body)
            const params = [username, password]

            const userValidate = await securityData.validateUserCredentials(params)

            if (userValidate) {
                return 'CREDENCIALES CORRECTAS'
            } else {
                return 'Credenciales malas'
            }
            // const params = [username, password]
            // const { affectedRows } = await securityData.postLogin(params)
            // console.log();

            // return affectedRows > 0 ? { result: true, message: 'Aula creada' } : { result: false, message: 'No se ha podido crear el aula' }
        } catch (e) {
            console.log(e)
            return null
        }
    }
}
