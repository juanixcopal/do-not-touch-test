export default ({ incidencesServices, helpersObject }) => {
    return async ({ request, moduleKey }) => {
        try {
            if (incidencesServices[moduleKey]) {
                const resultService = await incidencesServices[moduleKey]({
                    request,
                    helpersObject
                })

                const { status } = resultService

                return {
                    status: status || 200,
                    body: resultService
                }
            } else
                return {
                    status: 400,
                    body: {
                        type: 'about:blank',
                        message: 'Internal Server Error',
                        status: 400,
                        detail: 'Service not found'
                    }
                }
        } catch (e) {
            return null
        }
    }
}
