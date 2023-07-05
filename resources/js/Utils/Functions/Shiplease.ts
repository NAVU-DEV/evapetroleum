// import requirement module
import axios from "axios"
import { ApiURL } from "../Datas/Globals/axios"

// shiplease booking function
export const sendBookingRequest = (data) => {
    axios.post(ApiURL + 'sendbooking', data, {
        headers : {
            'Content-Type' : 'multipart/form-data'
        }
    })
    .then(response => {
        alert('Book Sent')
        location.href = './shiplease'
    })
    .catch(error => {
        console.log(error.response)
    })
}

export const markAsDone = async (shipId) => {
    await axios.post(ApiURL + `mark-as-done/${shipId}`)
    .then(response => {
        alert('Shipping Done')
        location.href = './ships'
    })
    .catch(error => {
        console.log(error.response)
    })
}