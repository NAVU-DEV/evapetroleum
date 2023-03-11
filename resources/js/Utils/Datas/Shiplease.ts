import { ShipleaseInterface } from "../Interface/Shiplease"
import { ApiURL } from "./Globals/axios"
import axios from "axios"

export const ShipleaseData = async(): Promise<ShipleaseInterface[]> => {
    const promise = await axios.get<ShipleaseInterface[]>(ApiURL + 'shipleases')
    return promise.data
}