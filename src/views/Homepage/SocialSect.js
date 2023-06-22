import yt from '../../assets/icons/yt.jpg'
import mixlr from '../../assets/icons/mixlr.png'
import instagram from '../../assets/icons/instagram.png'

const SocialSect = () => {
    return ( 
        <section className=" py-24 px-4 bg-black text-white relative -z-20">
            <h2 className="revealSide uppercase -skew-y-6 text-2xl">the experience</h2>
            <h2 className="revealSide text-brightRed uppercase -skew-y-6 text-4xl">continues @</h2>
            <div className="-skew-y-6 max-w-xl p-4 mx-auto">
                <a href="/">
                    <div className="border-b-2 border-white flex justify-between items-center p-4">
                        <img src={instagram} alt="" className="w-12 h-12" />
                        <p>@wcffuta</p>
                    </div>
                </a>
                <a href="/">
                    <div className="border-b-2 border-white flex justify-between items-center p-4">
                        <img src={yt} alt="" className="w-12 h-12" />
                        <p>@wcffuta</p>
                    </div>
                </a>
                <a href="/">
                    <div className="border-b-2 border-white flex justify-between items-center p-4">
                        <div className="bg-white">
                            <img src={mixlr} alt="" className="w-12 h-12" />
                        </div>
                        
                        <p>@wcffuta</p>
                    </div>
                </a>
            </div>

        </section>
     );
}
 
export default SocialSect;