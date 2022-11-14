export default ({ incidencesData }) => {
    return async () => {
        try {
            const result = await incidencesData.getOpenIncidences()
            // const result2 = await incidencesData.getClassrooms()
            // const result3 = await incidencesData.getFloors()

            return result
        } catch (e) {
            console.log(e)
            return null
        }
    }
}
