import axios from "axios"

export const getReportingData = async () =>{
    return await axios.get(`http://localhost:3050/incidencias/datos`)
    .then((response)=>{
        // console.log('Respuesta', response);
        return response
    })
    .catch((error)=>{
        throw error
    })
}