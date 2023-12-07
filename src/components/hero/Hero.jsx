import React from 'react';
import {motion} from "framer-motion"
import './hero.scss';

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


const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
}

export default function Hero() {
  return (
    <div className="hero">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h3 variants={textVariants}>DAVID OYETUNDE</motion.h3>
            <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
            <motion.div className="buttons">
                <motion.button variants={textVariants}>See The Latest Work</motion.button>
                <motion.button variants={textVariants} className="btn">Contact Me</motion.button>
            </motion.div>
        </motion.div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
          Writer Content Creator Influencer 
        </motion.div>
        <motion.div className="imageContainer">
            <img src="/khaid.PNG" alt="wall pics" />
        </motion.div>
    </div>
  )
}
