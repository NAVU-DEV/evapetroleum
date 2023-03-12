import { ContentData } from "@/Utils/Datas/Content"
import { updateContent } from "@/Utils/Functions/Content"
import { useEffect, useState } from "react"

export default function ContentManager() {

    const [contentData, setContentData] = useState([])
    const [updatedData, setUpdatedData] = useState({})

    const handleFormInput = () => {
        setUpdatedData(
            prevState => ({
                ...prevState,
                hero_title : document.querySelector('.hero-title').value,
                hero_description : document.querySelector('.hero-description').value,
                left_card_image : document.querySelector('.left-card-image').files[0],
                left_card_title : document.querySelector('.left-card-title').value,
                left_card_description : document.querySelector('.left-card-description').value,
                center_card_image : document.querySelector('.center-card-image').files[0],
                center_card_title : document.querySelector('.center-card-title').value,
                center_card_description : document.querySelector('.center-card-description').value,
                right_card_image : document.querySelector('.right-card-image').files[0],
                right_card_title : document.querySelector('.right-card-title').value,
                right_card_description : document.querySelector('.right-card-description').value,
                about_us : document.querySelector('.about-us').value,
                email : document.querySelector('.email').value
            })
        )
    }

    useEffect(() => {
        ContentData()
        .then(value => {
            console.log('value: ', value)
            setContentData(value)
            setUpdatedData(
                prevState => ({
                    ...prevState,
                    hero_title : value[0].hero_title,
                    hero_description : value[0].hero_description,
                    left_card_image : value[0].left_card_image,
                    left_card_title : value[0].left_card_title,
                    left_card_description : value[0].left_card_description,
                    center_card_image : value[0].center_card_image,
                    center_card_title : value[0].center_card_title,
                    center_card_description : value[0].center_card_description,
                    right_card_image : value[0].right_card_image,
                    right_card_title : value[0].right_card_title,
                    right_card_description : value[0].right_card_description,
                    about_us : value[0].about_us,
                    email : value[0].email
                })
            )
        })
        .catch(error => {
            console.log(error.response)
        })
    }, [])

    return (
        <div className="grid grid-cols-2 w-fit h-screen overflow-hidden">
            {/* iframe */}
            <iframe src='./' frameBorder="0" className="w-full h-full"></iframe>

            {/* Editor Form */}
            {
                contentData[0] &&
                <div className="grid gap-2 h-fit p-2">
                    <p className="w-full text-center pb-2 text-4xl bg-gray-800 text-white py-2">Home Editor</p>

                    <div className="flex items-center justify-center gap-2">
                        <input type="text" name="" id="" className="w-full rounded-md h-8 hero-title" value={updatedData.hero_title} onChange={handleFormInput} placeholder="Hero Title"/>
                        <input type="text" name="" id="" className="w-full rounded-md h-8 hero-description" value={updatedData.hero_description} onChange={handleFormInput} placeholder="Hero Description"/>
                    </div>

                    <div className="grid grid-cols-3 items-center justify-center gap-2">
                        <div className="grid gap-2">
                            <div className="h-36" style={{ 
                                backgroundImage : `url(images/${contentData[0].left_card_image})`,
                                backgroundSize : `cover`,
                                backgroundPosition : 'center'
                            }}>{/* left card image */}
                            </div>
                            <input type="file" id="leftCardImage" className="w-full rounded-md h-8 hidden left-card-image" onChange={handleFormInput}/>
                            <label htmlFor="leftCardImage" className="text-center p-1 font-bold cursor-pointer bg-gray-800 text-white hover:bg-gray-600"><i class="fa-solid fa-cloud-arrow-up"></i> upload</label>
                        </div>
                        <div className="grid gap-2">
                            <div className="h-36" style={{ 
                                backgroundImage : `url(images/${contentData[0].center_card_image})`,
                                backgroundSize : `cover`,
                                backgroundPosition : 'center'
                            }}>
                                {/* center card image */}
                            </div>
                            <input type="file" id="leftCardImage" className="w-full hidden center-card-image" onChange={handleFormInput}/>
                            <label htmlFor="leftCardImage" className="text-center p-1 font-bold cursor-pointer bg-gray-800 text-white hover:bg-gray-600"><i class="fa-solid fa-cloud-arrow-up"></i> upload</label>
                        </div>
                        <div className="grid gap-2">
                            <div className="h-36" style={{ 
                                backgroundImage : `url(images/${contentData[0].right_card_image})`,
                                backgroundSize : `cover`,
                                backgroundPosition : 'center'
                            }}>
                                {/* right card image */}
                            </div>
                            <input type="file" id="leftCardImage" className="w-full hidden right-card-image" onChange={handleFormInput}/>
                            <label htmlFor="leftCardImage" className="text-center p-1 font-bold cursor-pointer bg-gray-800 text-white hover:bg-gray-600"><i class="fa-solid fa-cloud-arrow-up"></i> upload</label>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2">
                        <input type="text" className="w-full rounded-md h-8 left-card-title" value={updatedData.left_card_title} onChange={handleFormInput} placeholder="Left Card Title"/>
                        <input type="text" className="w-full rounded-md h-8 center-card-title" value={updatedData.center_card_title} onChange={handleFormInput} placeholder="Center Card Title"/>
                        <input type="text" className="w-full rounded-md h-8 right-card-title" value={updatedData.right_card_title} onChange={handleFormInput} placeholder="Right Card Title"/>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <textarea className="w-full rounded-md h-56 left-card-description" value={updatedData.left_card_description} onChange={handleFormInput} placeholder="Left Card Description"></textarea>
                        <textarea className="w-full rounded-md h-56 center-card-description" value={updatedData.center_card_description} onChange={handleFormInput} placeholder="Center Card Description"></textarea>
                        <textarea className="w-full rounded-md h-56 right-card-description" value={updatedData.right_card_description} onChange={handleFormInput} placeholder="Right Card Description"></textarea>
                    </div>

                    <textarea className="w-full rounded-md h-24 about-us" value={updatedData.about_us} onChange={handleFormInput} placeholder="About Us"></textarea>

                    <input type="text" className="rounded-md h-8 email" value={updatedData.email} onChange={handleFormInput} placeholder="email" />

                    <button onClick={() => updateContent(updatedData)} className="p-1 bg-gray-800 text-white rounded hover:bg-gray-600">update</button>
                </div>
            }
        </div>
    )
}