import axios from "axios"
import { ShipsInterface } from "../Interface/Ships"
import { ApiURL } from "./Globals/axios"

// ships data
export const ShipsData = async(page, find) : Promise<ShipsInterface[]> => {
    const response = await axios.get<ShipsInterface[]>(ApiURL + 'getships?page=' + page + '&find=' + find)
    return response.data
}