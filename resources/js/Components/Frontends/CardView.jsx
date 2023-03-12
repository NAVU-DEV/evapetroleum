import { ContentData } from "@/Utils/Datas/Content"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"

export default function CardView() {

    const [cardContent, setCardContent] = useState([])

    useEffect(() => {
        Aos.init({
            duration : 800
        })
    }, [])

    useEffect(() => {  
        ContentData().then(value => {
            setCardContent(value)
        })
    }, [])

    return (
        <div className="grid md:grid-cols-3 px-4 lg:px-24 gap-4 py-4">
            {
                cardContent.length != 0 &&
                <>
                    <div data-aos={`fade-up`} className="grid gap-2 text-center">
                        <p className="text-3xl">{cardContent[0].left_card_title}</p>
                        <img className="shadow-xl shadow-gray-400" src={`images/${cardContent[0].left_card_image}`} alt={cardContent[0].left_card_title} name={cardContent[0].left_card_title} />
                        <p className="h-24 p-4">{cardContent[0].left_card_description}</p>
                    </div>

                    <div data-aos={`fade-up`} className="grid gap-2 text-center">
                        <p className="text-3xl">{cardContent[0].center_card_title}</p>
                        <img className="shadow-xl shadow-gray-400" src={`images/${cardContent[0].center_card_image}`} alt={cardContent[0].center_card_title} name={cardContent[0].center_card_title} />
                        <p className="h-24 p-4">{cardContent[0].center_card_description}</p>
                    </div>

                    <div data-aos={`fade-up`} className="grid gap-2 text-center">
                        <p className="text-3xl">{cardContent[0].right_card_title}</p>
                        <img className="shadow-xl shadow-gray-400" src={`images/${cardContent[0].right_card_image}`} alt={cardContent[0].right_card_title} name={cardContent[0].right_card_title} />
                        <p className="h-24 p-4">{cardContent[0].right_card_description}</p>
                    </div>
                </>
            }
        </div>
    )
}