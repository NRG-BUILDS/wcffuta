import img from '../../assets/images/new_asset.png'
import magazine from '../../assets/images/mag_covers/vol2.jpg'
import magazine2 from '../../assets/images/mag_covers/vol3.jpg'

const NewSect = () => {
    return ( 
        <section className="ani-bg leftCorner px-4 pt-44 -mt-40 py-32 relative z-10">
            <div className='grid md:grid-cols-2 items-center max-w-4xl gap-10 mx-auto'>
                <div className="grid grid-cols-2 items-center gap-5">
                    <div>
                        <h2 className="zoomIn uppercase -skew-y-6 text-2xl">new from</h2>
                        <h2 className="zoomIn text-brightRed uppercase -skew-y-6 text-4xl">WCF</h2>
                    </div>
                    <div>
                        <img src={img} alt=""  className='h-44 w-44'/>
                    </div>
                </div>
                
                <div className='py-8 px-4 relative w-9/12 h-96 mx-auto my-5'>
                    <img src={magazine} alt="" className="ani-magazine absolute top-0 right-0 w-full h-full shadow-2xl"/>
                    <img src={magazine2} alt="" className="ani-magazine2 absolute top-0 right-0 w-full h-full shadow-2xl z-10"/>
                </div>
            </div> 
            <div className="text-center rounded-xl bg-white py-8 px-4 max-w-md mx-auto">
                <h3 className="uppercase font-extrabold opacity-50">introducing</h3>
                <h2 className="font-serif font-light text-3xl">WCF FUTA MAGAZINE</h2>

                <p className="border-t border-b my-4 py-2">
                    Following the instruction from scriptures to <i>publish, publish, publish!</i> in <b>Jeremiah 50:2</b>
                    <br />
                    <br />
                    Our bi-weekly magazine is <u>packed</u> with all the gist, facts, stories and conversations you love. There's something for everyone!
                </p>

                <p>Visit the publicity unit page to download our maiden edition ✨</p>

                <a href="/publicity" className="block w-3/4 mx-auto bg-fuchsia-200 text-white font-extrabold rounded-xl py-2 px-6 my-8">Visit Our Page</a>
            </div>   
        </section>
     );
}
 
export default NewSect;
