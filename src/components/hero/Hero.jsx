import React from 'react';
import {motion} from "framer-motion"
import './hero.scss';
import Contact from '../contact/Contact';
import { ReactDOM } from 'react';


const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,

        }
    }
}

 function contactMe() {
    return (
        <div>
            <Contact/>
            {console.log("i am active!!")}
        </div>
   
    )
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "20%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
        }
    }
}

const pictureVariants = {
    initial: {
        x: 0,
        y: 0
    },
    animate: {
        x: "5%",
        y: "5%",
       
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1.4,
        }
    }
}


export default function Hero() {
  return (
    <div className="hero">
        <div className="hero-flex">
            <div> 
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">  
                <motion.h3 variants={textVariants}>DAVID OYETUNDE</motion.h3>
                <motion.h1 variants={textVariants}>SOFTWARE DEVELOPER</motion.h1>
                </motion.div>
            </div>
            <div>        
                <motion.div className="buttons">
                    <motion.button variants={textVariants}>See The Latest Work</motion.button>
                    <motion.button variants={textVariants} className="btn" onClick={contactMe} >Contact Me</motion.button>
                </motion.div>
            </div>
          
            <div>
                <motion.button className="resume-button">View Resume </motion.button>
            </div>
      
        

        </div>
    </div>
  )
}


//<motion.div className="imageContainer" variants={pictureVariants} initial="initial" animate="animate">
//<img src="/dav.JPG" alt="wall pics" />
//</motion.div>
//</div>


//<div>   
//<motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
//   <h3> Writer Content Creator Influencer </h3>
//</motion.div>
//</div>
