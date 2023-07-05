// Sidebar Attribute
// Sidebar Interface
import { SidebarInterface } from "../Interface/Dashboard"

// Sidebar Data
export const SidebarData: Array<SidebarInterface> = [
    {
        icon : '',
        name : 'inbox',
        url : './inbox'
    },
    {
        icon : '',
        name : 'Ships',
        url : './ships'
    },
    {
        icon : '',
        name : 'Lease Book',
        url : './leasebook'
    },
    {
        icon : '',
        name : 'CMS',
        url : './contentmanager'
    }
]

// Inbox Interface
import { InboxInterface } from "../Interface/Dashboard"
import { ApiURL } from "./Globals/axios"
import axios from "axios"
// Inbox Data
export const InboxData = async(page, find) : Promise<InboxInterface[]> => {
    const response = await axios.get<InboxInterface[]>(ApiURL + 'inboxes?page=' + page + '&find=' + find)
    return response.data
}

// Lease Book Interface
import { LeaseBookInterface } from "../Interface/Dashboard"
// Lease Book Data
export const LeaseBookData = async(page, find) : Promise<LeaseBookInterface[]> => {
    const response = await axios.get<LeaseBookInterface[]>(ApiURL + 'leasebooks?page=' + page + '&find=' + find )
    console.log(response.data)
    return response.data
}

// Shipping ship Interface
import { ShippingShipInterface } from "../Interface/Dashboard"
// Shipping ship data
export const ShippingShipData = async() : Promise<ShippingShipInterface[]> => {
    const response = await axios.get<ShippingShipInterface[]>(ApiURL + 'getshipingships')
    return response.data
}