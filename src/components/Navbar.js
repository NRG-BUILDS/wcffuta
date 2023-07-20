import logo from '../assets/images/wcfLogoDark.png'
import closeLogo from '../assets/icons/icon-close.svg'

const Navbar = () => {
    const handleClick = (e) => {
        (document.querySelector('.navMenu'))
        let nav = document.querySelector('.navMenu')

        if (nav.classList.contains('active')) {
            nav.classList.remove('active')
            if (e !== undefined) {
                e.target.src = logo
            }
            
        } else {
            nav.classList.add('active');
           
            if (e !== undefined) {
                e.target.src = closeLogo;
            }
            
        }
    }
    
    return (
       <>
            <nav className='navMenu fixed top-0 left-0 w-full overflow-hidden text-right z-50 font-light bg-white bg-opacity-50'>
                <div className='flex items-center justify-end h-screen  w-screen px-6'>
                    <div>
                        <a href="/" className='block px-6 py-6 -skew-y-6 hover:text-deepRed hover:underline text-4xl' onClick={handleClick}>
                        Home
                            <span className='text-sm ml-2'>01</span>
                        </a>
                        <a href="/#quickLinks" className='block px-6 py-6 -skew-y-6 hover:text-deepRed hover:underline text-4xl' onClick={handleClick}>
                            Quick Links
                            <span className='text-sm ml-2'>02</span>
                        </a>
                        <a href="/" className='block px-6 py-6 -skew-y-6 hover:text-deepRed hover:underline text-4xl' onClick={handleClick}>
                            Find us
                            <span className='text-sm ml-2'>03</span>
                        </a>
                        <a href="/#more" className='block px-6 py-6 -skew-y-6 hover:text-deepRed hover:underline text-4xl' onClick={handleClick}>
                            More
                            <span className='text-sm ml-2'>04</span>
                        </a>
                    </div>
                    
                    
                </div>
            </nav>
            <Navbutton handleClick={handleClick} />
            <TopNav handleClick={handleClick} />
       </>
    );
}
const TopNav = ({handleClick}) => {
   
    return (
        <section className='topNav fixed top-0 left-0 w-full z-50 shadow-lg bg-opacity-80 backdrop-blur transition duration-300'>
            <div className="topNav py-4 px-6 flex justify-between items-center">
                <div className=" h-14 w-14">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <button onClick={handleClick}>
                        <span className="material-icons-outlined text-4xl">menu</span>

                    </button>
                </div>
            </div>
        </section>
        
    )
}
const Navbutton = ({handleClick}) => {
    const handleButton = () => {

        setTimeout(() => {
            let btnText = document.querySelector('.navBtnText')
            btnText.classList.remove('w-20')
            btnText.classList.add('w-0')
            
            setTimeout(() => {
                btnText.style.display = 'none'
            }, 500)
            
        }, 2500)
    }
    
    return ( 
        
            <div className="flashyBorder fixed bottom-4 right-4 z-50 flex items-center justify-center gap-4 rounded-full border-2 bg-white border-red-600 bg-opacity-60 p-4 navBtn">
                <button onLoad={() => {
                    handleButton();}} onClick={(e) => {handleClick(e)}}>
                    <img src={logo} alt="" className='h-12 w-12'/>
                </button>
                <div className="navBtnText w-20 overflow-hidden  text-center">
                    <h4 className="uppercase tracking-wider opacity-75 font-extrabold mt-2">menu</h4>
                </div>
            </div>

        
     );
}
 
export default Navbar;