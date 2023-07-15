import img from '../../assets/images/new_asset.png'
import magazine from '../../assets/images/magazine_cover.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom';

const NewSect = () => {
    return ( 
        <section className="ani-bg leftCorner px-4 pt-44 -mt-40 py-32">
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
                
                <div className='py-8 px-4'>
                    <img src={magazine} alt="" className=" w-10/12 mx-auto -rotate-12 shadow-2xl"/>
                </div>
            </div> 
            <div className="text-center rounded-xl bg-white py-8 px-4 max-w-md mx-auto">
                <h3 className="uppercase font-extrabold opacity-50">introducing</h3>
                <h2 className="font-serif font-light text-3xl">WCFFUTA MAGAZINE</h2>

                <p className="border-t border-b my-4 py-2">
                    Following the instruction from scriptures to <i>publish, publish, publish!</i> in <b>Jeremiah 50:2</b>
                    <br />
                    <br />
                    Our bi-weekly magazine is <u>packed</u> with all the gist, facts, stories and conversations you love. There's something for everyone!
                </p>

                <p>Visit the publicity unit page to download our maiden edition ✨</p>

                <Link to="/blog" className="block w-3/4 mx-auto bg-fuchsia-200 text-white font-extrabold rounded-xl py-2 px-6 my-8">Visit Our Page</Link>
            </div>   
        </section>
     );
}
 
export default NewSect;