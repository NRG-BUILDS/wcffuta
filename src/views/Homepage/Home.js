import Navbar from "../../components/Navbar";
import AnnouncSect from "./AnnouncSect";
import Hero from "./Hero";
import MissionSect from "./MissionSect";
import SocialSect from "./SocialSect";
import UpcoProSect from "./UpcoProSect";

const Home = () => {
    return ( 
        <>
            <Navbar currentPage={'Winners Campus Fellowship'} />
            <Hero />
            <MissionSect />
            <UpcoProSect />
            <AnnouncSect />
            <SocialSect />
            
            
            {/* <HighlightSection /> */}
        </>
     );
}
 
export default Home;