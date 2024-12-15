import banner from '../../assets/images/banner.svg';



const Banner = () => {
    return (
        <div className="bg-gray-300 rounded-lg flex justify-between items-center px-16 py-20">
            <div className='space-y-10 flex-1'>
                <h1 className="font-bold text-6xl text-[#131313]">Books to freshen up your bookshelf</h1>
                <button className="bg-[#23BE0A] font-bold text-xl text-white px-8 py-3 rounded-md">View The List</button>
            </div>
            <div className='flex-1'>
                <img className='mx-auto' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;