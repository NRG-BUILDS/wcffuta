import yt from '../../assets/icons/yt.jpg'
import mixlr from '../../assets/icons/mixlr.png'
import instagram from '../../assets/icons/instagram.png'

const SocialSect = () => {
    return ( 
        <section className="leftCorner -mt-20 md:-mt-44 py-32 px-4 bg-gradient-to-br from-black to-deepRed text-white relative z-0" id='social'>
            <h2 className="zoomIn uppercase -skew-y-6 text-2xl">the experience</h2>
            <h2 className="zoomIn text-brightRed uppercase -skew-y-6 text-4xl">continues @</h2>
            <div className="-skew-y-6 max-w-xl p-4 mx-auto">
                <a href="https://www.instagram.com/wcffuta">
                    <div className="border-b-2 border-white flex justify-between items-center p-4">
                        <img src={instagram} alt="" className="w-12 h-12" />
                        <p>Get posts @wcffuta</p>
                    </div>
                </a>
                <a href="https://www.youtube.com/@wcffuta-media">
                    <div className="border-b-2 border-white flex justify-between items-center p-4">
                        <img src={yt} alt="" className="w-12 h-12" />
                        <p>Watch @wcffuta-media</p>
                    </div>
                </a>
                <a href="https://www.mixlr.com/wcf-futa-online">
                    <div className="border-b-2 border-white flex justify-between items-center p-4">
                        <div className="bg-white">
                            <img src={mixlr} alt="" className="w-12 h-12" />
                        </div>
                        
                        <p>Listen @wcf-futa-online</p>
                    </div>
                </a>
                {/* <div className="pt-10 flex justify-center items-center gap-4 px-6">
                    <h2>More on WCF Publicity</h2>
                    <p><span className="material-icons-outlined">arrow_forward_ios</span></p>
                </div> */}
            </div>
            

        </section>
     );
}
 
export default SocialSect;