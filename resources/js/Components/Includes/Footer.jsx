import { ContentData } from "@/Utils/Datas/Content"
import { useEffect, useState } from "react"

export default function Footer() {

    const [footerContent, setFooterContent] = useState([])

    useEffect(() => {
        ContentData().then(value => {
            setFooterContent(value)
        })
    }, [])

    return (
        <div className="flex gap-8 w-full lg:px-24 px-4 justify-between bg-black py-8 text-white">
            {
                footerContent[0] &&
                <>
                    <div className="grid text-center">
                        <p className="text-xl font-bold">About Us</p>
                        <p className="w-[50vw]">{footerContent[0].about_us}</p>
                    </div>

                    <div className="text-center">
                        <p>Get In Touch</p>
                        <p>{footerContent[0].email}</p>
                    </div>
                </>
            }
        </div>
    )
}