import React from "react";
import {motion} from "framer-motion";
//animate={{opacity: 1, scale: 1, x:200}} 
const Test = () => {


    const [open, setOpen] = React.useState(false);

    const variants = {
        visible: (i) => ( {opacity:1, x:100 , transition: {delay: i * 0.1}}),
        hidden: {opacity:0},

    }

    const items = ["item 1", "item 2", "item 3", "item 4"]

    return (
        <div className="course">
         <motion.ul initial="hidden" animate="visible" variants={variants}>{ items.map((item, i) => 
         <motion.li variants={variants} key={item} custom={i}>
            {item}
         </motion.li> )}
            
         </motion.ul>
        </div>
    )
}
export default Test;