// Sidebar Interface
export interface SidebarInterface {
    icon : string,
    name : string,
    url : string
}

// Inbox Interface
export interface InboxInterface {
    name : string,
    email : string,
    phone : string,
    subject : string,
    message : string
}

// Lease Book Interface
export interface LeaseBookInterface {
    shipId : string,
    company : string,
    email : string,
    document : string,
    bookStatus : string
}

// Shipping Ship Interface
export interface ShippingShipInterface {
    shipId : string,
    company : string,
    email : string,
    document : string,
    shipStatus : string
}