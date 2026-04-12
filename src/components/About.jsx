import { motion } from "framer-motion";

export default function About(){

 return(
  <section className="section about-premium" id="about">

   <motion.div
     className="about-top"
     initial={{opacity:0,y:40}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:.8}}
   >
<motion.img
  className="about-avatar"
  whileHover={{
    rotateX: 10,
    rotateY: -10,
    scale: 1.05
  }}
  transition={{ type: "spring", stiffness: 200, damping: 12 }}
/>
<img src="profile.png" alt="" className="Profile" />

   <div className="about-box">
     <h1 className="about-name gradient">Hiresh sahu</h1>
    <p className="about-role">Graphics Designer</p>

    <p className="about-desc">
      A creates meaningful designs that bring ideas to life through visuals.
    </p>

    <div className="about-cards">

      <div className="about-mini glass-hover">
        <h3>2 + Years </h3>
        <span>Experience</span>
      </div>

      <div className="about-mini glass-hover">
        <h3>Creativity</h3>
        <span>Speciality</span>
      </div>

      <div className="about-mini glass-hover">
        <h3>UI/ UX</h3>
        <span>Focus</span>
      </div>

    </div>
   </div>

   </motion.div>

   {/* ABOUT TEXT */}

   <motion.div
     className="about-bottom"
     initial={{opacity:0}}
     whileInView={{opacity:1}}
   >

    <div className="about-box2">
      <h2>About Me</h2>

    <p>
     I am a creative Graphic Designer passionate about crafting visually engaging designs, with skills in branding, layout design, typography, and modern design tools.
    </p>

    <p>
I have worked with 100+ brands, delivering impactful visual designs and creative solutions across multiple projects.    </p>
    </div>

   </motion.div>
   {/* SLIDING SKILLS INSIDE ABOUT */}

<div className="skills-slider">
  <div className="skills-track">
   <span>Adobe Photoshop</span>
<span>Canva</span>
<span>Figma</span>
<span>Adobe Illustrator</span>
<span>After Effects</span>
<span>Premiere Pro</span>


    {/* duplicate for infinite loop */}
      <span>Adobe Photoshop</span>
<span>Canva</span>
<span>Figma</span>
<span>Adobe Illustrator</span>
<span>After Effects</span>
<span>Premiere Pro</span>

  </div>
</div>


  </section>
 )
}
