import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineFindInPage } from "react-icons/md";
import './ListedBook.css';
import { NavLink } from "react-router";
import ReadBooks from "../ListedBookTabs/ReadBooks";
import WishlistBooks from "../ListedBookTabs/WishlistBooks";
import { getReadBooksFromLS, getWishlistFromLS } from "../Utility/Localstorage";


const ListedBook = () => {
    const [tab, setTab] = useState("read-books");
    const [listedBooks, setListedBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);


    useEffect(() => {
        fetch("../../books.json")
            .then(res => res.json())
            .then(data => setListedBooks(data))
    }, []);


    useEffect(() => {
        if (tab === "read-books" && listedBooks.length) {
            const readBookId = getReadBooksFromLS();
            const readBookData = [];
            for (const id of readBookId) {
                const readBooks = listedBooks.find(book => book.bookId === id);
                readBookData.push(readBooks);
            }
            setReadBooks(readBookData);
        } else if (tab === "wishlist" && listedBooks.length) {
            const wishlistBookId = getWishlistFromLS();
            const wishlistBookData = [];
            for (const id of wishlistBookId) {
                const wishlistBooks = listedBooks.find(book => book.bookId === id);
                wishlistBookData.push(wishlistBooks);
            }
            setWishlistBooks(wishlistBookData);
        }
    }, [tab, listedBooks]);



    return (
        <div>
            <div className="bg-gray-300 text-center p-16 rounded-2xl my-16">
                <h1 className="font-bold text-3xl text-[#131313]">Listed Books</h1>
            </div>
            <div className="text-center">
                <div className="dropdown dropdown-end bg-[#23BE0A] text-white rounded-md">
                    <div tabIndex={0} role="button" className="m-1 bg-[#23BE0A] px-5 py-2 flex items-center gap-2">
                        Sort By <IoIosArrowDown className="text-2xl" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content bg-[#23BE0A] rounded-md z-[1] w-52 p-2 shadow">
                        <li className="my-4 mx-2"><button>Rating</button></li>
                        <li className="my-4 mx-2"><button>Number Of Pages</button></li>
                        <li className="my-4 mx-2"><button>Publishing Year</button></li>
                    </ul>
                </div>
            </div>
            <div className="my-16">
                <div className="border-b border-gray-400 flex justify-between items-center">
                    <button onClick={() => setTab("read-books")} className={tab == "read-books" ? "bg-white font-normal text-lg text-[#131313CC] px-6 py-3 rounded-ss-md rounded-se-md top-[1px] relative border border-b-0 border-gray-500 grow" : "grow bg-white font-normal text-lg text-[#131313CC] px-6 py-3 rounded-ss-md rounded-se-md"}>Read Books</button>
                    <button onClick={() => setTab("wishlist")} className={tab == "wishlist" ? "bg-white font-normal text-lg text-[#131313CC] px-6 py-3 rounded-ss-md rounded-se-md top-[1px] relative border border-b-0 border-gray-500 grow" : "grow bg-white font-normal text-lg text-[#131313CC] px-6 py-3 rounded-ss-md rounded-se-md"}>Wishlist Books</button>
                </div>
                <div className="space-y-6 mt-6">
                    {tab == "read-books" &&
                        readBooks?.map(book => <ReadBooks
                            key={book.bookId}
                            book={book}
                        ></ReadBooks>)
                    }
                    {tab == "wishlist" &&
                        wishlistBooks?.map(book => <WishlistBooks
                            key={book.bookId}
                            book={book}
                        ></WishlistBooks>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBook;