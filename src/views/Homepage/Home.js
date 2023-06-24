import DropCard from "../../components/DropCard";
import Navbar from "../../components/Navbar";
import AnnouncSect from "./AnnouncSect";
import FamilySngSect from "./FamilySngSect";
import Hero from "./Hero";
import MissionSect from "./MissionSect";
import SocialSect from "./SocialSect";
import UpcoProSect from "./UpcoProSect";
import OfferingSect from './OfferingSect'
import Footer from "../../components/Footer";
import MagLinkSect from "./MagLinkSect";

const Home = () => {
    return ( 
        <>
            <Navbar currentPage={'Winners Campus Fellowship'} />
            <Hero />
            <MissionSect />
            <UpcoProSect />
            <AnnouncSect />
            <SocialSect />
            <div className="px-8 py-8">
                <div className="">
                    <h2 className=" text-4xl leading-3">More From</h2>
                    <h2 className="uppercase text-brightRed text-4xl">wcffuta</h2>
                </div>
                
            </div>
            <DropCard topic={'Our Family Song'} img={'familysong.jpg'} content={<FamilySngSect />} id={'familySong'}/>
            <DropCard topic={'Give Offerings'} img={'offering.jpg'} content={<OfferingSect />} id={'offering'}/>
            <DropCard topic={'Our E-magazines'} img={'magazine.jpg'} content={<MagLinkSect />} />

            <Footer />
            {/* <HighlightSection /> */}
        </>
     );
}
 
export default Home;