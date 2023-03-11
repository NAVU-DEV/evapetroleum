import { TestimonyData } from "@/Utils/Datas/Content"
import { useEffect, useState } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

export default function Testimony() {

    const [testimony, setTestimony] = useState([])

    useEffect(() => {
        TestimonyData().then(value => {
            setTestimony(value.data)
        })
    }, [])

    useEffect(() => {
        Aos.init({
            duration : 800
        })
    }, [])

    return (
        <div data-aos={`fade-up`} className="px-4 lg:px-24">
            <div className="w-full h-fit mb-8 max-lg:mt-24 mt-12">
                <p className="text-center font-bold text-4xl">Testimonial</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    testimony.map((data, index) => {
                        return (
                            <div className="grid p-2 bg-gray-200 drop-shadow-2xl rounded-xl" key={index}>
                                <p className="font-extrabold text-lg p-2 bg-gray-300 rounded-xl mb-2 h-fit px-4">{data.company}</p>
                                <p className="absolute right-0 p-2 bg-black drop-shadow-2xl text-white translate-x-3 -translate-y-2 rounded-xl">{data.country}</p>
                                <div className="p-4">
                                    <div className="flex gap-2 items-center">
                                        <i className="fa-solid fa-user-large"></i>
                                        <p className="font-bold">{data.person}</p>
                                    </div>
                                    <p className="font-light text-sm my-2">{data.testimony}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}