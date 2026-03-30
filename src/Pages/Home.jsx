import Footer from "../Components/Footer";
// import ClientTalks from "./ClientTalks";
// import HomeBanner from "./HomeBanner";
import OurProducts from "./OurProducts";
// import ProblemSolution from "./ProblemSolution";
// import WhyChooseUs from "./WhyChooseUs";

import FeaturesSection from "../HomePage/FeatureSection";
import HomeSlider from "../HomePage/Home";
import ShopByCategory from "../HomePage/ShopByCategory";
import CompareSection from "../HomePage/CompareSection";
import WhyChoose from "../HomePage/WhyChoose";
import WhoWeAre from "../HomePage/WhoWeAre";
import MovingText from "../Components/MovingText"
import ClientReview from "../HomePage/ClientReview";
import PromoSection from "../HomePage/PromoSection";
import Products from "../HomePage/Products";
import SpotlightBanner from "../HomePage/SpotlightBanner";




export default function Home(){
    return(
        <>
        {/* <HomeBanner/>
        <OurProducts/>
        <WhyChooseUs/>
        <ClientTalks/>
        <ProblemSolution/>
        <Footer/> */}
        <HomeSlider/>
        <MovingText/>
        <FeaturesSection/>
        <ShopByCategory/>
        {/* <OurProducts/> */}
        <Products/>
        <SpotlightBanner/>
        <WhoWeAre/>
        
        <WhyChoose/>
        <PromoSection/>
        <CompareSection/>
        <ClientReview/>
         <Footer/>
        </>
    )
}