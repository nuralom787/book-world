import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;