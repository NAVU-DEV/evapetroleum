import { HeroData } from "@/Utils/Datas/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        Aos.init({
            duration: 800,
        });
    }, []);

    return (
        <div
            className="w-screen transition-all duration-200 h-screen"
            style={{
                backgroundImage: `url("images/${HeroData.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                data-aos={`zoom-out-up`}
                className="flex items-center px-24 justify-center w-full h-full bg-black/40"
            >
                {/* black overlay */}
                <div className="grid p-4 w-fit text-center bg-white/20 backdrop-blur-xl rounded-xl gap-4">
                    <p className="text-3xl">{HeroData.heroTitle}</p>
                    <p>{HeroData.heroText}</p>
                    <div className="flex justify-center py-2">
                        <a href="./aboutus">
                            <p className="rounded py-2 px-4 drop-shadow-xl bg-gray-900 text-white font-bold cursor-pointer">
                                About Us
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
