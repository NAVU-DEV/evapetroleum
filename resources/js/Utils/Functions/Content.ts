import axios from "axios"
import { ApiURL } from "../Datas/Globals/axios"

export const updateContent = async (data) => {
    console.log('update content : ', data)
    await axios.post(ApiURL + 'contentupdate', data, {
        headers : {
            'Content-Type' : 'multipart/form-data'
        }
    })
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error.response)
    })
}