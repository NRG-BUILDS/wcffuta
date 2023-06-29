const ExcoCard = ({roleCode, roleName, excoName, dept, lvl, verse}) => {
    return (
        <div className="excoCard py-6 transiton duration-100 border-2 hover:border-brightRed hover:shadow-lg hover:shadow-red-100  px-4 bg-white -skew-y-6 w-full relative">
                    <div className="overflow-hidden">
                        <img src={require(`../../assets/images/homePic1.jpg`)} alt="" className=" skew-y-6 object-cover scale-125"/>
                    </div>
                    <div className="skew-y-6 pt-14 pb-8">
                        <p className=" font-semibold uppercase text-lg leading-3 text-gray-500">{roleCode}</p>
                        <p className="leading-4 text-gray-500 font-semibold uppercase text-xl">{roleName}</p>

                        <h3 className="text-3xl my-4 text-deepRed">
                        {excoName}
                        </h3>
                        <p><span className="text-gray-500">DEPT:</span> {dept}</p>
                        <p><span className="text-gray-500">LVL:</span> {lvl}</p>
                        <p><span className="text-gray-500">WATCH VERSE:</span> {verse}</p>
                    </div>
                    
                </div>
                    
    )
}

const ExcoSect = () => {
    const showFullSect = (e) => {
        let section = document.querySelector('.excoSect')
        section.classList.remove('h-96')
        section.classList.add('h-full')
        e.target.style.display = 'none'

    }

    return ( 
        <section className="leftCorner bg-white pt-24 pb-44 z-10">
            <div className="zoomIn max-w-4xl px-4 md:px-8 pb-6 font-bold -skew-y-6">
                <p className="revealTop uppercase text-2xl leading-3">meet our</p>
                <p className="revealTop text-brightRed uppercase text-4xl">Excos</p>
            </div>
            <div className="excoSect grid md:grid-cols-3 gap-10 max-w-4xl mx-auto px-4 py-10 justify-between h-96 md:h-full relative overflow-clip duration-100 pb-10">
                <ExcoCard
                    roleCode={'001'}
                    roleName={'brother coordinator'}
                    excoName={'Pres. Jusitce Adeyemi'}
                    dept={'Civil Enginnering'}
                    lvl={500}
                    verse={'Matthew 6:33'} />
                <ExcoCard
                    roleCode={'001'}
                    roleName={'brother coordinator'}
                    excoName={'Pres. Jusitce Adeyemi'}
                    dept={'Civil Enginnering'}
                    lvl={500}
                    verse={'Matthew 6:33'} />
                <ExcoCard
                    roleCode={'003'}
                    roleName={'assistant gen. secretary'}
                    excoName={'Bro. Todimu'}
                    dept={'Industrial Production & Enginnering'}
                    lvl={200}
                    verse={'Matthew 6:33'} />
                
                <div  className="md:hidden absolute left-0 bottom-0 text-center w-full py-8"
                    onClick={(e) => {showFullSect(e)}}
                    >
                    <button 
                        className="bg-brightRed text-white shadow-xl rounded-3xl px-6 py-2"
                        >
                    View All Excos
                    </button>
                </div>
            </div>
        </section>
     );
}
 
export default ExcoSect;