const ExcoCard = ({roleName, excoName, dept, lvl, verse, moment, fun, img}) => {
    return (
        <div className="excoCard py-6 transiton duration-100 border-2 hover:border-brightRed hover:shadow-lg hover:shadow-red-100  px-4 bg-white -skew-y-6 w-full relative">
                    <div className="overflow-hidden">
                        {img && <img src={require(`../../assets/images/excos/${img}`)} alt="" className=" skew-y-6 object-fill mx-auto scale-110"/>}
                        {!img && <img src={require(`../../assets/images/excos/default.webp`)} alt="" className=" skew-y-6 object-fill mx-auto scale-110"/>}
                    </div>
                    <div className="skew-y-6 pt-14 pb-8">
                        <p className="leading-4 text-gray-500 font-semibold uppercase text-xl">{roleName}</p>

                        <h3 className="text-3xl my-4 text-deepRed">
                        {excoName}
                        </h3>
                        <p><span className="text-gray-500">DEPT:</span> {dept}</p>
                        <p><span className="text-gray-500">LVL:</span> {lvl}</p>
                        <p><span className="text-gray-500">WATCH VERSE:</span><a href={`https://www.google.com/search?q=${verse}`} className="underline text-deepRed"> {verse}</a>  </p>
                        <p className="pt-4"><span className="text-gray-500">FAV WCF MOMENT:<br/></span>{moment}</p>
                        <p><span className="text-gray-500">FUN THING ABOUT ME:<br/></span> {fun} </p>
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
                    roleName={'coordinator 001 & brother\'s coordinator'}
                    excoName={'Justice Daniel Adeyemi'}
                    dept={'Mechanical Engineering'}
                    lvl={500}
                    verse={'Psa 19:7-12'}
                    moment={'Bible study sessions 📖'}
                    fun={'Though I look serious and spiritual, which I actually try to be by God\'s grace, I am quite jovial, for those who know me closely.'}
                    img={'justice_adeyemi.webp'} />
                <ExcoCard
                    roleName={'coordinator 002 & sister\'s coordinator'}
                    excoName={'Abu Glory Ojima'}
                    dept={'Quantity Surveying'}
                    lvl={500}
                    verse={'Pro. 4:7'}
                    moment={'A particular worship session when I was in 100 level'}
                    fun={'I love God 😍'}
                    img={'abu_glory.webp'} />
                <ExcoCard
                    roleName={'general secretary'}
                    excoName={'Olagoke Favour'}
                    dept={'Biochemistry'}
                    lvl={500}
                    verse={'Psalm 34:10'}
                    moment={'Moment of worship'}
                    fun={'I love visiting interesting places 🚌'}
                    img={'olagoke_favour.webp'} />
                <ExcoCard
                    roleName={'assistant general secretary'}
                    excoName={'Lebi Oluwatodimu'}
                    dept={'Mining Engineering'}
                    lvl={200}
                    verse={'Exo. 23:25'}
                    moment={'Relationship service during WCF Week 23'}
                    fun={'I joke a lot 😂'}
                    img={'lebi_oluwatodimu.webp'} />
                <ExcoCard
                    roleName={'financial secretary & 100l assistant'}
                    excoName={'Balogun Precious'}
                    dept={'Applied Geology'}
                    lvl={500}
                    verse={'1Thes. 1:18'}
                    moment={'Drama night 🎬'}
                    fun={'I love looking for trouble but I am very gentle'}
                    img={'balogun_precious.webp'} />
                 <div className="zoomIn px-4 py-8 md:px-8 md:col-span-3 font-bold -skew-y-6">
                    <p className="revealTop uppercase text-2xl leading-3">unit</p>
                    <p className="revealTop text-brightRed uppercase text-4xl">coordinators</p>
                </div> 
                <ExcoCard
                    roleName={'Publicity Unit Coordinator'}
                    excoName={'King David Olufemi'}
                    dept={'Quantity Surveying'}
                    lvl={400}
                    verse={'Isa. 48:17'}
                    moment={'Every service day when we sing the family song'}
                    fun={'I am multi-talented, simple and gentle 🌟'}
                    img={'david_olufemi.webp'} />
                <ExcoCard
                    roleName={'academic unit coordinator'}
                    excoName={'Adebanji Emmanuel'}
                    dept={'Mechanical Engineering'}
                    lvl={200}
                    verse={'Psa. 34:1'}
                    moment={'100 level hangout day'}
                    fun={'I love learning new things'}
                    img={'adebanji_emmanuel.webp'} />   
                <ExcoCard
                    roleName={'choir coordinator'}
                    excoName={'Arowolo Samuel'}
                    dept={'Computer Engineering'}
                    lvl={400}
                    verse={'Col 3:16'}
                    moment={'Praise and worship session'}
                    fun={''}
                    img={'arowolo_samuel.webp'} />   
                <ExcoCard
                    roleName={'decorating unit coordinator'}
                    excoName={'Love Oluwabukola'}
                    dept={'Applied Geology'}
                    lvl={400}
                    verse={'Isaiah 49:15-16'}
                    moment={'Staying in WCF secretaiat'}
                    fun={'iLove iPray iBake 💕🙏🧁'}
                    img={'love_oluwabukola.webp'} />   
                <ExcoCard
                    roleName={'Drama Unit Coordinator'}
                    excoName={'Okoye Lotachi'}
                    dept={'Quantity Surveying'}
                    lvl={400}
                    verse={'Deut 1:11'}
                    moment={'Night rehearsals before drama night 🎬'}
                    fun={'I love finding ingenious ways to do less work'}
                    img={'okoye_lotachi.webp'} />
                <ExcoCard
                    roleName={'Evangelism Unit (South Gate) Cooridnator & 500l Coordinator'}
                    excoName={'David Iyke'}
                    dept={'Applied Geology'}
                    lvl={500}
                    verse={'Psalm 46:10'}
                    moment={'Moment of worship 🙏'}
                    fun={'I am just curious. It can be fun and annoying also'}
                    img={'david_ikye.webp'} />
                <ExcoCard
                    roleName={'Hospitality & Sanctuary Unit Coordinator'}
                    excoName={'Adeboye Godspower'}
                    dept={'Building Technology'}
                    lvl={300}
                    verse={'Rev 20:12'}
                    moment={'Every moment is my favourite moment'}
                    fun={'Helping people to grow 🌱'}
                    img={'adeboye_godspower.webp'} />
                <ExcoCard
                    roleName={'Assistant Prayer Coordinator'}
                    excoName={'Olaniyi Olamide'}
                    dept={'Human Anatomy'}
                    lvl={300}
                    verse={'Phil. 4:13'}
                    moment={'Singing the family song'}
                    fun={'I don\'t hold grudges 🕊'}
                    img={'olaniyi_olamide.webp'} />
                <ExcoCard
                    roleName={'Ushering Unit Coordinator'}
                    excoName={'Adekiya Seun Mary'}
                    dept={'Agricultural & Resource Economics'}
                    lvl={400}
                    verse={'Phil. 4:13'}
                    moment={'12-hour prayer session under President Kele tenure.'}
                    fun={'I love chatting'}
                    img={'adekiya_seun.webp'} />
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
                    img={'ayeni_joy.webp'} />
                <ExcoCard
                    roleName={'400l coordinator'}
                    excoName={'Joseph Femi Oloba'}
                    dept={'Industrial and Production Engineering'}
                    lvl={400}
                    verse={'Gal. 5:25'}
                    moment={'Staying in WCF secretaiat 🏡'}
                    fun={'I am gentle but I can disturb too'}
                    img={'femi_oloba.webp'} />
                <ExcoCard
                    roleName={'300l coordinator'}
                    excoName={'Adenuga Joshua'}
                    dept={'Meteorology & Climate Science'}
                    lvl={300}
                    verse={'Joshua 1:8'}
                    moment={'The day I joined publicity unit📸'}
                    fun={'I can do a lot a things!'}
                    img={'adenuga_joshua.webp'} />
                <ExcoCard
                    roleName={'300l assistant coordinator'}
                    excoName={'Bamidele Heritage'}
                    dept={'Agricultural and Environmental Engineering'}
                    lvl={300}
                    verse={'Eccl. 10:10b'}
                    moment={'WCF Week 23 -Drama night'}
                    fun={'I love the things of God 👼'}
                    img={'bamidele_heritage.webp'} />
                <ExcoCard
                    roleName={'200l Coordinator'}
                    excoName={'Emmanuel Boluwatife'}
                    dept={'Industrial Production Engineering'}
                    lvl={200}
                    verse={'Mat. 15:16'}
                    moment={'Praise and worship sessions 🥁'}
                    fun={'I imagine a lot'}
                    img={'emmanuel_boluwatife.webp'} />    
                <ExcoCard
                    roleName={'200l assistant coordinator'}
                    excoName={'Omoyeni Oreoluwa'}
                    dept={'Biology'}
                    lvl={200}
                    verse={'Phil 4:13'}
                    moment={'Whenver we sing the family song 👨‍👩‍👧‍👧'}
                    fun={'Hanging out with friends'}
                    img={'omoyeni_oreoluwa.webp'} />
                <ExcoCard
                    roleName={'100l coordinator & special duties coordinator'}
                    excoName={'Sunday Oche Chukwuemeka'}
                    dept={'Statistics'}
                    lvl={500}
                    verse={'Psa. 107:23'}
                    moment={'The list of great memories is endless!!'}
                    fun={'I like to travel 🚌'}
                    img={'sunday_oche.webp'} />
                
                <div  className="md:hidden absolute left-0 bottom-0 text-center w-full py-8 bg-gradient-to-b from-transparent to-white"
                    onClick={(e) => {showFullSect(e)}}
                    >
                    <button 
                        className="bg-brightRed text-white shadow-xl rounded-3xl px-6 py-2 animate-bounce"
                        >
                    View All Excos
                    </button>
                </div>
            </div>
        </section>
     );
}
 
export default ExcoSect;