import { HeaderData } from "@/Utils/Datas/Header"
import { hiddenToggle } from "@/Utils/Functions/HiddenToggle"
import { useEffect } from "react"

export default function Header() {

    const changeHeaderOpacity = () => {
        if (window.scrollY > 100) {
            document.querySelector('.dynamic-header-bg').classList.remove('bg-opacity-20')
        } else {
            document.querySelector('.dynamic-header-bg').classList.add('bg-opacity-20')
        }
    }

    useEffect(() => {
        changeHeaderOpacity()
        addEventListener("scroll", changeHeaderOpacity)
    }, [])

    return (
        <>
            <div className="fixed font-exo flex w-screen transition-colors duration-300 top-0 h-fit py-4 px-4 lg:px-24 justify-between items-center bg-white bg-opacity-20 backdrop-blur-sm z-[999] dynamic-header-bg shadow-2xl">
                {/* Company Name */}
                <div className="flex justify-center items-center gap-2">
                    <img 
                        src={`images/${HeaderData.logo.imageUrl}`} 
                        alt={HeaderData.logo.imageAlt} 
                        name={HeaderData.logo.imageName} 
                    />
                    <div className="grid text-center font-bold">
                        <p>ايفا للبترول</p>
                        <p>{HeaderData.companyName}</p>
                    </div>
                </div>

                {/* Navbar */}
                <div className="max-lg:hidden flex gap-3">
                    {
                        HeaderData.navbar.map((data, index) => {
                            return (
                                <div className="flex w-[5rem] cursor-pointer hover:border-b-2 border-black items-center" key={index}>
                                    <a className="w-full text-center" href={data.url}>{data.name}</a>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex lg:hidden h-full items-center justify-center">
                    <div onClick={() => hiddenToggle(`mobileMenu`)} className="grid gap-1 h-full lg:hidden cursor-pointer hover:backdrop-blur-sm p-4 hover:bg-white/20 rounded-xl">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div id="mobileMenu" className="fixed hidden flex items-center justify-center top-0 left-0 w-screen h-[100vh] bg-black/80">
                        <div className="grid px-4 pb-8 bg-white rounded-xl">
                            <div className="flex gap-8 justify-between items-center">
                                <p className="py-4 text-3xl font-bold">Eva Petroleum</p>
                                <p onClick={() => hiddenToggle(`mobileMenu`)} className="flex items-center p-2 cursor-pointer hover:bg-gray-300 bg-gray-200 rounded-md drop-shadow-2xl"><i className="fa-solid fa-xmark"></i></p>
                            </div>
                            <div className="h-1 w-full bg-black/50 mb-2"></div>
                            <div className="grid gap-4 text-xl">
                                <a className="hover:translate-x-2" href="./"><i className="fa-solid fa-caret-right"></i> Home</a>
                                <a className="hover:translate-x-2" href="./aboutus"><i className="fa-solid fa-caret-right"></i> About Us</a>
                                <a className="hover:translate-x-2" href="./product"><i className="fa-solid fa-caret-right"></i> Products</a>
                                <a className="hover:translate-x-2" href="./shiplease"><i className="fa-solid fa-caret-right"></i> Ship Lease</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}