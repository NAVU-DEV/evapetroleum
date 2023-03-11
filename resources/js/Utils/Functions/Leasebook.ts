import axios from "axios";
import FileSaver from "file-saver";
import { ApiURL } from "../Datas/Globals/axios"

// lease book document download function
export const DownloadDocument = async (filename) => {
    await axios.get(ApiURL + 'getDocument?name=' + filename, {
        responseType: 'blob'
    })
    .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        FileSaver.saveAs(url, 'document.pdf')
    })
    .catch(error => {
        console.log(error.response)
    })
}

// accept book request function
export const acceptBookingRequest = async(ID, shipId) => {
    await axios.post(ApiURL + 'acceptbook?id=' + ID + '&ship_id=' + shipId)
    .then(response => {
        location.href = './leasebook'
    })
    .catch(error => {
        console.log(error.response)
    })
}