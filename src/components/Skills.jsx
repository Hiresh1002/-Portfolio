import { motion } from "framer-motion";

const skills = [
 { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
{ name: "Adobe Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
{ name: "Canva", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
{ name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" },
{ name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" },
{ name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }

];

export default function Skills(){

 return(
  <section className="skills-section" id="skills">

    <motion.h2
      initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      className="skills-title"
    >
      My Skills
    </motion.h2>

    <div className="skills-wall">

      {skills.map((skill,i)=>(
        <motion.div
          key={i}
          className="skill-box"
          initial={{opacity:0,scale:.7}}
          whileInView={{opacity:1,scale:1}}
          transition={{delay:i*0.08}}
          whileHover={{scale:1.12}}
        >

          <img src={skill.icon} alt="" />
          <span>{skill.name}</span>

        </motion.div>
      ))}

    </div>

  </section>
 )
}
