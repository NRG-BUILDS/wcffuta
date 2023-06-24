import programPic from '../../assets/images/program.jpg'

const UpcoProSect = () => {
    const program = {
        name: 'Season of Revival',
        venue: 'Church Auditorium, Apatapiti Layout.',
        time: '6pm'
    }

    return ( 
        <section className="rightCorner -mt-40 py-44 px-4 bg-black text-white relative -z-20" id='upcoming'>
            <h2 className="zoomIn uppercase -skew-y-6 text-2xl">join us</h2>
            <h2 className="zoomIn text-brightRed uppercase -skew-y-6 text-4xl">this week</h2>

            <div className='px-4 my-12 grid md:grid-cols-2 items-center gap-5 text-center md:text-left mx-auto max-w-3xl'>
                <div>
                    <img src={programPic} alt="" className='-skew-y-6'/>
                </div>
                
                <div className='px-10'>
                    <p className="zoomIn font-extrabold text-xl">{program.name}</p>
                    <p className=" zoomIn font-bold text-lg">{program.time}</p>
                    <p className="zoomIn">{program.venue}</p>
                </div>
            </div>
        </section>
     );
}
 
export default UpcoProSect;