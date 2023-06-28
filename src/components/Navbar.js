import logo from '../assets/images/wcfLogoDark.png'
import closeLogo from '../assets/icons/icon-close.svg'

const Navbar = () => {
    const handleClick = (e) => {
        console.log(document.querySelector('.navMenu'))
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
                <div className='h-screen  w-screen pt-24 px-6'>
                    <a href="/" className='block px-6 py-6 hover:bg-deepRed text-4xl' onClick={handleClick}>
                        Home
                        <span className='text-sm ml-2'>01</span>
                    </a>
                    <a href="/#quickLinks" className='block px-6 py-6 hover:bg-deepRed text-4xl' onClick={handleClick}>
                        Quick Links
                        <span className='text-sm ml-2'>02</span>
                    </a>
                    <a href="/" className='block px-6 py-6 hover:bg-deepRed text-4xl' onClick={handleClick}>
                        Find us
                        <span className='text-sm ml-2'>03</span>
                    </a>
                    <a href="/#more" className='block px-6 py-6 hover:bg-deepRed text-4xl' onClick={handleClick}>
                        More
                        <span className='text-sm ml-2'>04</span>
                    </a>
                    
                </div>
            </nav>
            <Navbutton handleClick={handleClick} />
       </>
    );
}
const Navbutton = ({handleClick}) => {
    
    return ( 
        
            <div className="fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full bg-white bg-opacity-80 p-4 navBtn">
                <button onClick={(e) => {handleClick(e)}}>
                    <img src={logo} alt="" className='h-12 w-12'/>
                </button>
                
            </div>

        
     );
}
 
export default Navbar;