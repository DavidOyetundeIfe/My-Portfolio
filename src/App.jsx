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
             <section id="Services">   
                <Services/>
                </section>
             <section>Services</section>
             <section id="Portfolio"><Parallax type="portfolio"/></section>
             <section>Portfolio1</section>
             <section>Portfolio2</section>
             <section id="Contact"><Contact/></section>
             <section id="About"><About/></section>
    
   {/**
    <Test/>
    <Test/>
 */}
          </div>
          

    )
}





