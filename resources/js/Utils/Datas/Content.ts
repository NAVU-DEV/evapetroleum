import { CardInterface, TestimonyInterface, BottomInterface  } from "../Interface/Content"
import { ApiURL } from "./Globals/axios"
import axios from "axios"

export const CardData1: Array<CardInterface> = [
    {
        image : {
            imageUrl: 'storegetank.jpg',
            imageAlt: 'Storage Tank',
            imageName: 'storage-tank',
        },
        title: 'Storage Tank',
        desc: 'Storage tank provide company in Sharjah UAE, Fujairah UAE and storage tanks in Tanjung Balai Karimun, Indonesia.'
    },
    {
        image : {
            imageUrl: 'vesselchartering.jpg',
            imageAlt: 'Chartering',
            imageName: 'Chartering',
        },
        title: 'Vessel Chartering',
        desc: 'Storage tank provide company in Sharjah UAE, Fujairah UAE and storage tanks in Tanjung Balai Karimun, Indonesia.'
    },
    {
        image : {
            imageUrl: 'quality.jpg',
            imageAlt: 'Quality of Product',
            imageName: 'quality',
        },
        title: 'Quality of Product',
        desc: 'Crude Oil, Fuel Oil, Diesel, Gasoline, Naphtha and others Oil specifications, also provide oil mix tank facilities ask customer requests.'
    }
]

export const ContentData = async(): Promise<CardInterface[]> => {
    const response = await axios.get<CardInterface[]>(ApiURL + 'gethomecontent')
    return response.data
}

// Get Data Testimony
export const TestimonyData = async(): Promise<TestimonyInterface[]> => {
    const response = await axios.get<TestimonyInterface[]>(ApiURL + 'testimony')
    return response.data
}

// Bottom Section
export const BottomSection: BottomInterface = {
    vision : [
        'Competitive',
        'Quality of Product & Best Price',
        'Efficient',
        'Best Service',
        'Commitment',
        'Environmental Resposibility'
    ],
    future : {
        title : 'Future',
        desc : 'Best Quality of Oil & Gas Product and Best Price',
        url : 'http://www.evapetroleum.com'
    },
    success : {
        title : 'Success',
        desc : 'Assisting our global customers in realizing their industrial potential'
    }
}
