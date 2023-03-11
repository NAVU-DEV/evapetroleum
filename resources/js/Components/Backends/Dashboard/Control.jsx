import { ApiURL } from "@/Utils/Datas/Globals/axios"
import { toggleDropdown } from "@/Utils/Functions/Dropdown"

export default function Control() {

    const logout = () => {
        axios.post(ApiURL + 'logout')
        .then(response => {
            window.location = './'
        })
        .catch(error => {
            console.log(error.response)
        })
    }

    return (
        <div>
            <p onClick={() => toggleDropdown(`control-dropdown`)} className="cursor-pointer"><i className="fa-solid fa-bars-staggered"></i></p>
            <div id="control-dropdown" className="fixed hidden p-4 bg-white top-12 drop-shadow-2xl rounded-md right-12 grid gap-2">
                <div className="flex gap-2 items-center">
                    <i className="fa-solid fa-door-open"></i>
                    <p onClick={logout} className="cursor-pointer hover:underline underline-offset-4">logout</p>
                </div>
            </div>
        </div>
    )
}