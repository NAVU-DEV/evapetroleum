import { ImageType } from "../Types/Global";

export interface CardInterface {
    image : ImageType,
    title : string,
    desc : string
}

export interface TestimonyInterface {
    company : string,
    country : string,
    person : string,
    testimony : string
}

export interface BottomInterface {
    vision : Array<string>
    future : {
        title : string,
        desc : string,
        url : string
    },
    success : {
        title : string,
        desc : string
    }
}