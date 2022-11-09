import axios from "axios";

export const getFlats = async () => {

  return await axios.get(`http://localhost:3050/planta/plantas`)
    .then((response) => {
      // console.log('Response', response);
      return response
    })
    .catch((error) => {
      throw error
    })

}