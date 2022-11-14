import axios from "axios"

export const getReportingData = async () =>{
    return await axios.get(`http://192.168.0.17:3050/incidencias/datos`)
    .then((response)=>{
        // console.log('Respuesta', response);
        return response
    })
    .catch((error)=>{
        throw error
    })
}