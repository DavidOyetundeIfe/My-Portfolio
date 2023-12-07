import React from "react"
import './App.scss'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Test from "./components/Test";

export default function Card() {
    /*
    <div className='App'>
    <Infor/>
    <About/>
    <Interest/>
    <Footer/>
</div>
*/
    return(
        <div>         
             <section id="HomePage">
                <Navbar/>
                <Hero/>
                </section>
             <section id="Services"><Parallax type="services"/></section>
             <section>Services</section>
             <section id="Portfolio"><Parallax type="portfolio"/></section>
             <section>Portfolio1</section>
             <section>Portfolio2</section>
             <section id="Contact"><Parallax type="contact"/></section>
    
   {/**
    <Test/>
    <Test/>
 */}
          </div>
          

    )
}





