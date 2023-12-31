import { useEffect, useState } from 'react';

const TestimonySect = () => {
    const [slide] = useState(1)
    const [slideArray, setArray] = useState([])

    useEffect(() => {
        let tempArray = []
        for (let i = 1; i < 17; i++) {
        tempArray.push(i)
       }
       setArray(tempArray)
    }, [slide])

    return ( 
        <section className="py-36">
            <div className="pb-20 px-4 revealTop text-center">
                <h2 className="text-xl font-light font-serif leading-none text-deepRed">It's</h2>
                <h2 className="text-4xl font-light font-serif leading-none mb-3">Testimony Time</h2>
                <h2 className="font-semibold opacity-30 px-6">Come see what God is doing @ WCFFUTA</h2>
            </div>

            <div className="ml-2 md:max-w-4xl md:mx-auto flex flex-nowrap overflow-x-scroll snap-x snap-mandatory">
                {slideArray.map(slide => 
                        <div className="ml-2 w-11/12 md:w-3/5 snap-start snap-always grow-0 shrink-0 basis-auto">
                            <img src={require(`../../assets/images/testimonies/testimony${slide}.jpg`)} alt="" />
                        </div>
                    )
                    
                }
                
                
            </div>

            {/* <div className='relative border w-11/12 mx-auto'>
                <img 
                    src={require(`../../assets/images/testimonies/testimony${slide}.jpg`)} 
                    alt="" 
                    className="w-full h-full Open" />
                <button 
                    onClick={() => {
                        if (slide > 1) {
                            setSlide(slide - 1)
                        }
                    }}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 flex justify-center items-center bg-deepRed text-white p-4"><span className="material-icons-outlined">arrow_back_ios</span></button>
                <button 
                    onClick={() => {
                        if (slide < numOfSlides) {
                            setSlide(slide + 1)
                        }
                    }}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 flex justify-center items-center bg-deepRed text-white p-4"><span className="material-icons-outlined">arrow_forward_ios</span></button>
            </div>           */}
        </section>
     );
}
 
export default TestimonySect;
