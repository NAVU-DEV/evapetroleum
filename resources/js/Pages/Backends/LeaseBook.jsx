import Pagination from "@/Components/Globals/Pagination";
import SearchBar from "@/Components/Globals/SearchBar";
import { LeaseBookData } from "@/Utils/Datas/Dashboard";
import {
    DownloadDocument,
    acceptBookingRequest,
} from "@/Utils/Functions/Leasebook";
import { hiddenToggle, switchHidden } from "@/Utils/Functions/HiddenToggle";
import { useEffect, useState } from "react";

export default function LeaseBook() {
    const [leasebook, setLeasebook] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [findData, setFindData] = useState("");

    useEffect(() => {
        LeaseBookData(currentPage, findData)
            .then((value) => {
                setLeasebook(value);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, [currentPage, findData]);

    const handleFindData = (e) => {
        setCurrentPage(1);
        setFindData(e.target.value);
    };

    return (
        <>
            <div className="grid gap-2">
                {/* input */}
                <SearchBar value={findData} handleSearch={handleFindData} />

                {/* table */}
                <table>
                    <thead className="border-b-2 border-t-2 border-black bg-gray-800 text-white">
                        <tr>
                            <th className="border-r-2 border-white">ship</th>
                            <th className="border-r-2 border-white">email</th>
                            <th className="border-r-2 border-white">status</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center border-b-2 border-black">
                        {leasebook.data &&
                            leasebook.data.map((data, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className="border-b-2 border-black"
                                    >
                                        <td className="px-2 mt-1 border-r-2">
                                            {data.name}
                                        </td>
                                        <td className="px-2 mt-1 border-r-2">
                                            {data.email}
                                        </td>
                                        <td className="px-2 mt-1 border-r-2">
                                            {data.book_status}
                                        </td>
                                        <td className="px-2">
                                            <button
                                                onClick={() =>
                                                    hiddenToggle(
                                                        `view-inbox-${index}`
                                                    )
                                                }
                                                className="p-2 bg-gray-800 text-white rounded-md"
                                            >
                                                view
                                            </button>
                                        </td>
                                        <td
                                            id={`view-inbox-${index}`}
                                            className="absolute hidden left-0 top-0 w-screen h-screen"
                                        >
                                            <div className="flex items-center justify-center w-full h-full">
                                                <div className="grid p-2 bg-gray-800 rounded-md w-[80vw] text-start">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-xl text-white">
                                                            Book
                                                        </p>
                                                        <div
                                                            onClick={() =>
                                                                hiddenToggle(
                                                                    `view-inbox-${index}`
                                                                )
                                                            }
                                                            className="flex rounded items-center justify-center p-2 bg-gray-400 hover:bg-gray-300 cursor-pointer"
                                                        >
                                                            <i className="fa-solid fa-xmark"></i>
                                                        </div>
                                                    </div>
                                                    <div className="p-2 bg-gray-300 mt-2 rounded">
                                                        <div className="grid grid-cols-5 gap-3">
                                                            <p>From</p>
                                                            <p className="col-span-4">
                                                                : {data.company}
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-5 gap-3">
                                                            <p>Email</p>
                                                            <p className="col-span-4">
                                                                {" "}
                                                                :{" "}
                                                                <a
                                                                    href={`mailto:${data.email}`}
                                                                >
                                                                    {data.email}
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-5 gap-3">
                                                            <p>Document</p>
                                                            <p className="col-span-4">
                                                                {" "}
                                                                :{" "}
                                                                <a className="cursor-pointer"
                                                                    onClick={() =>
                                                                        DownloadDocument(
                                                                            `${data.document}`
                                                                        )
                                                                    }
                                                                >
                                                                    {
                                                                        data.document
                                                                    }
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="p-2 bg-gray-200 mt-2 rounded">
                                                        <div className="p-1 bg-gray-800 text-white rounded-md px-2 py-1 mb-2">
                                                            <p className="font-bold">
                                                                Ship:
                                                            </p>
                                                        </div>
                                                        <div className="grid grid-cols-3">
                                                            <div className="col-span-2 p-2 bg-gray-300 rounded-l-xl">
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <p>Name</p>
                                                                    <p>
                                                                        :{" "}
                                                                        {
                                                                            data.name
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <p>Built</p>
                                                                    <p>
                                                                        :{" "}
                                                                        {
                                                                            data.built
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <p>Yard</p>
                                                                    <p>
                                                                        :{" "}
                                                                        {
                                                                            data.yard
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <p>LWT</p>
                                                                    <p>
                                                                        :{" "}
                                                                        {
                                                                            data.lwt
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <p>Rate</p>
                                                                    <p>
                                                                        :{" "}
                                                                        {
                                                                            data.rate
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <p>
                                                                        Status
                                                                    </p>
                                                                    <p>
                                                                        :{" "}
                                                                        {
                                                                            data.status
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="flex justify-center w-full h-56 rounded-r-xl"
                                                                style={{
                                                                    backgroundImage: `url('images/${data.image}')`,
                                                                    backgroundSize:
                                                                        "100% 100%",
                                                                }}
                                                            ></div>
                                                            <div className="flex col-span-3 justify-end items-center mt-2">
                                                                <div
                                                                    id={`confirm-${data.id}`}
                                                                    className="flex hidden gap-2"
                                                                >
                                                                    <button
                                                                        onClick={() =>
                                                                            acceptBookingRequest(
                                                                                data.id,
                                                                                data.ship_id
                                                                            )
                                                                        }
                                                                        className="bg-blue-900 text-white font-bold p-2 rounded-md hover:bg-blue-700"
                                                                    >
                                                                        Confirm
                                                                    </button>
                                                                    <button
                                                                        onClick={() =>
                                                                            switchHidden(
                                                                                `accept-button-${data.id}`,
                                                                                `confirm-${data.id}`
                                                                            )
                                                                        }
                                                                        className="bg-red-900 text-white font-bold p-2 rounded-md hover:bg-red-700"
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                </div>
                                                                <div
                                                                    id={`accept-button-${data.id}`}
                                                                    className="flex"
                                                                >
                                                                    <button
                                                                        onClick={() =>
                                                                            switchHidden(
                                                                                `confirm-${data.id}`,
                                                                                `accept-button-${data.id}`
                                                                            )
                                                                        }
                                                                        className="bg-gray-900 text-white font-bold p-2 rounded-md hover:bg-gray-700"
                                                                    >
                                                                        Accept
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                {/* pagination */}
                {leasebook && (
                    <Pagination
                        currentPage={currentPage}
                        LastPage={leasebook.last_page}
                        From={leasebook.from}
                        To={leasebook.to}
                        setPage={setCurrentPage}
                    />
                )}
            </div>
        </>
    );
}
