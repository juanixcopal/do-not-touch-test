import axios from "axios";

export const getFlats = async () => {

  return await axios.get(`http://192.168.0.17:3050/planta/plantas`)
    .then((response) => {
      // console.log('Response', response);
      return response
    })
    .catch((error) => {
      throw error
    })

}