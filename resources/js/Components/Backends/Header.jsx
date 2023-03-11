import Control from "./Dashboard/Control";

export default function Header() {
    return (
        <>
            <div
                className="shadow-xl"
                style={{
                    backgroundImage: `url('images/quality.jpg')`,
                    backgroundSize: "cover",
                }}
            >
                {/* Title */}
                <div className="flex font-bold w-full px-12 py-5 backdrop-blur-2xl h-full items-center justify-between ">
                    <p>Petroleum Dashboard</p>
                    <Control />
                </div>
            </div>
        </>
    );
}
