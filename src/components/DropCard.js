const DropCard = ({topic, img, content, id}) => {
    const handleClick = (e) => {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active')
        } else {
            e.currentTarget.classList.add('active')
        }
    }

    return ( 
        <section className="overflow-hidden py-5 px-4" id={id}>
            <div className='Card hover:shadow-xl'  onClick={(e) => {handleClick(e)}}>
                <div className='pl-4 grid grid-cols-2 items-center bg-black duration-100 hover:bg-deepRed text-white -skew-y-6'>
                    <h2 className="">{topic}</h2>
                    <div className='relative bg-gradient-to-l from-current to-black'>
                        <img src={require(`../assets/images/${img}`)} alt="" className='h-full'/>
                    </div>
                    
                </div>
                <div className=' h-96 mt-24 px-20 leading-loose text-center overflow-y-auto'>
                    {content}
                </div>
            </div>
            
        </section>
     );
}
 
export default DropCard;