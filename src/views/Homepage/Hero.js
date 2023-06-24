import heroBg from '../../assets/images/heroBg.jpg'
import logo from '../../assets/images/wcfLogoLight.png'
const Hero = () => {
    return ( 
        <header className="hero bg-deepRed text-white flex items-center absolute top-0 pb-10 h-screen w-full z-40">
            <div className="revealTop items-center max-w-xl mx-auto px-8 relative z-40">
                <div>
                    <img src={logo} alt="" className=' w-28 h-28 md:h-60 md:w-60 md:mx-auto'/>
                </div>
                <div className='md:text-center'>
                    <h1 className="font-light text-4xl">Winners Campus Fellowship, <span className='block'>FUTA</span> </h1>
                    <p className=" italic">...my destiny moulding place</p>
                </div>
                
            </div>
            <div>
                <img src={heroBg} alt="" className='absolute top-0 left-0 w-full h-full brightness-50 z-0 object-cover opacity-90'/>
            </div>
        </header>
     );
}
 
export default Hero;
