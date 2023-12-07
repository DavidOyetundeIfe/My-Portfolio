import React from 'react';
import "./parallax.scss";
import {motion} from "framer-motion";

export default function Parallax({type}) {
  return (
    <motion.div className="parallax" style={{
        background:type==="services" 
    ? "linear-gradient(180deg, #111132, #0c0c1d)"
     :  "linear-gradient(180deg, #111132, #0505064)"}}>

        <motion.h1>{type=== "services" ? "What We Do" : "What We Did?"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets"></motion.div>
        <motion.div className="stars"></motion.div>
    </motion.div>
  )
}
