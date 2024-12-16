import { Link, NavLink } from "react-router";
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-0 py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={`/`}>Home</NavLink>
                            <NavLink to={`/listed-books`}>Listed Book</NavLink>
                            <NavLink to={`/pageToRead`}>Pages To Read</NavLink>
                        </ul>
                    </div>
                    <Link to={"/"} className="text-3xl font-bold text-[#131313] p-0 m-0">Book World</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                        <NavLink to={`/`}>Home</NavLink>
                        <NavLink to={`/listed-books`}>Listed Book</NavLink>
                        <NavLink to={`/pageToRead`}>Pages To Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <button className="font-semibold text-lg text-white bg-[#23BE0A] px-6 py-2 rounded-md">Sign In</button>
                    <button className="font-semibold text-lg text-white bg-[#59C6D2] px-6 py-2 rounded-md">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;