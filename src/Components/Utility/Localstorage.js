import { toast } from "react-toastify";

const getReadBooksFromLS = () => {
    const booksData = localStorage.getItem("readBooks");
    if (booksData) {
        return JSON.parse(booksData);
    } else {
        return [];
    }
};


const getWishlistFromLS = () => {
    const booksData = localStorage.getItem("wishlist");
    if (booksData) {
        return JSON.parse(booksData);
    } else {
        return [];
    }
};


const SaveReadBooksInLS = (id, title) => {
    const storedReadBooksInLS = getReadBooksFromLS();
    const exists = storedReadBooksInLS.find(bookId => bookId === id);
    if (!exists) {
        storedReadBooksInLS.push(id);
        localStorage.setItem("readBooks", JSON.stringify(storedReadBooksInLS));
        toast.success(`Book "${title}" Added To Read List`, { autoClose: 2000 });
    } else {
        toast.warning("You Have Already Read This Book!!")
    }
};



const SaveWishlistInLS = (id, title) => {
    const storedReadBooksInLS = getReadBooksFromLS();
    const storedWishlistInLS = getWishlistFromLS();
    const readBooksExists = storedReadBooksInLS.find(bookId => bookId === id);
    const wishlistExists = storedWishlistInLS.find(bookId => bookId === id);
    if (!readBooksExists && !wishlistExists) {
        storedWishlistInLS.push(id);
        localStorage.setItem("wishlist", JSON.stringify(storedWishlistInLS));
        toast.success(`Book "${title}" Add In Wishlist`, { autoClose: 2000 });
    } else if (readBooksExists) {
        toast.warning("You Have Already Read This Book!!")
    } else if (wishlistExists) {
        toast.warning("You Have Already Wishlist This Book!!")
    }
};



export { getReadBooksFromLS, getWishlistFromLS, SaveReadBooksInLS, SaveWishlistInLS };