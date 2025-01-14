import React from "react"
import './App.scss'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Test from "./components/Test";
import Contact from "./components/contact/Contact";

export default function Card() {
    /*
    <div className='App'>
    <Infor/>
    <About/>
    <Interest/>
    <Footer/>
</div>  <Parallax type="services"/>
*/
    return(
        <div>         
             <section id="HomePage">
                <Navbar/>
                <Hero/>
                </section>
             <section id="Projects"><Services/></section>
             <section id="Resume"><About/></section>
             <section id="Connect"><Contact/></section>
    
   {/**
    <Test/>
    <Test/>
 */}
          </div>
          

    )
}





