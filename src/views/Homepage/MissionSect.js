import homePic1 from '../../assets/images/homePic1.jpg'
import wcfLogo from '../../assets/images/wcfLogoDark.png'

const MissionSect = () => {    
    return ( 
        <section className="leftCorner -mt-40 bg-deepRed relative outline-red-700 py-44 z-30 text-white">
            <div className=" grid p-6 md:px-0 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
                <div className=' skew-y-12 md:skew-y-6 h-60 w-full relative'>
                    <img src={homePic1} alt="Winners Campus Fellowship" className='absolute top-0 left-0 h-full w-full'/>
                </div>
                <div className='revealTop py-8'>
                    <h2 className="text-2xl">Our Vision</h2>
                    <p>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                </div>
                
                <div className="pt-10" id='quickLinks'>
                    <h2 className="text-xl uppercase text-center">Looking For Something?</h2>
                    <a href="/" className="inline-block mt-5 mr-5 rounded-3xl py-3 px-4 font-semibold border-2 hover:bg-white hover:text-deepRed duration-75">How to find us</a>
                    <a href="#upcoming" className="inline-block mt-5 mr-5 rounded-3xl py-3 px-4 font-semibold border-2 hover:bg-white hover:text-deepRed duration-75">Upcoming Service, Programs & Events</a>
                    <a href="/#familySong" className="inline-block mt-5 mr-5 rounded-3xl py-3 px-4 font-semibold border-2 hover:bg-white hover:text-deepRed duration-75">Our Family Song</a>
                    <a href="/#announcements" className="inline-block mt-5 mr-5 rounded-3xl py-3 px-4 font-semibold border-2 hover:bg-white hover:text-deepRed duration-75">Special Annoucements</a>
                    <a href="/#offering" className="inline-block mt-5 mr-5 rounded-3xl py-3 px-4 font-semibold border-2 hover:bg-white hover:text-deepRed duration-75">Give Offerings</a>
                    <a href="/#more" className="inline-block mt-5 mr-5 rounded-3xl py-3 px-4 font-semibold border-2 hover:bg-white hover:text-deepRed duration-75">More about WCF...</a>
                </div>
                <div className='p-8 opacity-50'>
                    <img src={wcfLogo} alt="" />
                </div>
                

            </div>
        </section>
     );
}
 
export default MissionSect;