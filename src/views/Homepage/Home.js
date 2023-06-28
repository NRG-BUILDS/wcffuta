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
import MapSect from "./MapSect";

const Home = () => {
    return ( 
        <>
            <Navbar currentPage={'Winners Campus Fellowship'} />
            <Hero />
            <MissionSect />
            <UpcoProSect />
            <MapSect />
            <SocialSect />
            <div className="py-8" id="more">
                <div className="px-4">
                    <h2 className=" text-4xl leading-3">More From</h2>
                    <h2 className="uppercase text-brightRed text-4xl">wcf futa</h2>
                </div>
                
           
            <div className="grid gap-y-4 md:grid-cols-2 items-center max-w-4xl mx-auto">
                <DropCard topic={'Our Family Song'} img={'familysong.jpg'} content={<FamilySngSect />} id={'familySong'}/>
                <DropCard topic={'Give Offerings'} img={'offering.jpg'} content={<OfferingSect />} id={'offering'}/>
                <DropCard topic={'Our E-magazines'} img={'magazine.jpg'} content={<MagLinkSect />} />
                <DropCard topic={'Special Announcements'} img={'magazine.jpg'} content={<AnnouncSect />} />
            </div>
            </div>

            <Footer />
            {/* <HighlightSection /> */}
        </>
     );
}
 
export default Home;