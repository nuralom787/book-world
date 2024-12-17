import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineFindInPage } from "react-icons/md";
import { NavLink } from "react-router";



const ReadBooks = ({ book }) => {
    const { bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;


    return (
        <div>
            <div className="flex flex-col md:flex-row items-start lg:items-center gap-10 border px-4 py-6 md:p-8 rounded-xl">
                <div className="rounded-xl bg-gray-200 p-8 md:p-24 lg:p-8 max-w-80 mx-auto">
                    <img className="rounded-xl object-contain h-48 w-96" src={image} alt="" />
                </div>
                <div className="space-y-6 w-full">
                    <div className="">
                        <h1 className="font-bold text-2xl text-[#131313]">{bookName}</h1>
                        <p className="font-medium text-base text-[#131313CC] mt-2">By: {author}</p>
                    </div>
                    <div className="w-max flex flex-col md:hidden lg:block lg:flex-row items-start md:items-center gap-4">
                        <span className="font-bold text-base text-[#131313]">Tag</span>
                        {
                            tags.map(tag => <span
                                key={tag}
                                className="font-medium text-base text-[#23BE0A] px-5 py-2 rounded-full bg-[#23BE0A0D]"
                            >#{tag}</span>)
                        }
                        <span className="font-normal text-base text-[#131313CC]"><SlLocationPin className="inline text-xl" /> Year Of Publishing: {yearOfPublishing}</span>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-10 border-b border-gray-400 pb-4">
                        <div className="flex items-center gap-3">
                            <HiOutlineUsers className="text-2xl" />
                            <span className="font-normal text-base text-[#13131399]">Publisher: {publisher}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdOutlineFindInPage className="text-2xl" />
                            <span className="font-normal text-base text-[#13131399]">Page: {totalPages}</span>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        <p className="font-normal text-base text-[#328EFF] bg-[#328EFF26] px-6 py-3 rounded-full">Category: {category}</p>
                        <p className="font-normal text-base text-[#FFAC33] bg-[#FFAC3326] px-6 py-3 rounded-full">Rating: {rating}</p>
                        <NavLink to={`/details/${bookName}/${bookId}`} className="font-medium text-lg text-white bg-[#23BE0A] px-6 py-3 rounded-full">View Details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBooks;