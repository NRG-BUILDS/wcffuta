import heroImg from '../../assets/images/publicity_hero.png'

const Hero = () => {
    return ( 
        <section className=" py-36 flex items-center justify-center ani-bg rounded-b-roundBottom">
            <div className="grid md:grid-cols-2 items-center gap-32 max-w-4xl px-4">
                <div>
                    <h2 className="font-extrabold opacity-50">MEET THE WCF</h2>
                    <h1 className="publicity_header text-7xl font-light">Publicity Unit</h1>

                </div>
                <div className='revealTop overflow-hidden rounded-2xl'>
                    <img src={heroImg} alt=""/>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;