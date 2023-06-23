import heroBg from '../../assets/images/heroBg.jpg'
import logo from '../../assets/images/wcfLogoLight.png'
const Hero = () => {
    return ( 
        <header className="hero bg-deepRed text-white flex items-center absolute top-0 pb-10 h-screen w-full">
            <div className=" max-w-md mx-auto px-8 relative z-20">
                <img src={logo} alt="" className=' w-28 h-28'/>
                <h1 className="font-light text-4xl">Winners Campus Fellowship, FUTA</h1>
                <p className=" italic">...my destiny moulding place</p>
            </div>
            <div>
                <img src={heroBg} alt="" className='absolute top-0 left-0 w-full h-full brightness-50 z-0 object-cover opacity-90'/>
            </div>
        </header>
     );
}
 
export default Hero;
