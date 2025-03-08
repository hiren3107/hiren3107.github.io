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
      image: "https://media-hosting.imagekit.io//02697fde675c49b0/adminpanel.png?Expires=1836040822&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BYkraPdMaaO8VyG5e~46nz2lt~H7fw6dzj3~RXZL8e3g9MsKhGkCIz~-9hRYxybvFkTTodmbqAG8j6Lr5SCBZWq~T5wA8g28kCG0cx6cZk0A5sRtQOrt8t5ilt7pk02NtWU3ivOIejx9oNz83fM7HhDNmyuO8-E8lQklsdnR5nGi-WX1Xqvrgs4zEAG9ZH9w4smtM7~lujOHEo1bIhKB7VtsnzsE~H81GKYGHSBJkE3gNRntb0~tU9iCT8aBp6ykHFk4S20Vcs~Q7UWOo7lIcOLAqQlO4hVAUzzXNstaThjEVkWaWJKvf68tEIofIhi~YpHhAJ1RWNnhDpmLVnOzGg__",
      description: "The React Admin Panel is a powerful, user-friendly dashboard designed for seamless management. It features charts, real-time analytics, role-based authentication, and an intuitive UI. Built with React, Tailwind CSS, and modern libraries, it ensures smooth navigation and efficient data handling, making admin tasks effortless.",
      demoLink: "https://hirenadminpanel.netlify.app/",
      codeLink: "https://github.com/hiren3107/NXT_WAVE_ADMINPANEL"
    },
    { 
      title: "Boat Clone Website", 
      image: "https://media-hosting.imagekit.io//ca1b3972cf944b1b/boat%20clone.png?Expires=1836040824&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=a0iy0hcvqGKQS5DLwIEpCZEVoI0VBLhClnOkm~68oLxriVUnEvSSYgunkqbL5n4yeYiXEAnuGSoA4dvycUNcAf4owOMtqyOxgSP5pxDz2N9VUd53ViqjAiUqhj-~U6VtN8wpro1Gg-UrzpjZldP2~IV4Z92wIPafxg4-0VTWWvGmw~pvOoR3zyuxe-AATWff69X91VkutHsbHci4DWIY8-07pQOCXh9H1t4UePoS3HRer2aR-vyJyq6znnsMeW4BSYIuitn9olkR5E1ICpPTlReLuu4V2HD75gVEBwzPt6g3kKGaXo5XYSC9xH7y48EqvyIDONcRSPXy7kfooqA0pQ__",
      description: "The Boat Clone Website is a responsive e-commerce webpage inspired by Boat Lifestyle, built with HTML, CSS, JavaScript, and Tailwind CSS. It features a sleek design, interactive product showcase, smooth scrolling, and hover animations for an engaging user experience.",
      demoLink: "https://botclone.netlify.app/",
      codeLink: "https://github.com/hiren3107/Boat_Clone"
    },
    { 
      title: "Flayers Clone Website", 
      image: "https://media-hosting.imagekit.io//b270922ace5843fe/flayers.png?Expires=1836040929&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=onZO9wIXlvpzxtrjhMamjJ3JSlSDoYCnN76OXbMijDt-Yy~HO~7zBVOReMKRWUc6t-cbjZzLMFLgqwVEGV5pWPtr13Nz7EjgqgdyyUuYYV~reSVrD-FrYic37fFG96h5Jyqc2axdr5qKznM~k03bxeVlRbxC9O8C9~W~8CuqUy03y5CVG42eUR7-igW8tUjAgJN2bWoUPxLdxtVX5sqWxcV2FggIgs0m04ppksJmRbGTCLVg9Uejte2YnOts3bKBzESryBydoJE16GAqsEutnqKO2hB2~mztO1S1Z15Fx9h8Wig5ZNLYZQ-5D0sfDeyd9j-JLCY98ADCdTogycDB0A__",
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
