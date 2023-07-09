import SearchBar from "@/Components/Globals/SearchBar"
import { ShipleaseData } from "@/Utils/Datas/Shiplease"
import { hiddenToggle } from "@/Utils/Functions/HiddenToggle"
import { sendBookingRequest } from "@/Utils/Functions/Shiplease"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"

export default function Content() {

    const [ships, setShips] = useState([])
    const [findData, setFindData] = useState('')
    const [bookingData, setBookingData] = useState({
        ship_id : null,
        company : '',
        email : '',
        document : null,
        booked_until : null,
    })

    useEffect(() => {
        ShipleaseData().then(value => {
            setShips(value)
        })
    }, [])

    useEffect(() => {
        Aos.init({
            duration : 800
        })
    }, [])

    const handleFindData = (e) => {
        setFindData(e.target.value)
    }

    const handleBookingForm = (e) => {
        
        setBookingData(
            prevState => ({
                ...prevState,
                ship_id : document.querySelector(`.ship-id-${e.target.id[0]}`).value,
                company : document.querySelector(`.company-input-${e.target.id[0]}`).value,
                email : document.querySelector(`.email-input-${e.target.id[0]}`).value,
                document : document.querySelector(`.document-input-${e.target.id[0]}`).files[0],
                booked_until : document.querySelector(`.booked-date-input-${e.target.id[0]}`).value
            })
        )
    }

    return (
        <>
            <div className="w-screen flex items-center justify-center mt-8">
                <p className="text-3xl">Ships</p>
            </div>

            <SearchBar 
                value={findData}
                handleSearch={handleFindData}
            />

            <div className="grid lg:grid-cols-2 gap-2 px-2 lg:px-24"> 
                {
                    ships.filter(ships => ships.name.toLowerCase().includes(findData.toLowerCase())).map((data, index) => {
                        console.log(data)
                        return (
                            <div data-aos={`fade-right`} className="grid lg:grid-cols-3 gap-4 bg-gray-200 rounded-xl drop-shadow-2xl" key={index}>
                                <div className="lg:h-56 w-full max-lg:hidden lg:rounded-l-xl"
                                    style={{ 
                                        backgroundImage : `url('images/${data.image}')`,
                                        backgroundPosition : 'center',
                                        backgroundSize : 'cover'
                                     }}
                                >
                                </div>
                                <div className="grid col-span-2 p-4">
                                    <div className="border-b-2 border-black/50 mb-2 pb-2">
                                        <div className="grid grid-cols-3">
                                            <p>Name</p>
                                            <p className="col-span-2">: {data.name}</p>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <p>Built</p>
                                            <p className="col-span-2">: {data.built}</p>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <p>Yard</p>
                                            <p className="col-span-2">: {data.yard}</p>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <p>LWT</p>
                                            <p className="col-span-2">: {data.lwt}</p>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <p>Rate</p>
                                            <p className="col-span-2">: {parseInt(data.rate).toLocaleString('en-US', {style:"currency", currency:"USD"})}</p>
                                        </div>
                                        <div className="grid grid-cols-3">
                                            <p>Status</p>
                                            <p className="col-span-2">: {data.status}</p>
                                        </div>
                                    </div>
                                    {
                                        data.status == 'Ready' ?
                                        <div className="flex justify-center items-end">
                                            <p onClick={() => hiddenToggle(`booking-form-${data.id}`)} className="cursor-pointer p-2 bg-gray-800 rounded-md text-white">Request</p>
                                        </div>
                                        :
                                        <div className="flex justify-center items-end">
                                            <p className="cursor-pointer p-2 bg-gray-400 rounded-md text-white cursor-wait tooltip" data-tip="Shipping">Available on {data.lease_book[0].booked_until}</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                
                {
                    ships.map((data, index) => {
                        return (
                            <div id={`booking-form-${data.id}`} className="fixed hidden flex justify-center items-center w-screen h-screen top-0 left-0 bg-black/80 rounded-xl" key={index}>
                                <div className="grid text-center bg-gray-200 rounded-xl p-2 gap-2">
                                    <p className="text-2xl">Booking Form</p>
                                    <div className="grid gap-2 text-start">
                                        <div className="grid grid-cols-5 px-2 bg-gray-800 text-white py-1 rounded-md">
                                            <p>Ship</p>
                                            <p className="col-span-4"> : {data.name}</p>
                                        </div>
                                    </div>
                                    <input type="hidden" value={data.id} id={index} readOnly className={`ship-id-${index}`}/>
                                    <input type="text" value={bookingData.company} id={index} onChange={handleBookingForm} className={`company-input-${index} h-8 rounded-md`} placeholder="company"/>
                                    <input type="text" value={bookingData.email} id={index} onChange={handleBookingForm} className={`email-input-${index} h-8 rounded-md`} placeholder="email"/>
                                    <input type="date" value={bookingData.booked_until} id={index} onChange={handleBookingForm} className={`booked-date-input-${index} h-8 rounded-md`}/>
                                    <input type="file" onChange={handleBookingForm} id={`${index}-file`} className={`document-input-${index} hidden`}/>
                                    <label htmlFor={`${index}-file`} className="p-1 bg-gray-800 hover:bg-gray-600 cursor-pointer text-white font-bold rounded-md">Upload Document Here</label>
                                    <div className="flex gap-2 w-full">
                                        <button className="w-full p-1 bg-gray-800 hover:bg-gray-600 cursor-pointer text-white rounded-md" onClick={() => sendBookingRequest(bookingData)}>submit</button>
                                        <button className="w-full p-1 bg-red-800 hover:bg-red-600 cursor-pointer text-white rounded-md" onClick={() => hiddenToggle(`booking-form-${data.id}`)}>close</button>
                                    </div>
                                </div>
                            </div>
                        )    
                    })
                }
            </div>
        </>
    )
}