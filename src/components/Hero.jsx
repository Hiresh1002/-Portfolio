import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const roles = [
  "Graphics Designer",
  // "UI/UX Designer"
];

export default function Hero(){

 const [index,setIndex] = useState(0);

 useEffect(()=>{
   const t = setInterval(()=>{
     setIndex(i => (i+1)%roles.length);
   },2200);
   return ()=>clearInterval(t);
 },[]);

 return(
  <section className="hero-premium" id="home">

   {/* LEFT */}
   <motion.div
     className="hero-left"
     initial={{opacity:0,x:-60}}
     animate={{opacity:1,x:0}}
     transition={{duration:1}}
   >

    <h2 className="hello">Hello, I’m</h2>

    <h1 className="hero-name">
      Hiresh Sahu
    </h1>

    {/* Sliding Roles */}
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        className="hero-role2"
        initial={{y:20,opacity:0}}
        animate={{y:0,opacity:1}}
        exit={{y:-20,opacity:0}}
        transition={{.4:1}}
      >
        {roles[index]}
      </motion.div>
    </AnimatePresence>

  <p className="hero-sub">
A passionate Graphic Designer with expertise in visual storytelling, branding, and digital creatives. Dedicated to delivering innovative designs that enhance brand identity and create meaningful user experiences </p>

   
 
<div className="hero-socials">
  

  <a
    href="https://www.linkedin.com/in/hiresh-sahu-461926269"
    target="_blank"
    rel="noreferrer"
    className="social linkedin"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.instagram.com/design_with_engineer/"
    target="_blank"
    rel="noreferrer"
    className="social instagram"
    title="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://Harishind198@gmail.com"
    className="social mail"
    title="Email"
  >
    <FaEnvelope />
  </a>
</div>

   </motion.div>

   {/* RIGHT IMAGE */}
   <motion.div
     className="hero-right"
     animate={{y:[0,-20,0]}}
     transition={{repeat:Infinity,duration:5}}
   >
   </motion.div>

  </section>
 )
}
