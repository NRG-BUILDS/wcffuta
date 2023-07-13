import homePic1 from '../../assets/images/homePic1.jpg'
import wcfLogo from '../../assets/images/wcfLogoDark.png'

const MissionSect = () => {    
    return ( 
        <section className="leftCorner  bg-deepRed relative outline-red-700 pb-32 z-30 text-gray-50">
            <video controls={true} autoplay={true} muted loop={true} width={'100%'}>
                    <source src={'/pub_assets/wcfvid.mp4'} type='video/mp4'/>
                </video>
            <div className=" grid p-6 md:px-4 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            
                <div className=' h-60 w-full overflow-clip'>
                    <img src={homePic1} alt="Winners Campus Fellowship" className='parallelogramPic -skew-y-12 h-full w-full duration-100 object-cover'/>
                </div>
                <div className='revealTop py-8'>
                    <h2 className="text-2xl">Our Vision</h2>
                    <p>
                        <span className="text-7xl opacity-50 font-extrabold hover:opacity-100 duration-100">1</span>
                        To raise students whose destinies are moulded through the word of faith and prayers.
                    </p>
                    <p className='py-4'>
                        <span className="text-7xl opacity-50 font-extrabold hover:opacity-100 duration-100">2</span>
                        Leading students to Christ and preparing them to become reliable men and woman that God can entrust with His word for the next generation.
                        <br/>
                        Jeremiah 17:10
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
                    <a href="/#social" className="quickLink">
                        Our Social Handles
                        <span className="material-icons-outlined ml-2">thumb_up</span>
                    </a>
                    <a href="/#more" className="quickLink">
                        More from WCF...
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