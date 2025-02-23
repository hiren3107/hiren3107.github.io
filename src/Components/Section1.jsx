import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Section1() {
  const sectionRef = useRef(null); // Reference to the section

  const { scrollYProgress } = useScroll({
    target: sectionRef, // Apply scroll tracking only inside this section
    offset: ["start start", "end start"], // Animation starts at section start, ends when leaving
  });

  // Parallax Effects (Now based on section scroll)
  const starsX = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const planetsY = useTransform(scrollYProgress, [0, 1], [0, 450]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const mountainsY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={sectionRef} className="section1 h-[100vh] relative flex flex-col items-center overflow-hidden">
      {/* Background Stars */}
      <motion.div
        className="absolute inset-0 bg-stars bg-cover bg-fixed"
        style={{ x: starsX }}
      ></motion.div>

      {/* Planets */}
      <motion.img
        className="absolute h-[100vh] object-cover"
        src="src/assets/planets.png"
        alt="Planets"
        style={{ y: planetsY }}
      />

      {/* Title */}
      <motion.h1
        className="absolute text-center top-[30%] text-[60px] font-black text-gradient"
        style={{ y: textY, opacity: textOpacity }}
      >
        What Is My Skills?
      </motion.h1>

      {/* Mountains */}
      <motion.img
        className="absolute bottom-0 w-[100%] object-cover"
        src="src/assets/mountains.png"
        alt="Mountains"
        style={{ y: mountainsY }}
      />
    </div>
  );
}

export default Section1;
