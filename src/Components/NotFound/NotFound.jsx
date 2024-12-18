import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="text-center h-screen flex flex-col justify-center items-center space-y-6">
            <Helmet>
                <title>Page Not Found!!</title>
            </Helmet>
            <h1 className="text-9xl text-red-700 font-extrabold">!! 404 !!</h1>
            <p className="font-semibold text-5xl text-gray-600">Page Not Found!!</p>
            <Link to={'/'} className="block w-fit mx-auto font-bold text-xl text-white bg-[#23BE0A] px-8 py-3 rounded-lg hover:text-[#131313] hover:bg-white border border-[#23BE0A] duration-150">Back To Home</Link>
        </div>
    );
};

export default NotFound;