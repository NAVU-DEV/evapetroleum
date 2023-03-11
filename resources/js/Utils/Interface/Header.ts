import { NavbarType } from "../Types/Header";
import { ImageType } from "../Types/Global";

export interface HeaderInterface {
    logo : ImageType,
    companyName : string,
    navbar : Array<NavbarType>
}