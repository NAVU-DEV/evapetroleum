import Maps from "@/Components/Globals/Maps";
import ContactForm from "./ContactForm";

export default function Content() {
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-5 p-4">
                <ContactForm />
                <Maps />
            </div>
        </>
    )
}