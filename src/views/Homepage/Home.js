import DropCard from "../../components/DropCard";
import AnnouncSect from "./AnnouncSect";
import FamilySngSect from "./FamilySngSect";
import Hero from "./Hero";
import MissionSect from "./MissionSect";
import SocialSect from "./SocialSect";
import UpcoProSect from "./UpcoProSect";
import OfferingSect from './OfferingSect'
import MagLinkSect from "./MagLinkSect";
import ExcoSect from "./ExcoSect";

const Home = () => {
    return ( 
        <>
            <Hero />
            <MissionSect />
            <UpcoProSect />
            <ExcoSect />
            <SocialSect />
            <div className=" py-24" id="more">
                <div className="px-4">
                    <h2 className=" text-4xl leading-3">More From</h2>
                    <h2 className="uppercase text-brightRed text-4xl">wcf futa</h2>
                </div>
                
           
            <div className="grid gap-y-4 md:grid-cols-2 items-center max-w-4xl mx-auto relative">
                <DropCard topic={'Our Family Song'} img={'familysong.jpg'} content={<FamilySngSect />} id={'familySong'}/>
                <DropCard topic={'Give Offerings'} img={'offering.jpg'} content={<OfferingSect />} id={'offering'}/>
                <DropCard topic={'Our E-magazines'} img={'magazine.jpg'} content={<MagLinkSect />}/>
                <DropCard topic={'Special Announcements'} img={'magazine.jpg'} content={<AnnouncSect />} />
            </div>
            </div>

            {/* <HighlightSection /> */}
        </>
     );
}
 
export default Home;