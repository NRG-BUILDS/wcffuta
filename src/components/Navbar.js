import logo from '../assets/images/wcfLogoDark.png'
import menuBtn from '../assets/icons/icon-hamburger.svg'

const Navbar = ({currentPage}) => {
    return ( 
        <nav className='fixed top-0 left-0 w-full z-50'>
            <div className="flex justify-between items-center p-2">
                <div className="flex items-center justify-center rounded-3xl bg-white bg-opacity-20 p-2 h-10 w-10">
                    <img src={logo} alt="" className=''/>
                </div>
                <div className="flex items-center justify-center rounded-3xl bg-white bg-opacity-20 p-3">
                    <h3>{currentPage}</h3>
                </div>
                <div className="flex items-center justify-center rounded-3xl bg-white bg-opacity-20 p-2 h-10 w-10">
                    <img src={menuBtn} alt="" />
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;