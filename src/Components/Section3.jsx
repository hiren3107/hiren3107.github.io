import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Section3() {
  const sectionRef = useRef(null); // Track Section3's scroll

  const { scrollYProgress } = useScroll({
    target: sectionRef, // Apply scrolling effect only within this section
    offset: ["start start", "end start"], // Start at section entry, end when it leaves
  });

  // Stars Move Right on Scroll
  const starsX = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // H1 Moves Down Slowly on Scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, 500]); // Moves down

  // Sun Moves Down Slightly on Scroll
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 450]); // Moves down

  return (
    <div ref={sectionRef} className="section3 h-[100vh] relative flex flex-col items-center overflow-hidden">
      {/* Background Stars */}
      <motion.div
        className="absolute inset-0 bg-stars bg-cover bg-fixed animate-slideStars"
        style={{ x: starsX }} // Stars move right
      ></motion.div>

      {/* Sun (Moves Down Slightly) */}
      <motion.img
        className="absolute top-0 h-[100vh] object-cover"
        src="src/assets/sun.png"
        alt="Sun"
        style={{ y: sunY }}
      />

      {/* H1 (Slides Down Slowly) */}
      <motion.h1
        className="absolute text-center top-[40%] text-[66px] sm:text-[60px] font-black"
        style={{ y: textY }} // Moves down
      >
        What We Did?
      </motion.h1>

      {/* Mountains */}
      <motion.img
        className="h-auto w-full absolute bottom-0"
        src="src/assets/mountains.png"
        alt="Mountains"
      />
    </div>
  );
}

export default Section3;
