import { SidebarData } from "@/Utils/Datas/Dashboard"

export default function Sidebar(props) {
    

    return (
        <>
            <div className="grid bg-gray-800 text-white px-4 h-full w-full">
                <div>
                    <p className="py-2 font-bold">Navigation</p>
                    <div className="h-1 w-full bg-white/40 mb-2"></div>
                    <div className="grid gap-4 mt-4">
                        {
                            SidebarData.map((data, index) => {
                                return (
                                    <div className="translate-x-4" key={index}>
                                        <div className="flex gap-2">
                                            <div className="flex items-center hover:translate-x-2 gap-2">
                                                <i className="fa-solid fa-caret-right"></i>
                                                <p onClick={() => props.setIframe(data.url)} className="cursor-pointer">{data.name}</p>
                                            </div>
                                        </div>
                                        <div className="h-1 w-full bg-gray-400"></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}