import { BottomSection } from "@/Utils/Datas/Content";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function BottomContent() {
    useEffect(() => {
        Aos.init({
            duration: 800,
        });
    }, []);

    return (
        <div
            className="mt-8"
            style={{
                backgroundImage: `url('images/hero1.jpg')`,
                backgroundPosition: `center`,
                backgroundAttachment: `fixed`,
            }}
        >
            <div className="grid lg:grid-cols-3 gap-2 mt-2 px-4 lg:px-24 py-8 bg-black/50 backdrop-blur-sm text-white">
                <div data-aos={`fade-up`} className="grid gap-2 p-2">
                    <p className="text-3xl p-2 rounded-xl backdrop-blur-3xl w-fit px-4 shadow-xl shadow-pink-200/10">
                        Vision
                    </p>
                    {BottomSection.vision.map((data, index) => {
                        return (
                            <p key={index}>
                                <i className="fa-solid fa-share"></i> {data}
                            </p>
                        );
                    })}
                </div>

                <div data-aos={`fade-up`} className="p-2">
                    <p className="text-3xl backdrop-blur-3xl p-2 px-4 rounded-xl w-fit mb-4 shadow-xl shadow-pink-500/10">
                        {BottomSection.future.title}
                    </p>
                    <div className="flex h-24 gap-2">
                        <div className="w-1 h-full bg-red-500"></div>
                        <div className="grid">
                            <p>{BottomSection.future.desc}</p>
                            <p className="text-red-500 underline-offset-8 hover:underline">
                                <a
                                    href={BottomSection.future.url}
                                    target={`_blank`}
                                >
                                    {BottomSection.future.url}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div data-aos={`fade-up`} className="p-2">
                    <p className="text-3xl w-fit p-2 px-4 backdrop-blur-3xl rounded-xl mb-3 shadow-xl shadow-pink-500/10">
                        {BottomSection.success.title}
                    </p>
                    <p className="text-md">{BottomSection.success.desc}</p>
                </div>
            </div>
        </div>
    );
}
