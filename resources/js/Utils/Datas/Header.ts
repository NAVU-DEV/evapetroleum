import { HeaderInterface } from '../Interface/Header'

export const HeaderData: HeaderInterface = {
    logo : {
        imageUrl : 'logo.png',
        imageName : 'logo',
        imageAlt : 'logo'
    },
    companyName : 'Eva Petroleum',
    navbar : [
        {
            name : 'Home',
            url : './'
        },
        {
            name : 'Product',
            url : './product'
        },
        {
            name : 'About Us',
            url : './aboutus'
        },
        {
            name : 'Ship Lease',
            url : './shiplease'
        }
    ]
}