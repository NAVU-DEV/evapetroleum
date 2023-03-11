import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function Maps() {

    useEffect(() => {
        Aos.init({
            duration : 800
        })
    }, [])

    return (
        <div className="grid gap-2">
            <iframe data-aos={`fade-left`} className="w-full h-96 lg:h-full shadow-xl shadow-gray-400" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5711789621632!2d55.28135731543932!3d25.217679983886732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4292f6d3f4ab%3A0x67b81a59cfac0a46!2sServcorp%20Emirates%20Towers%20-%20Coworking%2C%20Offices%2C%20Virtual%20Offices%20%26%20Meeting%20Rooms!5e0!3m2!1sen!2sid!4v1676650093078!5m2!1sen!2sid' width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            <iframe data-aos={`fade-left`} className="w-full h-96 lg:h-full shadow-xl shadow-gray-400" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.632597876029!2d106.80720392681818!3d-6.221958266326419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1513cd1c841%3A0x31a20c34a54b6238!2sEva%20Petroleum%2C%20Limited!5e0!3m2!1sen!2sid!4v1676710862460!5m2!1sen!2sid' width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
    )
}