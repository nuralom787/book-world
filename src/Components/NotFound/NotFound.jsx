import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="text-center h-screen items-center">
            <h1 className="text-6xl text-red-700 font-extrabold my-auto">404</h1>
            <p>Page Not Found!!</p>
            <Link to={'/'}>Back To Home</Link>
        </div>
    );
};

export default NotFound;