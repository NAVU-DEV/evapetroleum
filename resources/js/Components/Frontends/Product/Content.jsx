import SearchBar from "@/Components/Globals/SearchBar";
import { ProductData } from "@/Utils/Datas/Product";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";

export default function Content() {

    const [product, setProduct] = useState([])
    const [findData, setFindData] = useState('')

    useEffect(() => {
        ProductData().then(value => {
            setProduct(value)
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

    return (
        <>
            <div className="flex justify-center pt-4">
                <p className="text-3xl">Products</p>
            </div>
            <SearchBar
                value={findData}
                handleSearch={handleFindData}
            />
            <div className="grid lg:grid-cols-2 gap-4 px-4 lg:px-24 mb-8">
                {
                    product.filter(product => product.product_name.toLowerCase().includes(findData.toLowerCase()) || product.product_code.toLowerCase().includes(findData.toLowerCase())).map((data, index) => {
                        return (
                            <div data-aos={`zoom-out-up`} key={index} className="bg-gray-200 mb-2 rounded-md drop-shadow-xl p-4">
                                <div className="grid grid-cols-8 gap-2">
                                    <p>Name</p>
                                    <p className="col-span-7">: {data.product_name}</p>
                                </div>
                                <div className="grid grid-cols-8 gap-2 my-2">
                                    <p>Code</p>
                                    <p className="col-span-7">: {data.product_code}</p>
                                </div>
                                <img className="w-full" src={`images/${data.product_image}`} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}