import React from "react";
import './navbar.scss';
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";


const Navbar = () => {
    return <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity: 0, scale:0.5}} animate={{opacity: 1, scale:1}} transition={{duration:0.5}}>DAVOYEIFE</motion.span>
            <a href="#" ><img src="./facebook.PNG" alt="facebook link"/></a>
            <a href="#" ><img src="./twitter.PNG" alt="twitter link"/></a>
            <a href="#" ><img src="./youtube.PNG" alt="youtube link"/></a>
            <a href="#" ><img src="./watsapp.PNG" alt="watsapp link"/></a>
        </div>
        </div>
}

export default Navbar;