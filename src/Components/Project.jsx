import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Project() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  const projects = [
    { 
      title: "React Admin Panel", 
      image: "src/assets/adminpanel.png",
      description: "The React Admin Panel is a powerful, user-friendly dashboard designed for seamless management. It features charts, real-time analytics, role-based authentication, and an intuitive UI. Built with React, Tailwind CSS, and modern libraries, it ensures smooth navigation and efficient data handling, making admin tasks effortless.",
      demoLink: "https://hirenadminpanel.netlify.app/",
      codeLink: "https://github.com/hiren3107/NXT_WAVE_ADMINPANEL"
    },
    { 
      title: "Boat Clone Website", 
      image: "src/assets/boat clone.png",
      description: "The Boat Clone Website is a responsive e-commerce webpage inspired by Boat Lifestyle, built with HTML, CSS, JavaScript, and Tailwind CSS. It features a sleek design, interactive product showcase, smooth scrolling, and hover animations for an engaging user experience.",
      demoLink: "https://botclone.netlify.app/",
      codeLink: "https://github.com/hiren3107/Boat_Clone"
    },
    { 
      title: "Flayers Clone Website", 
      image: "src/assets/flayers.png",
      description: "The Flayers Clone Website is a sleek, e-commerce platform inspired by modern digital storefronts. It offers a seamless shopping experience with intuitive navigation, and dynamic product displays. Built using HTML, CSS, Tailwind CSS, and JavaScript, it ensures fast loading speeds, smooth animations, and an engaging user experience, making online shopping effortless and enjoyable.",
      demoLink: "https://elaborate-panda-f38d9c.netlify.app/",
      codeLink: "https://github.com/hiren3107/Java-Script/tree/main/Website/Flyers"
    },
  ];

  return (
    <div ref={sectionRef} className="project relative py-20 flex flex-col items-center">
      
      {/* Fixed Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-2 bg-orange-500 w-full z-50"
        style={{ width: progressBarWidth }}
      />

      {/* Animated Title */}
      <motion.h1
        className="text-4xl lg:text-6xl font-extrabold text-orange-500 mb-12"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        Projects
      </motion.h1>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="w-11/12 md:w-3/4 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image with Hover Effects */}
          <motion.div 
            className="flex justify-center"
            whileHover={{ scale: 1.05, rotate: 2 }} // Scale and rotate effect
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <img 
              className="w-full xl:h-[500px] rounded-lg shadow-lg" 
              src={project.image} 
              alt={project.title} 
            />
          </motion.div>

          {/* Project Details */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
            <motion.p
              className="text-3xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {project.title}
            </motion.p>
            <p className="text-lg mt-4 mb-6 text-gray-700">{project.description}</p>

            {/* Buttons */}
            <div className="flex gap-4">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Live
                </motion.button>
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                 View Code
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      ))}

      {/* "More" Button */}
      <motion.button
        className="bg-orange-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition mt-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/project")}
      >
        More
      </motion.button>
      
    </div>
  );
}

export default Project;
