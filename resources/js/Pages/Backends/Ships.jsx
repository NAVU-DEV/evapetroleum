import SearchBar from "@/Components/Globals/SearchBar";
import { useEffect, useState } from "react";
import { ShipsData } from "@/Utils/Datas/Ships";
import { ShippingShipData } from "@/Utils/Datas/Dashboard";
import { hiddenToggle } from "@/Utils/Functions/HiddenToggle";
import Pagination from "@/Components/Globals/Pagination";
import { DownloadDocument } from "@/Utils/Functions/Leasebook";
import { ApiURL } from "@/Utils/Datas/Globals/axios";

export default function Ships() {
    const [findData, setFindData] = useState("");
    const [findDataShippingShip, setFindDataShippingShip] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentShipingPage, setCurrentShippingPage] = useState(1);
    const [ships, setShips] = useState([]);
    const [shippingShips, setShippingShips] = useState([]);
    const [dataToAdd, setDataToAdd] = useState({
        image: null,
        name: "",
        built: "",
        yard: "",
        lwt: "",
        rate: "",
    });

    const handleFindData = (e) => {
        setCurrentPage(1);
        setFindData(e.target.value);
    };

    const handleFindShippingShip = (e) => {
        setCurrentPage(1);
        setFindDataShippingShip(e.target.value);
    };

    const handleSetDataToAdd = () => {
        setDataToAdd((prevState) => ({
            ...prevState,
            image: document.querySelector(".ship-image").files[0],
            name: document.querySelector(".ship-name").value,
            built: document.querySelector(".ship-built").value,
            yard: document.querySelector(".ship-yard").value,
            lwt: document.querySelector(".ship-lwt").value,
            rate: document.querySelector(".ship-rate").value,
        }));
    };

    const submitDataToAdd = async () => {
        await axios
            .post(ApiURL + "ships", dataToAdd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const deleteShip = async (data) => {
        await axios
            .post(ApiURL + `ships/${data}`)
            .then((response) => {
                location.href = './ships';
            })
            .catch((error) => {
                console.log(error.response);
            });
    }

    useEffect(() => {
        ShipsData(currentPage, findData).then((value) => {
            setShips(value);
        });
        ShippingShipData().then((value) => {
            setShippingShips(value);
        });
    }, [findData, currentPage]);

    console.log(dataToAdd);

    return (
        <>
            <div className="grid gap-2">
                <div className="flex justify-between p-2 bg-gray-800">
                    <button
                        onClick={() => hiddenToggle("add-ship-form")}
                        className="absolute p-2 text-white bg-white bg-opacity-50 hover:bg-opacity-60 my-2"
                    >
                        add ship -
                    </button>

                    {/* add new ship form */}
                    <div
                        id="add-ship-form"
                        className="fixed left-0 top-0 w-screen h-screen hidden bg-black/80"
                    >
                        <div className="flex justify-center items-center w-full h-full">
                            <div className="bg-gray-700 rounded-md text-white py-5 px-4">
                                <p className="text-center text-xl font-bold pb-4">
                                    Add Ship Form
                                </p>

                                <div className="grid gap-2 text-black">
                                    <input
                                        type="file"
                                        id="ship-image"
                                        className="hidden ship-image"
                                        onChange={(_e) => handleSetDataToAdd()}
                                    />
                                    <label
                                        htmlFor="ship-image"
                                        className="p-2 text-center bg-gray-400 hover:bg-gray-500 cursor-pointer"
                                    >
                                        ship image
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ship Name"
                                        className="ship-name"
                                        value={dataToAdd.name}
                                        onChange={(e) => handleSetDataToAdd()}
                                    />
                                    <input
                                        type="date"
                                        placeholder="Built"
                                        className="ship-built"
                                        value={dataToAdd.built}
                                        onChange={(e) => handleSetDataToAdd()}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Yard"
                                        className="ship-yard"
                                        value={dataToAdd.yard}
                                        onChange={(e) => handleSetDataToAdd()}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Lwt"
                                        className="ship-lwt"
                                        value={dataToAdd.lwt}
                                        onChange={(e) => handleSetDataToAdd()}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Rate"
                                        className="ship-rate"
                                        value={dataToAdd.rate}
                                        onChange={(e) => handleSetDataToAdd()}
                                    />
                                    <div className="flex gap-2 w-full">
                                        <button
                                            className="w-full p-2 bg-gray-400 hover:bg-gray-500"
                                            onClick={() => submitDataToAdd()}
                                        >
                                            Add
                                        </button>
                                        <button
                                            className="w-full p-2 bg-gray-400 hover:bg-gray-500"
                                            onClick={() =>
                                                hiddenToggle("add-ship-form")
                                            }
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SearchBar
                        value={findData}
                        handleSearch={handleFindData}
                        Placeholder={`Find Ship`}
                    />
                </div>
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
                                                <button
                                                    className="p-2 bg-gray-800 text-white rounded-md"
                                                    onClick={() =>
                                                        hiddenToggle(
                                                            `view-ship-${index}`
                                                        )
                                                    }
                                                >
                                                    view
                                                </button>
                                            </td>
                                            <td
                                                id={`view-ship-${index}`}
                                                className="absolute hidden left-0 top-0 w-screen h-screen"
                                            >
                                                <div className="flex justify-center pt-24 w-full h-full">
                                                    <div className="grid p-2 bg-gray-800 rounded-md w-[80vw] h-fit text-start">
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-xl text-white">
                                                                Ship Detail
                                                            </p>
                                                            <div className="flex gap-2">
                                                                <div
                                                                    onClick={() =>
                                                                        hiddenToggle(
                                                                            `delete-ship-${index}`
                                                                        )
                                                                    }
                                                                    className="flex rounded items-center justify-center p-2 bg-red-400 hover:bg-red-300 cursor-pointer"
                                                                    >
                                                                    <i className="fa-solid fa-trash"></i>
                                                                </div>
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
                                                        </div>
                                                        <div className="flex gap-2 p-2 bg-gray-300 mt-2 rounded">

                                                            <img src={`images/${data.image}`} alt={`${data.image}`} className="h-56"/>
                                                            <div>
                                                                <div className="grid grid-cols-5 gap-3">
                                                                    <p>From</p>
                                                                    <p className="col-span-4">
                                                                        :{" "}
                                                                        {data.name}
                                                                    </p>
                                                                </div>
                                                                <div className="grid grid-cols-5 gap-3">
                                                                    <p>Built</p>
                                                                    <p className="col-span-4">
                                                                        :{" "}
                                                                        {data.built}
                                                                    </p>
                                                                </div>
                                                                <div className="grid grid-cols-5 gap-3">
                                                                    <p>Yard</p>
                                                                    <p className="col-span-4">
                                                                        :{" "}
                                                                        {data.yard}
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
                                                                        :{" "}
                                                                        {
                                                                            data.status
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                id={`delete-ship-${index}`}
                                                className="absolute hidden left-0 top-0 w-screen h-screen"
                                            >
                                                <div className="flex items-center justify-center w-full h-full">
                                                    <div className="grid p-2 bg-gray-800 rounded-md w-fit text-start">
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-xl text-white">
                                                                Delete Ship?
                                                            </p>
                                                        </div>
                                                        <div className="p-2 bg-gray-300 hover:bg-gray-400 w-fit mt-2 w-full text-center rounded">
                                                            <button 
                                                                onClick={() =>
                                                                    hiddenToggle(
                                                                        `delete-ship-${index}`
                                                                    )
                                                                }
                                                            >
                                                                cancel
                                                            </button>
                                                        </div>
                                                        <div className="p-2 bg-gray-300 hover:bg-gray-400 w-fit mt-2 w-full text-center rounded">
                                                                <button 
                                                                    onClick={() => deleteShip(data.id)}
                                                                >
                                                                    confirm
                                                                </button>
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
                                            .includes(
                                                findDataShippingShip.toLowerCase()
                                            ) && data.book_status == "Accepted"
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
                                                <button
                                                    className="p-2 bg-gray-800 text-white rounded-md"
                                                    onClick={() =>
                                                        hiddenToggle(
                                                            `view-shippingShip-${index}`
                                                        )
                                                    }
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
                                                                    :{" "}
                                                                    {
                                                                        data.company
                                                                    }
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
                                                                        {
                                                                            data.email
                                                                        }
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div className="grid grid-cols-5 gap-3">
                                                                <p>Status</p>
                                                                <p className="col-span-4">
                                                                    :{" "}
                                                                    {
                                                                        data.status
                                                                    }
                                                                </p>
                                                            </div>
                                                            <div className="grid grid-cols-5 gap-3">
                                                                <p>
                                                                    Booked date
                                                                </p>
                                                                <p className="col-span-4">
                                                                    :{" "}
                                                                    {
                                                                        data.created_at
                                                                    }
                                                                </p>
                                                            </div>
                                                            <div className="grid grid-cols-5 gap-3">
                                                                <p>Document</p>
                                                                <p
                                                                    className="col-span-4 cursor-pointer"
                                                                    onClick={() =>
                                                                        DownloadDocument(
                                                                            `${data.document}`
                                                                        )
                                                                    }
                                                                >
                                                                    :{" "}
                                                                    {
                                                                        data.document
                                                                    }
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
