const AnnouncSect = () => {
    const showFullSect = (e) => {
        let section = document.querySelector('.announceSect')
        section.classList.remove('h-96')
        section.classList.add('h-full')
        e.target.style.display = 'none'

    }

    return ( 
        <section className=" bg-white pt-8 ">
            <div className="max-w-2xl px-4 pb-8">
                <h2 className="revealSide uppercase text-2xl">special</h2>
                <h2 className="revealSide text-brightRed uppercase text-4xl">Annoucements</h2>
            </div>
            <div className="announceSect grid md:grid-cols-3 gap-5 max-w-4xl mx-auto px-4 justify-between h-96 relative overflow-clip duration-100 pb-10">
                <div className="transiton duration-100 border-2 hover:border-brightRed hover:shadow-red-100 hover:shadow-lg rounded-md px-4 py-8">
                    <h2 className=" font-semibold uppercase text-xl">Heading of announcement</h2>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting </p>
                </div>
                <div 
                    className="md:hidden absolute left-0 bottom-0 text-center w-full py-8"
                    onClick={(e) => {showFullSect(e)}}
                    >
                    <button 
                        className="bg-brightRed text-white shadow-xl rounded-3xl px-6 py-2"
                        >
                    See More
                    </button>
                </div>
                
                <div className="transiton duration-100 border-2 hover:border-brightRed hover:shadow-lg rounded-md px-4 py-8">
                    <h2 className=" font-semibold uppercase text-xl">Heading of announcement</h2>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting </p>
                </div>
                <div className="transiton duration-100 border-2 hover:border-brightRed hover:shadow-lg rounded-md px-4 py-8">
                    <h2 className=" font-semibold uppercase text-xl">Heading of announcement</h2>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting </p>
                </div>
            </div>
        </section>
     );
}
 
export default AnnouncSect;