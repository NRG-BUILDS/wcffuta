import { useEffect, useState } from 'react'
import programPic from '../../assets/images/program.jpg'
import MapSect from './MapSect'

const UpcoProSect = () => {
    const [dayOfEvent, setDayOfEvent] = useState('Tuesday')
    const [isMapOpen, setIsMapOpen] = useState(false)
    const date = new Date();
    const today = date.getDay();
    useEffect(() => {
        if (today <= 2 || today === 6) {
            setDayOfEvent('Tuesday')    //for days before tuesday and after friday
        } else if (today >= 3 && today <= 5) {
            setDayOfEvent('Friday')     //for days after tuesday but bofore saturday
        }
        // eslint-disable-next-line
    }, [])

    const mapClick = (e) => {
        if (isMapOpen) {
            e.target.innerHTML = `<span>How to get there </span> 
            `
            setIsMapOpen(false)
        } else {
            setIsMapOpen(true)
            e.target.innerHTML = `<span>Hide Map </span> 
            `
        }
    }

    //Edit this to edit event details
    const program = {
        name: 'I.T Thanksgiving Service',
        venue: 'Church Auditorium, Apatapiti Layout.',
        time: '6pm'
    }
    
    return ( 
        <section className="rightCorner -mt-40 md:pb-52 py-36 px-4 bg-black text-white relative z-20" id='upcoming'>
            <h2 className="zoomIn uppercase -skew-y-6 text-2xl">join us</h2>
            <h2 className="zoomIn text-brightRed uppercase -skew-y-6 text-4xl">this {dayOfEvent}</h2>

            <div className='px-4 my-12 grid md:grid-cols-2 items-center gap-5 text-center md:text-left mx-auto max-w-3xl'>
                <div>
                    <img src={programPic} alt="" className='-skew-y-6'/>
                </div>
                
                <div className='px-10 text-left'>
                    <p className="zoomIn my-3 text-center font-extrabold text-xl">
                        {program.name}</p>
                    <p className="zoomIn my-3 flex gap-4 items-center justify-between font-bold text-lg">
                        {program.time}
                        <span className="material-icons-outlined">schedule</span>
                    </p>
                    <p className="zoomIn my-3 flex gap-4 items-center justify-between">
                        {program.venue}
                        <span className="material-icons-outlined">location_on</span>
                    </p>
                    <div>
                        <a href="/#map" onClick={(e) => {mapClick(e)}}>
                            <div className='flex font-semibold justify-between items-center my-10 rounded-3xl py-3 px-6 border-2 border-brightRed hover:bg-brightRed hover:text-white duration-75' id='map'>
                                <span>How to get there </span> 
                                <span className="material-icons-outlined">explore</span>
                            </div>
                           
                        </a>
                    </div>
                    
                </div>  
            </div>
            {isMapOpen && (
                    <MapSect />
                )}
        </section>
     );
}
 
export default UpcoProSect;