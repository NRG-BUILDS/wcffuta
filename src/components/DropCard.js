const DropCard = ({topic, img, content, id}) => {
    const handleClick = (e) => {
        console.log(e)
        if (e.currentTarget.nextSibling.classList.contains('active')) {
            e.currentTarget.nextSibling.classList.remove('active')
        } else {
            e.currentTarget.nextSibling.classList.add('active')
        }
    }

    return ( 
        <section className="overflow-hidden py-5 px-4" id={id}>
            <div className=''>
                <div className='pl-4 grid grid-cols-2 items-center bg-black duration-100 hover:bg-deepRed text-white -skew-y-6 cursor-pointer' onClick={(e) => {handleClick(e)}}>
                    <h2 className="">{topic}</h2>
                    <div className='relative bg-gradient-to-l from-current to-black'>
                        <img src={require(`../assets/images/${img}`)} alt=""/>
                    </div>
                    
                </div>
                <div className='Card overflow-y-auto mt-2 px-10 leading-loose text-center hover:shadow-xl'>
                    {content}
                </div>
            </div>
            
        </section>
     );
}
 
export default DropCard;