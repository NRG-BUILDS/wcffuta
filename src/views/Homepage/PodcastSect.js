import { useState } from 'react'
import bg from '../../assets/images/podcast_bg.jpg'

const AudioTrack = ({Date, Title, link}) => {
    return (
        <div className=" flex justify-between transiton duration-100 hover:shadow-lg relative">
            <div className="flex items-center py-2 px-5 border-2 border-slate-600 rounded-l-lg hover:border-brightRed">
                <div className='text-left'>
                    <p className="font-extrabold text-sm">{Date}</p>
                    <p className="font-light text-lg whitespace-nowrap text-ellipsis overflow-hidden w-52 hover:whitespace-normal">{Title}</p>
                    
                </div>
                
            </div>
            <a href={link}>
                <div className="flex justify-center items-center h-full w-20 bg-red-500 text-white rounded-r-lg">
                    <span className="material-icons-outlined">download</span>
                </div>
            </a>
            
        </div>
                    
    )
}

const PodcastSect = () => {
    const [viewMore, setViewMore] = useState(false);
    const podcasts = [
        {date: '29/09/2023', title: 'Question & Answer Service', link: 'https://drive.google.com/folderview?id=13eikCe2qPwmPddJUgQX1Al9EAQcttP5I'},
        {date: '19/09/2023', title: 'I.T Send forth', link: 'https://drive.google.com/folderview?id=1vvsmqo8lwLoMkjRIkbWSLCp_IM6bn1DW'},
        {date: '08/09/2023', title: 'Prayer Charge Part 1-3', link: 'https://drive.google.com/folderview?id=12tflD0_0oN_BbWHXm5DAHKhSv-_TysM_'},
        {date: '21/08/2023', title: 'Prayer Stretch: Recharge', link: 'https://drive.google.com/drive/folders/1-0RhxfxbiTZiX0yYqK-YqUlAQ7nfXOQT'},
        {date: '15/08/2023', title: 'Christ\'s Healing Power', link: 'https://drive.google.com/drive/folders/1-0RhxfxbiTZiX0yYqK-YqUlAQ7nfXOQT'},
        {date: '08/08/2023', title: 'Discovering & Pursuing Our Purpose in Christ', link: 'https://drive.google.com/file/d/1-CciesNrvZA3tGs9ENUb_adE4TvPAnIi/view?usp=drivesdk'},
        {date: '08/08/2023', title: 'More Coming Soon...', link: '#'},
        {date: '08/08/2023', title: 'More Coming Soon...', link: '#'},
        {date: '08/08/2023', title: 'More Coming Soon...', link: '#'},
        
    ]

    return ( 
        <section id="podcasts" className="leftCorner bg-black text-white pt-24 -mt-14 pb-44 relative z-0 text-center">
            <img src={bg} alt=""  className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"/>
            <div className="zoomIn px-4 md:px-8 pb-6">
                <p className="revealTop text-lg font-light leading-3">Download</p>
                <p className="revealTop my-4 text-green-600 font-light uppercase text-5xl">audio messages</p>
                <p className="revealTop text-lg font-light leading-3">from previous services</p>
            </div>
            {!viewMore && (<div className='px-4 py-8'>
                <AudioTrack 
                    Date={podcasts[0].date}
                    Title={podcasts[0].title}
                    link={podcasts[0].link}
                    key={podcasts[0].date}/>
                <button 
                    onClick={() => {setViewMore(true)}}
                    className=" border-2 border-brightRed font-light rounded-3xl mt-8 mb-4 px-5 py-3 leading-4 tracking-wide">See older messages</button>
            </div>)}
            {viewMore && (<div className="h-80 my-10 md:h-full overflow-y-auto">
                    <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto text-left px-4 ">
                    {podcasts.map((track) => (
                        <AudioTrack 
                            Date={track.date}
                            Title={track.title}
                            link={track.link}
                            key={track.date}/>
                    ))}
                    </div>
            </div>)}
        </section>
     );
}
 
export default PodcastSect;
