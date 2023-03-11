import { CardData } from "@/Utils/Datas/Content"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function CardView() {

    useEffect(() => {
        Aos.init({
            duration : 800
        })
    }, [])

    return (
        <div className="grid md:grid-cols-3 px-4 lg:px-24 gap-4 py-4">
            {
                CardData &&
                CardData.map((data, index) => {
                    return (
                        <div key={index} data-aos={`fade-up`} className="grid gap-2 text-center">
                            <p className="text-3xl">{data.title}</p>
                            <img className="shadow-xl shadow-gray-400" src={`images/${data.image.imageUrl}`} alt={data.image.imageAlt} name={data.image.imageName} />
                            <p className="h-24 p-4">{data.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}