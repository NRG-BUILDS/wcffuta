import timetable from '../../assets/images/timetable.jpg'

const Timetable = () => {
    return ( 
        <div>
            <div className="zoomIn px-4 md:px-8 py-6 text-left font-bold -skew-y-6">
                <p className="revealTop uppercase text-xl leading-3">tutorials! tutorials!!</p>
                <p className="revealTop text-brightRed uppercase text-3xl">Tutorials!!!</p>
            </div>
            <div className="my-6 px-4">
                <p>Get the very best of tutorials from some of the brightest minds WCF has to offer. With our help and the wisdom of the Holy Spirit, a 5.0 CGPA can be <b>your</b> reality!</p>
                <a href={timetable} download>
                            <div className='flex font-semibold justify-between items-center my-10 rounded-3xl py-3 px-4 border-2 bg-brightRed text-white duration-75' id='map'>
                                <span>Downlaod current timetable </span>
                                <span className="material-icons-outlined">download</span>
                            </div>
                           
                        </a>
            </div>
            <img src={timetable} alt="" />
        </div>
     );
}
 
export default Timetable;