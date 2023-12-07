import React from "react"
import './App.scss'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
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
             <section id="Services">Parallax</section>
             <section>Services</section>
             <section id="Portfolio">Parallax</section>
             <section>Portfolio1</section>
             <section>Portfolio2</section>
             <section id="Contact">Contact</section>
    
   {/**
    <Test/>
    <Test/>
 */}
          </div>
          

    )
}





