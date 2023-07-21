const MagCard = ({name, link, pic}) => {
    return ( 
        <div className="overflow-hidden rounded-lg border-2 border-r-gray-300 hover:border-red-500 duration-200 flex ">
            <div className="h-full w-1/3">
                <img src={require(`../../assets/images/mag_covers/${pic}.jpg`)} alt="" className="w-full h-full object-cover" />
            </div>
            <div className='py-4 px-4 flex items-center'>
                <div>
                    <h3 className="text-2xl font-light serif">{name}</h3>
                    <div className="flex justify-between">
                        <p className="opacity-50 font-semibold">In the beginning...</p>
                        <a href={link} className="inline-block"><span className="material-icons-outlined">download</span></a>
                    </div>
                </div>
                
                
            </div>
        </div>
     );
}
 

const MagSect = () => {
    return ( 
        <section className="max-w-4xl mx-auto" id="magazine">
            <div className="text-center pt-24 pb-20 px-4">
                <h2 className="text-4xl revealTop font-light">The WCF magzine...</h2>
                <h2 className="text-xl font-light py-2">...publish and conceal not... <br /> <b>Jeremiah 50:2</b></h2>
                <details>
                    <summary className="rounded-xl ani-bg inline-block py-2 px-6 font-extrabold text-white">
                        <span >Read More About the Mag</span>
                    </summary>
                    <div className="p-3">
                        <p>Following the word of God in the book of Jeremiah 50:2 (KJV)  Declare ye among the nations, and publish, and set up a standard; publish, and conceal not.
                            <br />
                            Here at WCFFUTA we've put God's word to work and published our bi-weekly E-magazines. It features different columns ranging from our history at WCFFUTA, God's word, health tips and business advertisement. It's an article for  everyone and we can definitely say every piece is worth reading.</p>
                    </div>
                </details>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-x-4 px-4 pt-8">
                <div className="md:col-span-2 my-2">
                    <h2 className="font-extrabold text-red-500 text-xl">Download Latest Editions</h2>
                </div>
                <MagCard 
                    name={'WCF Magazine Vol. 1'}
                    link={'https://drive.google.com/file/d/1-G_2KLh7115pSlGlhkuWXSXZ42eUi1JW/view?usp=drivesdk">https://drive.google.com/file/d/1-G_2KLh7115pSlGlhkuWXSXZ42eUi1JW/view?usp=drivesdk'}
                    pic={'vol1'}/>
            </div>
        </section>
     );
}
 
export default MagSect;