import SearchBar from "@/Components/Globals/SearchBar";
import { useEffect, useState } from "react";
import { ShipsData } from "@/Utils/Datas/Ships";
import { LeaseBookData, ShippingShipData } from "@/Utils/Datas/Dashboard";
import { hiddenToggle } from "@/Utils/Functions/HiddenToggle";
import Pagination from "@/Components/Globals/Pagination";
import { DownloadDocument } from "@/Utils/Functions/Leasebook";

export default function Ships() {
    const [findData, setFindData] = useState("");
    const [findDataShippingShip, setFindDataShippingShip] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentShipingPage, setCurrentShippingPage] = useState(1);
    const [ships, setShips] = useState([]);
    const [shippingShips, setShippingShips] = useState([]);

    const handleFindData = (e) => {
        setCurrentPage(1);
        setFindData(e.target.value);
    };

    const handleFindShippingShip = (e) => {
        setCurrentPage(1);
        setFindDataShippingShip(e.target.value);
    };

    useEffect(() => {
        ShipsData(currentPage, findData).then((value) => {
            setShips(value);
        });
        ShippingShipData().then((value) => {
            setShippingShips(value);
        });
    }, [findData, currentPage]);

    console.log(ships.data)

    return (
        <>
            <div className="grid gap-2">
                <SearchBar
                    value={findData}
                    handleSearch={handleFindData}
                    Placeholder={`Find Ship`}
                />
                <table className="w-screen text-center">
                    <thead className="border-b-2 border-black bg-gray-800 text-white">
                        <tr>
                            <th className="border-r-2 border-white">Name</th>
                            <th className="border-r-2 border-white">Book</th>
                            <th className="border-r-2 border-white">Status</th>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {ships.data &&
                            ships.data
                                .filter((data) =>
                                    data.name
                                        .toLowerCase()
                                        .includes(findData.toLowerCase())
                                )
                                .map((data, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            className="border-b-2 border-black"
                                        >
                                            <td className="border-r-2">
                                                {data.name}
                                            </td>
                                            <td className="border-r-2"></td>
                                            <td className="border-r-2">
                                                {data.status}
                                            </td>
                                            <td className="px-2">
                                                <button className="p-2 bg-gray-800 text-white rounded-md"
                                                    onClick={() => hiddenToggle(`view-ship-${index}`)}
                                                >
                                                    view
                                                </button>
                                            </td>
                                            <td
                                                id={`view-ship-${index}`}
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
                                                                        `view-ship-${index}`
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
                                                                <p>Built</p>
                                                                <p className="col-span-4">
                                                                    : {data.built}
                                                                </p>
                                                            </div>
                                                            <div className="grid grid-cols-5 gap-3">
                                                                <p>Yard</p>
                                                                <p className="col-span-4">
                                                                    : {data.yard}
                                                                </p>
                                                            </div>
                                                            <div className="grid grid-cols-5 gap-3">
                                                                <p>LWT</p>
                                                                <p className="col-span-4">
                                                                    : {data.lwt}
                                                                </p>
                                                            </div>
                                                            <div className="grid grid-cols-5 gap-3">
                                                                <p>Status</p>
                                                                <p className="col-span-4">
                                                                    : {data.status}
                                                                </p>
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
                {ships && (
                    <Pagination
                        currentPage={currentPage}
                        LastPage={ships.last_page}
                        From={ships.from}
                        To={ships.to}
                        setPage={setCurrentPage}
                    />
                )}

                <SearchBar
                    handleSearch={handleFindShippingShip}
                    value={findDataShippingShip}
                    Placeholder={`Find Shipping Ship`}
                />
                <table className="w-screen text-center">
                    <thead className="border-b-2 border-black bg-gray-800 text-white">
                        <tr>
                            <th className="border-r-2 border-white">Name</th>
                            <th className="border-r-2 border-white">Book</th>
                            <th className="border-r-2 border-white">Company</th>
                            <th className="border-r-2 border-white">Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shippingShips.data &&
                            shippingShips.data
                                .filter(
                                    (data) =>
                                        data.name
                                            .toLowerCase()
                                            .includes(findDataShippingShip.toLowerCase()) &&
                                        data.book_status == "Accepted"
                                )
                                .map((data, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            className="border-b-2 border-black"
                                        >
                                            <td className="border-r-2">
                                                {data.name}
                                            </td>
                                            <td className="border-r-2">book</td>
                                            <td className="border-r-2">
                                                {data.company}
                                            </td>
                                            <td className="border-r-2">
                                                {data.status}
                                            </td>
                                            <td className="px-2">
                                                <button className="p-2 bg-gray-800 text-white rounded-md"
                                                    onClick={() => hiddenToggle(`view-shippingShip-${index}`)}
                                                >
                                                    view
                                                </button>
                                            </td>
                                            <td
                                                id={`view-shippingShip-${index}`}
                                                className="absolute hidden left-0 top-0 w-screen h-screen"
                                            >
                                                <div className="flex items-center justify-center w-full h-full">
                                                    <div className="grid p-2 bg-gray-800 rounded-md w-[80vw] text-start">
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-xl text-white">
                                                                Shipping Ship
                                                            </p>
                                                            <div
                                                                onClick={() =>
                                                                    hiddenToggle(
                                                                        `view-shippingShip-${index}`
                                                                    )
                                                                }
                                                                className="flex rounded items-center justify-center p-2 bg-gray-400 hover:bg-gray-300 cursor-pointer"
                                                            >
                                                                <i className="fa-solid fa-xmark"></i>
                                                            </div>
                                                        </div>
                                                        <div className="p-2 bg-gray-300 mt-2 rounded">
                                                            <div className="grid grid-cols-5 gap-3">
                                                                <p>Company</p>
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
                                                                <p>Status</p>
                                                                <p className="col-span-4">
                                                                    : {data.status}
                                                                </p>
                                                            </div>
                                                            <div className="grid grid-cols-5 gap-3">
                                                                <p>Booked date</p>
                                                                <p className="col-span-4">
                                                                    : {data.created_at}
                                                                </p>
                                                            </div>
                                                            <div className="grid grid-cols-5 gap-3">
                                                                <p>Document</p>
                                                                <p className="col-span-4 cursor-pointer"
                                                                    onClick={() => DownloadDocument(
                                                                        `${data.document}`
                                                                    )}
                                                                >
                                                                    : {data.document}
                                                                </p>
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
                {shippingShips && (
                    <Pagination
                        currentPage={currentShipingPage}
                        LastPage={shippingShips.last_page}
                        From={shippingShips.from}
                        To={shippingShips.to}
                        setPage={setCurrentShippingPage}
                    />
                )}
            </div>
        </>
    );
}
