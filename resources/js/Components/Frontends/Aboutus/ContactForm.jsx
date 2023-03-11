import { ApiURL } from "@/Utils/Datas/Globals/axios";
import { switchHidden } from "@/Utils/Functions/HiddenToggle";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContactForm() {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [customSubject, setCustomSubject] = useState("");

    const handleInput = () => {
        setMessage((prevState) => ({
            ...prevState,
            name: document.querySelector(".name-input").value,
            email: document.querySelector(".email-input").value,
            phone: document.querySelector(".phone-input").value,
            subject: customSubject,
            message: document.querySelector(".message-input").value,
        }));
    };

    console.log(customSubject);

    const submit = () => {
        axios
            .post(ApiURL + "sendmessage", message)
            .then((response) => {
                alert("Message Sent!");
                location.href = "./aboutus";
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    useEffect(() => {
        Aos.init({
            duration: 800,
        });
    }, []);

    console.log(message);

    return (
        <>
            {/* Right Side */}
            <div className="grid gap-4">
                <div data-aos={`fade-up`} className="flex gap-4 justify-center">
                    <img
                        className="h-16 rounded-full drop-shadow-2xl hover:drop-shadow-md"
                        src={`images/indonesiaflag.png`}
                        alt=""
                    />
                    <img
                        className="h-16 rounded-full drop-shadow-2xl hover:drop-shadow-md"
                        src={`images/arabsaudiflag.png`}
                        alt=""
                    />
                </div>

                <p data-aos={`fade-up`} className="text-center py-4">
                    Eva Petroleum, Limited is International Oil and Gas Supplier
                    Company, domiciled in Dubai and Indonesia, offered through
                    the support of a company partner
                </p>

                <div
                    data-aos={`fade-up`}
                    className="grid gap-2 p-5 bg-gray-200 drop-shadow-xl rounded-xl"
                >
                    <p className="text-center py-2 text-3xl">Contact Us</p>
                    <input
                        onChange={handleInput}
                        className="rounded-md name-input"
                        type={`text`}
                        placeholder="Full Name"
                    />
                    <input
                        onChange={handleInput}
                        className="rounded-md email-input"
                        type={`text`}
                        placeholder="Email"
                    />
                    <input
                        onChange={handleInput}
                        className="rounded-md phone-input"
                        type={`number`}
                        placeholder="Phone"
                    />
                    <select
                        id="selectedSubject"
                        onChange={handleInput}
                        className="subject-input rounded-md"
                    >
                        <option value="">Subject</option>
                        <option value="Career">Career</option>
                        <option value="Product">Product</option>
                        <option value="Ship">Ship</option>
                        <option
                            value={customSubject}
                            onClick={() =>
                                switchHidden(`customSubject`, `selectedSubject`)
                            }
                        >
                            Other
                        </option>
                    </select>
                    <div id="customSubject" className="flex gap-2 hidden">
                        <input
                            value={customSubject}
                            onChange={(e) => {
                                setCustomSubject(e.target.value);
                                handleInput;
                            }}
                            className="rounded-md subject-input w-full"
                            type={`text`}
                            placeholder="Subject"
                        />
                        <button
                            onClick={() =>
                                switchHidden(`selectedSubject`, "customSubject")
                            }
                            className="px-4 bg-gray-800 text-white font-bold rounded-md"
                        >
                            switch
                        </button>
                    </div>
                    <textarea
                        onChange={handleInput}
                        className="rounded-md message-input"
                        placeholder="Message"
                    ></textarea>
                    <button
                        onClick={submit}
                        className="p-2 bg-gray-900 hover:bg-gray-700 rounded-md text-white font-bold"
                    >
                        submit
                    </button>
                </div>
            </div>
        </>
    );
}
