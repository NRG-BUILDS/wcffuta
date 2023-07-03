const AnnouncSect = () => {
    const showFullSect = (e) => {
        let section = document.querySelector('.announceSect')
        section.classList.remove('h-96')
        section.classList.add('h-full')
        e.target.style.display = 'none'

    }

    return ( 
        <section className="bg-white pb-44 z-10" id="announcements">
            <div className="max-w-2xl pb-6">
                <h2 className="revealTop uppercase text-xl leading-3">special</h2>
                <h2 className="revealTop text-brightRed uppercase text-2xl">Annoucements</h2>
            </div>
            <div className="announceSect grid gap-5 mx-auto justify-between relative  pb-10">
                <div className="transiton duration-100 border-2 hover:border-brightRed hover:shadow-lg hover:shadow-red-100 rounded-md px-4 py-8">
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
                
                <div className="transiton duration-100 border-2 hover:border-brightRed hover:shadow-lg hover:shadow-red-100 rounded-md px-4 py-8">
                    <h2 className=" font-semibold uppercase text-xl">Heading of announcement</h2>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting </p>
                </div>
                <div className="transiton duration-100 border-2 hover:border-brightRed hover:shadow-lg hover:shadow-red-100 rounded-md px-4 py-8">
                    <h2 className=" font-semibold uppercase text-xl">Heading of announcement</h2>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting </p>
                </div>
            </div>
        </section>
     );
}
 
export default AnnouncSect;