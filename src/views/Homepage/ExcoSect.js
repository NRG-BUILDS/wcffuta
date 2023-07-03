const ExcoCard = ({roleName, excoName, dept, lvl, verse, moment, fun, img}) => {
    return (
        <div className="excoCard py-6 transiton duration-100 border-2 hover:border-brightRed hover:shadow-lg hover:shadow-red-100  px-4 bg-white -skew-y-6 w-full relative">
                    <div className="overflow-hidden">
                        <img src={require(`../../assets/images/excos/${img}`)} alt="" className=" skew-y-6 object-fill scale-110"/>
                    </div>
                    <div className="skew-y-6 pt-14 pb-8">
                        <p className="leading-4 text-gray-500 font-semibold uppercase text-xl">{roleName}</p>

                        <h3 className="text-3xl my-4 text-deepRed">
                        {excoName}
                        </h3>
                        <p><span className="text-gray-500">DEPT:</span> {dept}</p>
                        <p><span className="text-gray-500">LVL:</span> {lvl}</p>
                        <p><span className="text-gray-500">WATCH VERSE:</span><a href={`https://www.google.com/search/q=${verse}`} className="underline"> {verse}</a>  </p>
                        <p className="pt-4"><span className="text-gray-500">FAV WCF MOMENT:<br/></span>{moment}</p>
                        <p><span className="text-gray-500">FUN THUNG ABOUT ME:<br/></span> {fun} </p>
                    </div>
                    
                </div>
                    
    )
}

