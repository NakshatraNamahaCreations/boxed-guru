import AboutIntro from "./AboutIntro";
import AbtBanner from "./AbtBanner";
import Footer from "../Components/Footer"
import VisionSection from "./VisionSection";
import HowWeWork from "./HowWeWork";
import ContactPromo from "./ContactPromo";
import CertificateSection from "./CertificateSection";



export default function About(){
    return(
        <>
        <AbtBanner/>
        <AboutIntro/>
        <VisionSection/>
        <HowWeWork/>
        <ContactPromo/>
        {/* <CertificateSection/> */}
        <Footer/>
        </>
    )
}