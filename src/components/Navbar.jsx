import React from "react";
import './navbar.scss';

const Navbar = () => {
    return <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>DAVOYEIFE</span>
            <a href="#" ><img src="./facebook.PNG" alt="facebook link"/></a>
            <a href="#" ><img src="./twitter.PNG" alt="twitter link"/></a>
            <a href="#" ><img src="./youtube.PNG" alt="youtube link"/></a>
            <a href="#" ><img src="./watsapp.PNG" alt="watsapp link"/></a>
        </div>
        Navbar
        </div>
}

export default Navbar;