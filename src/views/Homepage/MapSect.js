import {useState} from 'react'

const MapSect = () => {
    const [index, setIndex] = useState(0)
    const maps = [
        {
            name: 'Apatapiti Fellowship',
            mapImg: 'GRAPHIC 1 GOES HERE',
            address: 'Opposite Rehoboth Lodge, Apatapiti Junction, South gate.'
        },
        {
            name: 'Main Church',
            mapImg: 'GRAPHIC 2 GOES HERE',
            address: 'Along North Gate Road, Beside Akad Filling Station, AKure.'
        },
    ]
    const nextMap = (num) => {

        if (num === 1 ) {
            setIndex(1)
   
        } else if (num === -1) {
            setIndex(0)
            
        }
    }
    return ( 
        <section className=" bg-opacity-40  max-w-4xl mx-auto border-brightRed border-dotted border-t-2 border-b-2 skew-y-12 md:skew-y-6 mt-20 md:mt-36 py-20 md:py-28 z-10">
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto px-4 -skew-y-12 md:-skew-y-6">
                <div className="mb-10 text-left">
                    <h2 className="bold text-xl leading-3 uppercase">how to find our</h2>
                    <h2 className="bold text-2xl uppercase bg-gradient-to-b from-brightRed to-deepRed bg-clip-text text-transparent">{maps[index].name} auditroium</h2>
                    <div className="text-center py-4 justify-between items-center hidden md:flex gap-5">
                    <button
                        onClick={() => {nextMap(-1)}}
                        className="">
                            <span className="material-icons-outlined">arrow_back_ios</span>
                        </button>
                    <p>{maps[index].address}</p>
                    <button
                        onClick={() => {nextMap(1)}}>
                            <span className="material-icons-outlined">arrow_forward_ios</span>
                        </button>
                </div>
                </div>
                
                <div className="border border-gray-400 h-80">
                    {maps[index].mapImg}
                </div>
                <div className="flex gap-2 text-center py-4 justify-between items-center md:hidden">
                    <button
                        onClick={() => {nextMap(-1)}}>
                            <span className="material-icons-outlined">arrow_back_ios</span>
                        </button>
                    <p>{maps[index].address}</p>
                    <button
                        onClick={() => {nextMap(1)}}
                        className="">
                            <span className="material-icons-outlined">arrow_forward_ios</span>
                        </button>
                </div>
            </div>
        </section>
     );
}
 
export default MapSect;