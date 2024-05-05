import React from 'react';
import '../sidebar.scss';
import {motion} from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChild:0.1            
        }
    },
    closed: {
        transition: {
            staggerChild:0.05,
            staggerDirection: -1            
        }
    }
}
const itemVariants = {
    open: {
        y: 0,
        opacity:1,
    },
    closed: {
        y: 50,
        opacity:0,
    }
}


export const Links = () => {
const items = ["HomePage", "Services","Resume"];

  return ( 
    <motion.div className="links" variants={variants}>
        {items.map((item) => (<motion.a href={`#${item}`} key={item} variants={itemVariants} whiteHover={{scale:1.1}} whileTap={{scale:0.95}}>
            {item}
        </motion.a>))}
    </motion.div>
  );
}


