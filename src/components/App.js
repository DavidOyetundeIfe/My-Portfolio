import './App.css';
import React from "react"
import Infor from "./Infor"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"

export default function Card() {
    return(
      
            <div className='App'>
                <Infor/>
                <About/>
                <Interest/>
                <Footer/>
            </div> 
    )
}





