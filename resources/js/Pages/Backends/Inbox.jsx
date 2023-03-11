import Pagination from "@/Components/Globals/Pagination";
import SearchBar from "@/Components/Globals/SearchBar";
import { InboxData } from "@/Utils/Datas/Dashboard";
import { hiddenToggle } from "@/Utils/Functions/HiddenToggle";
import { useEffect, useState } from "react";

export default function Inbox() {
    const [inbox, setInbox] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [findData, setFindData] = useState("");

    useEffect(() => {
        InboxData(currentPage, findData).then((value) => {
            setInbox(value);
        });
    }, [currentPage, findData]);

    const handleFindData = (e) => {
        setCurrentPage(1);
        setFindData(e.target.value);
    };

    return (
        <>
            <div className="grid gap-2">
                {/* Search */}
                <SearchBar value={findData} handleSearch={handleFindData} />

                {/* Table of Inbox */}
                <table>
                    <thead className="border-b-2 border-t-2 border-black bg-gray-800 text-white">
                        <tr>
                            <th className="border-r-2 border-white">name</th>
                            <th className="border-r-2 border-white">email</th>
                            <th className="border-r-2 border-white">telp</th>
                            <th className="border-r-2 border-white">subject</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center border-b-2 border-black">
                        {inbox &&
                            inbox.data.map((data, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className="border-b-2 border-black"
                                    >
                                        <td className="px-2 mt-1 border-r-2 text-start">
                                            {data.name}
                                        </td>
                                        <td className="px-1 mt-1 border-r-2 text-start">
                                            {data.email}
                                        </td>
                                        <td className="px-1 mt-1 border-r-2">
                                            {data.phone}
                                        </td>
                                        <td className="px-2 mt-1 border-r-2">
                                            <div className="w-24">
                                                <p className="truncate">
                                                    {data.subject}
                                                </p>
                                            </div>
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
                                                            Message
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
                                                                : {data.name}
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
                                                    </div>
                                                    <div className="p-2 bg-gray-200 mt-2 rounded">
                                                        <p className="font-bold">
                                                            Message:
                                                        </p>
                                                        <p className="text-justify">
                                                            {data.message}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                {inbox && (
                    <Pagination
                        currentPage={currentPage}
                        LastPage={inbox.last_page}
                        From={inbox.from}
                        To={inbox.to}
                        setPage={setCurrentPage}
                    />
                )}
            </div>
        </>
    );
}
