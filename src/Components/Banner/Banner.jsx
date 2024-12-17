import { Link } from 'react-router';
import banner from '../../assets/images/banner.svg';



const Banner = () => {
    return (
        <div className="bg-gray-200 rounded-lg md:flex justify-between items-center px-12 md:px-16 py-12 md:py-20">
            <div className='space-y-10 flex-1 text-center md:text-start'>
                <h1 className="font-bold text-3xl md:text-6xl text-[#131313]">Books to freshen up your bookshelf</h1>
                <Link to="/listed-books" className="bg-[#23BE0A] font-bold text-xl text-white px-8 py-3 rounded-md block w-full md:w-fit">View The List</Link>
            </div>
            <div className='flex-1 hidden md:block'>
                <img className='mx-auto' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;