const ExcoSect = () => {
    const showFullSect = (e) => {
        let section = document.querySelector('.excoSect')
        section.classList.add('active')
        e.currentTarget.style.display = 'none'

    }

    return ( 
        <section className="leftCorner bg-white pt-24 pb-44 z-10">
            <div className="zoomIn max-w-4xl px-4 md:px-8 pb-6 font-bold -skew-y-6">
                <p className="revealTop uppercase text-2xl leading-3">meet our</p>
                <p className="revealTop text-brightRed uppercase text-4xl">Excos</p>
            </div>
            <div className="excoSect grid md:grid-cols-3 gap-5 max-w-5xl mx-auto px-4 py-10 justify-evenly items-center md:h-full relative overflow-clip duration-100 pb-10">
                <ExcoCard
                    roleName={'president & brother\'s coordinator'}
                    excoName={'Justice Daniel Adeyemi'}
                    dept={'Mechanical Engineering'}
                    lvl={500}
                    verse={'Psa 19:7-12'}
                    moment={'Bible study sessions 📖'}
                    fun={'Though I look serious and spiritual, which I actually try to be by God\'s grace, I am quite jovial, for those who know me closely.'}
                    img={'olagoke_favour.jpg'} />
                <ExcoCard
                    roleName={'vice-president & sister\'s coordinator'}
                    excoName={'Abu Glory Ojima'}
                    dept={'Quantity Surveying'}
                    lvl={500}
                    verse={'Pro. 4:7'}
                    moment={'A particular worship session when I was in 100 level'}
                    fun={'I love God 😍'}
                    img={'abu_glory.jpg'} />
                <ExcoCard
                    roleName={'general secretary'}
                    excoName={'Olagoke Favour'}
                    dept={'Biochemistry'}
                    lvl={500}
                    verse={'Psalm 34:10'}
                    moment={'Moment of worship'}
                    fun={'I love visiting interesting places 🚌'}
                    img={'olagoke_favour.jpg'} />
                <ExcoCard
                    roleName={'assistant general secretary'}
                    excoName={'Lebi Oluwatodimu'}
                    dept={'Mining Engineering'}
                    lvl={200}
                    verse={'Exo. 23:25'}
                    moment={'Relationship service during WCF Week 23'}
                    fun={'I joke a lot 😂'}
                    img={'lebi_oluwatodimu.jpg'} />
                <ExcoCard
                    roleName={'financial secretary'}
                    excoName={'Balogun Precious'}
                    dept={'Applied Geology'}
                    lvl={500}
                    verse={'1Thes. 1:18'}
                    moment={'Drama night 🎬'}
                    fun={'I love looking for trouble but I am very gentle'}
                    img={'balogun_precious.jpg'} />
                 <div className="zoomIn px-4 py-8 md:px-8 md:col-span-3 font-bold -skew-y-6">
                    <p className="revealTop uppercase text-2xl leading-3">unit</p>
                    <p className="revealTop text-brightRed uppercase text-4xl">coordinators</p>
                </div> 
                <ExcoCard
                    roleName={'academic unit coordinator'}
                    excoName={'Adebanji Emmanuel'}
                    dept={'Meechanical Engineering'}
                    lvl={200}
                    verse={'Psa. 34:1'}
                    moment={'100 level hangout day'}
                    fun={'I love learning new things'}
                    img={'adebanji_emmanuel.jpg'} />   
                <ExcoCard
                    roleName={'decorating unit coordinator'}
                    excoName={'Love Oluwabukola'}
                    dept={'Applied Geology'}
                    lvl={400}
                    verse={'Isaiah 49:15-16'}
                    moment={'Staying in WCF secretaiat'}
                    fun={'iLove iPray iBake 💕🙏🧁'}
                    img={'love_oluwabukola.jpg'} />   
                <ExcoCard
                    roleName={'Drama Unit Coordinator'}
                    excoName={'Okoye Lotachi'}
                    dept={'Quantity Surveying'}
                    lvl={400}
                    verse={'Deut 1:11'}
                    moment={'Moment of worship 🙏'}
                    fun={'I am just curious. It can be fun and annoying also'}
                    img={'okoye_lotachi.jpg'} />
                <ExcoCard
                    roleName={'Evangelism Unit (South Gate) Cooridnator & 500l Coordinator'}
                    excoName={'David Iyke'}
                    dept={'Applied Geology'}
                    lvl={500}
                    verse={'Psalm 46:10'}
                    moment={'Moment of worship 🙏'}
                    fun={'I am just curious. It can be fun and annoying also'}
                    img={'david_ikye.jpg'} />
                <ExcoCard
                    roleName={'Hospitality & Sanctuary Unit Coordinator'}
                    excoName={'Adeboye Godspower'}
                    dept={'Building Technology'}
                    lvl={300}
                    verse={'Rev 20:12'}
                    moment={'Every moment is my favourite moment'}
                    fun={'Helping people to grow 🌱'}
                    img={'adeboye_godspower.jpg'} />
                <ExcoCard
                    roleName={'Publicity Unit Coordinator'}
                    excoName={'King David Olufemi'}
                    dept={'Quantity Surveying'}
                    lvl={400}
                    verse={'Isa. 48:17'}
                    moment={'Every service day when we sing the family song'}
                    fun={'I am multi-talented, simple and gentle 🌟'}
                    img={'david_olufemi.jpg'} />
                <div className="zoomIn px-4 py-8 md:px-8 md:col-span-3 font-bold -skew-y-6">
                    <p className="revealTop uppercase text-2xl leading-3">level</p>
                    <p className="revealTop text-brightRed uppercase text-4xl">coordinators</p>
                </div>    
                <ExcoCard
                    roleName={'500l assistant coordinator'}
                    excoName={'Ayeni Joy'}
                    dept={'Animal Production & Health'}
                    lvl={500}
                    verse={'Psalm 121'}
                    moment={'WCF Week'}
                    fun={'I am shy😂'}
                    img={'ayeni_joy.jpg'} />
                <ExcoCard
                    roleName={'400l coordinator'}
                    excoName={'Joseph Femi Oloba'}
                    dept={'Industrial and Production Engineering'}
                    lvl={400}
                    verse={'Gal. 5:25'}
                    moment={'Staying in WCF secretaiat 🏡'}
                    fun={'I am gentle but I can disturb too'}
                    img={'femi_oloba.jpg'} />
                <ExcoCard
                    roleName={'300l assistant coordinator'}
                    excoName={'Bamidele Heritage'}
                    dept={'Agricultural and Environmental Engineering'}
                    lvl={300}
                    verse={'Eccl. 10:10b'}
                    moment={'WCF Week 23 -Drama night'}
                    fun={'I love the things of God 👼'}
                    img={'bamidele_heritage.jpg'} />
                <ExcoCard
                    roleName={'200l assistant coordinator'}
                    excoName={'Omoyeni Oreoluwa'}
                    dept={'Biology'}
                    lvl={200}
                    verse={'Phil 4:13'}
                    moment={'Whenver we sing the family song 👨‍👩‍👧‍👧'}
                    fun={'Hanging out with friends'}
                    img={'omoyeni_oreoluwa.jpg'} />
                
                <div  className="md:hidden absolute left-0 bottom-0 text-center w-full py-8 bg-gradient-to-b from-transparent to-white"
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