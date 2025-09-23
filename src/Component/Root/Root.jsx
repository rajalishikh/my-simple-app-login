import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="min-h-svh relative">
           
           <div className="mt-0">
                <Navbar></Navbar>

            </div>
            
            <Outlet></Outlet>
            
            <div className="bottom-0 absolute w-full">
                <Footer></Footer>

            </div>
            
            
            
        </div>
    );
};

export default Root;