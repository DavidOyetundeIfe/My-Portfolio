import React from "react";
import './navbar.scss';
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";


const Navbar = () => {
    return <div className="navbar">
            <div className="side-bar"><Sidebar/></div>
            <div className="title">
            <motion.span initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} transition={{duration:0.5}}>DAVOYEIFE</motion.span>
            </div>
            <div className="links">
                <div><a href="#" ><img src="./facebook.PNG" alt="facebook link"/></a></div>
                <div><a href="#" ><img src="./twitter.PNG" alt="twitter link"/></a></div>
                <div><a href="#" ><img src="./youtube.PNG" alt="youtube link"/></a></div>
                <div><a href="#" ><img src="./watsapp.PNG" alt="watsapp link"/></a></div>            
            </div>
        </div>
}

export default Navbar;