import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="min-h-svh relative">
           
           <div className="mt-0">
                <Navbar></Navbar>

            </div>
            
            <Outlet></Outlet>
            
            
            
            
        </div>
    );
};

export default Root;