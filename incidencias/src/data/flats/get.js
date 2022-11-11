import axios from "axios";

export const getFlats = async () => {

  return await axios.get(`http://172.27.20.114:3050/planta/plantas`)
    .then((response) => {
      // console.log('Response', response);
      return response
    })
    .catch((error) => {
      throw error
    })

}