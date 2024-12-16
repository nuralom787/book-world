import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineFindInPage } from "react-icons/md";
import { NavLink } from "react-router";


const WishlistBooks = ({ book }) => {
    const { bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;

    return (
        <div>
            <div className="flex items-center gap-10 border border-gray-500 p-8 rounded-xl">
                <div className="p-14 rounded-xl bg-gray-300">
                    <img className="rounded-xl" src={image} alt="" />
                </div>
                <div className="space-y-6 grow">
                    <div className="">
                        <h1 className="font-bold text-2xl text-[#131313]">{bookName}</h1>
                        <p className="font-medium text-base text-[#131313CC] mt-2">By: {author}</p>
                    </div>
                    <div className="w-max">
                        <span className="font-bold text-base text-[#131313] mr-6">Tag</span>
                        {
                            tags.map(tag => <span
                                key={tag}
                                className="font-medium text-base text-[#23BE0A] px-5 py-2 rounded-full bg-[#23BE0A0D] mr-4"
                            >#{tag}</span>)
                        }
                        <span className="font-normal text-base text-[#131313CC]"><SlLocationPin className="inline text-xl" /> Year Of Publishing: {yearOfPublishing}</span>
                    </div>
                    <div className="flex items-center gap-10 border-b border-gray-400 pb-4">
                        <div className="flex items-center gap-3">
                            <HiOutlineUsers className="text-2xl" />
                            <span className="font-normal text-base text-[#13131399]">Publisher: {publisher}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdOutlineFindInPage className="text-2xl" />
                            <span className="font-normal text-base text-[#13131399]">Page: {totalPages}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <p className="font-normal text-base text-[#328EFF] bg-[#328EFF26] px-6 py-3 rounded-full">Category: {category}</p>
                        <p className="font-normal text-base text-[#FFAC33] bg-[#FFAC3326] px-6 py-3 rounded-full">Rating: {rating}</p>
                        <NavLink to={`/details/${bookName}/${bookId}`} className="font-medium text-lg text-white bg-[#23BE0A] px-6 py-3 rounded-full">View Details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistBooks;