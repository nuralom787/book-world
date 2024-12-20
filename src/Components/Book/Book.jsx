import { MdOutlineStarBorder } from "react-icons/md";
import { useNavigate } from "react-router";



const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;
    const navigate = useNavigate();


    // Show Book Details Function.
    const handleBookDetails = (id, title) => {
        navigate(`/details/${title}/${id}`);
    };



    return (
        <div>
            <div onClick={() => handleBookDetails(bookId, bookName)} className="card border cursor-pointer">
                <figure className="m-6 p-10 rounded-xl bg-gray-200">
                    <img
                        src={image}
                        alt={bookName}
                        className="rounded-xl" />
                </figure>
                <div className="card-body p-6 space-y-4">
                    <div className="w-max flex flex-col xl:flex-row gap-4">
                        {
                            tags.slice(0, 2).map(tag => <span
                                key={tag}
                                className="font-medium text-base text-[#23BE0A] px-5 py-2 rounded-full bg-[#23BE0A0D]"
                            >{tag}</span>)
                        }
                    </div>
                    <div className="pb-6 border-b border-dashed border-gray-400">
                        <h1 className="font-bold text-2xl text-[#131313]">{bookName}</h1>
                        <p className="font-medium text-base text-[#131313CC] mt-2">By: {author}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-base text-[#131313CC]">
                            {category}
                        </span>
                        <span className="flex items-center gap-1 font-medium text-base text-[#131313CC]">
                            {rating}
                            <MdOutlineStarBorder className="font-medium text-xl text-[#131313CC]" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;