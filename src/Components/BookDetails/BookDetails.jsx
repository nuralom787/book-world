import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SaveReadBooksInLS, SaveWishlistInLS } from "../Utility/Localstorage";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});


    const { bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing } = book;

    useEffect(() => {
        fetch("../../books.json")
            .then(res => res.json())
            .then(data => {
                const idBook = data.find(book => book.bookId === parseInt(id));
                setBook(idBook)
            })
    }, []);


    const handleBooksSave = (props) => {
        if (props === "read") {
            SaveReadBooksInLS(parseInt(id), bookName);
        } else {
            SaveWishlistInLS(parseInt(id), bookName);
        }
    }



    return (
        <div className="my-8 lg:my-28">
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="flex-1 bg-gray-200 px-8 py-2 md:p-16 rounded-2xl">
                    <img className="object-contain h-[30rem] w-[35rem]" src={image} alt={book.bookName} />
                </div>
                <div className="space-y-6 flex-1">
                    <h1 className="font-bold text-4xl text-[#131313]">{bookName}</h1>
                    <p className="font-medium text-xl text-[#131313CC]">By: {author}</p>
                    <hr />
                    <p className="font-medium text-xl text-[#131313CC]">{category}</p>
                    <hr />
                    <p className="font-normal text-base text-[#131313B3]"><span className="font-bold text-base text-[#131313]">Review: </span>{review}</p>
                    <div className="w-max flex flex-col lg:flex-row items-start lg:items-center gap-6">
                        <span className="font-bold text-base text-[#131313]">Tags: </span>
                        {
                            tags?.map(tag => <span
                                key={tag}
                                className="font-medium text-base text-[#23BE0A] px-5 py-2 rounded-full bg-[#23BE0A0D]"
                            >#{tag}</span>)
                        }
                    </div>
                    <hr />
                    <div className="flex items-center gap-10">
                        <div className="font-normal text-base text-[#131313B3]">
                            <ul className="space-y-3">
                                <li>Number Of Pages: </li>
                                <li>Publisher: </li>
                                <li>Year Of Publishing: </li>
                                <li>Rating:</li>
                            </ul>
                        </div>
                        <div className="font-semibold text-base text-[#131313]">
                            <ul className="space-y-3">
                                <li>{totalPages}</li>
                                <li>{publisher}</li>
                                <li>{yearOfPublishing}</li>
                                <li>{rating}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-x-8">
                        <button onClick={() => handleBooksSave("read")} className="border border-[#131313] font-semibold text-lg text-[#131313] px-6 py-2 rounded-lg">Read</button>
                        <button onClick={() => handleBooksSave("wishlist")} className="border border-[#50B1C9] bg-[#50B1C9] font-semibold text-lg text-white px-6 py-2 rounded-lg">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;