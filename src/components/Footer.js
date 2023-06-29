import {useState} from 'react'
import logo from '../assets/images/wcfLogoLight.png'
import bg from '../assets/images/heroBg.jpg'

const Footer = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const showFullSect = (e) => {
        if (isFormOpen) {
            setIsFormOpen(false)
        } else {
            setIsFormOpen(true)
        } 
    }
    const date = new Date();
    const year = date.getFullYear()
    return ( 
        <footer className='bg-black text-white mt-10 px-4 py-10 pt-40 relative  overflow-hidden'>
            <div className="relative z-10">
                <div className='text-center mx-auto'>
                    <img src={logo} alt="" className='mx-auto w-40'/>
                    <h3 className=' text-xl'>Winners Campus Fellowship, FUTA</h3>
                </div>
                {!isFormOpen && (
                     <div  className="text-center w-full py-8"
                     onClick={(e) => {showFullSect(e)}}
                     >
                        <button 
                            className="bg-brightRed text-white shadow-xl rounded-3xl px-6 py-2"
                            >
                        Fill the Form, Join the Family
                        </button>
                    </div>
                )}
                {isFormOpen && (<div className='max-w-xl mx-auto rounded-md border-2 py-6 px-3 my-10 bg-white text-gray-800'>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfhxNQHM7tIIAJ1kB6o_23lxqQfk_Cl9qT4oV2DcU6y1sk8zA/viewform?embedded=true" width="100%" height="1883" frameborder="0" marginheight="0" marginwidth="0" title='SignUpForm'>Loading…</iframe>
                </div>)}
                <div className="text-center my-8">
                    <p>Contact and Enquires: 
                        <a href="tel:+2348147882426" className='underline'> +234 814 788 2426</a>
                    </p>
                    <p>© Winners Campus Fellowship, FUTA</p>
                    <p>{year}</p>
                </div>
            </div>
            
            <img src={bg} alt="" className='absolute top-0 left-0 w-full h-full opacity-30 object-cover z-0'/>
        </footer>
     );
}
 
export default Footer;