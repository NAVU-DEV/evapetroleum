import { ProductInterface } from "../Interface/Product"
import { ApiURL } from "./Globals/axios"
import axios from "axios"

export const ProductData = async() : Promise<ProductInterface[]> => {
    const response = await axios.get<ProductInterface[]>(ApiURL + 'products')
    return response.data
}