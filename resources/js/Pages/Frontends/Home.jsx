import BottomContent from "@/Components/Frontends/Home/BottomSection";
import CardView from "@/Components/Frontends/CardView";
import Testimony from "@/Components/Frontends/Home/Testimony";
import Hero from "@/Components/Globals/Hero";
import Footer from "@/Components/Includes/Footer";
import Header from "@/Components/Includes/Header";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <CardView />
            <Testimony />
            <BottomContent />
            <Footer />
        </>
    )
}