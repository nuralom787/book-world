import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <ToastContainer />
            <div className="px-4">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;