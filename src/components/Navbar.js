import logo from '../assets/images/wcfLogoDark.png'
import closeLogo from '../assets/icons/icon-close.svg'
import { useEffect } from 'react'

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
            <nav className='navMenu fixed top-0 left-0 w-full overflow-hidden text-right z-50 font-light'>
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
       </>
    );
}
const Navbutton = ({handleClick}) => {
    return ( 
        
            <div className="flashyBorder fixed bottom-4 right-4 z-50 flex items-center justify-center gap-4 rounded-full border-2 border-red-600 bg-white bg-opacity-80 p-4 navBtn">
                <button onClick={(e) => {handleClick(e)}}>
                    <img src={logo} alt="" className='h-12 w-12'/>
                </button>
                
            </div>

        
     );
}
 
export default Navbar;