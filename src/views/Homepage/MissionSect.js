import homePic1 from '../../assets/images/homePic1.jpg'
import wcfLogo from '../../assets/images/wcfLogoDark.png'

const MissionSect = () => {    
    return ( 
        <section className="leftCorner -mt-40 bg-deepRed relative outline-red-700 py-44 z-30 text-gray-50">
            <div className=" grid p-6 md:px-0 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
                <div className='skew-y-12 md:skew-y-6 h-60 w-full overflow-clip'>
                    <img src={homePic1} alt="Winners Campus Fellowship" className='parallelogramPic -skew-y-12 h-full w-full duration-100 object-cover'/>
                </div>
                <div className='revealTop py-8'>
                    <h2 className="text-2xl">Our Vision</h2>
                    <p>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                </div>
                
                <div className="pt-10 !px-0" id='quickLinks'>
                    <h2 className="text-xl uppercase text-center">Looking For Something?</h2>
                    <a href="/#map" className="quickLink">
                        How to find us
                        <span className="material-icons-outlined ml-2">location_on</span>
                    </a>
                    <a href="#upcoming" className="quickLink">
                        Upcoming Services & Events
                        <span className="material-icons-outlined ml-2">event</span>
                    </a>
                    <a href="/#familySong" className="quickLink">
                        Our Family Song
                        <span className="material-icons-outlined ml-2">diversity_1</span>
                    </a>
                    <a href="/#announcements" className="quickLink">
                        Special Annoucements
                        <span className="material-icons-outlined ml-2">campaign</span>
                    </a>
                    <a href="/#offering" className="quickLink">
                        Give Offerings
                        <span className="material-icons-outlined ml-2">payments</span>
                    </a>
                    <a href="/#more" className="quickLink">
                        More about WCF...
                        <span className="material-icons-outlined ml-2">help</span>
                    </a>
                </div>
                <div className='p-8 opacity-50'>
                    <img src={wcfLogo} alt="" />
                </div>
                

            </div>
        </section>
     );
}
 
export default MissionSect;