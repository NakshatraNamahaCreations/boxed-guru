import Footer from "../Components/Footer";
import ContactBan from "./ContactBan";
import ContactInfo from "./ContactInfo";
import FaqSection from "./FaqSection";
import MapSection from "./MapSection";




export default function Contact(){
    return(
        <>
        <ContactBan/>
        <ContactInfo/>
        <FaqSection/>
        {/* <MapSection/> */}
        <Footer/>
        </>
    )
}