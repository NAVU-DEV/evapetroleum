import { useState } from "react";
import Sidebar from "./SideBar";

export default function Body() {

    const [iframeData, setIframedata] = useState('')

    return (
        <>
            <div className="grid grid-cols-4">
                {/* sidebar */}
                <Sidebar setIframe={setIframedata} />

                {/* iFrame */}
                <div className="col-span-3 px-4">
                    <iframe src={iframeData} className="w-full h-screen" frameBorder="0"></iframe>
                </div>
            </div>
        </>
    )
}