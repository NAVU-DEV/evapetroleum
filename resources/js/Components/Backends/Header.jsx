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
                <div className="flex font-bold w-full px-3 py-3 backdrop-blur-2xl h-full items-center justify-between ">
                    <div className="inline-flex items-center gap-4">
                        <img src="/images/logo.png" alt="" />
                        <p>Petroleum Dashboard</p>
                    </div>
                    <Control />
                </div>
            </div>
        </>
    );
}
