import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Skills() {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML5", image: "src/assets/html.png" },
    { name: "CSS3", image: "src/assets/css-3.png" },
    { name: "React", image: "src/assets/react.png" },
    { name: "JavaScript", image: "src/assets/js.png" },
    { name: "Redux", image: "src/assets/redux.png" },
    { name: "Tailwind CSS", image: "src/assets/tailwind.png" },
    { name: "Bootstrap", image: "src/assets/bootstrap.png" },
    { name: "SASS", image: "src/assets/sass.png" },
    { name: "C Language", image: "src/assets/c.png" },
    { name: "C++", image: "src/assets/c++.png" },
    { name: "Photoshop", image: "src/assets/photoshop.png" },
    { name: "GitHub", image: "src/assets/github.png" }
  ];

  return (
    <div ref={skillsRef} className='section2 h-auto flex justify-center py-20'>
      <div className='w-11/12 md:w-3/4 flex flex-col items-center'>
        <motion.h1 
          className='text-4xl lg:text-6xl font-black mb-12 text-orange-500'
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h1>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className='flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-xl hover:text-purple-700'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img className='h-24 transition-all duration-300' src={skill.image} alt={skill.name} />
              <p className='text-lg font-medium mt-2'>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
