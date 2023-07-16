const QuickLinkSect = () => {
    return ( 
        <section className="py-32">
            <h2 className="publicity_header text-2xl uppercase text-center">quickly jump into...</h2>
            <div className="py-8">
                <a href="#magazine">
                    <div className="revealTop flex justify-between items-center py-6 px-6 my-6 bg-red-500 text-white rounded-r-full mr-6">
                        <p>The bi-weekly WCF Magazine</p>
                        <span className="material-icons-outlined">newspaper</span>
                    </div>
                </a>
                <a href="#gallery">
                    <div className="revealTop flex justify-between items-center py-6 px-6 my-6 shadow-xl rounded-l-full ml-6">
                        <p>Visit our photo gallery</p>
                        <span className="material-icons-outlined">photo_camera</span>
                    </div>
                </a>
                <a href="#members">
                    <div className="revealTop flex justify-between items-center py-6 px-6 my-6 bg-black text-white rounded-r-full mr-6">
                        <p>Meet the talent behind publicity unit</p>
                        <span className="material-icons-outlined">groups</span>
                    </div>
                </a>
                
            </div>
        </section>
     );
}
 
export default QuickLinkSect;