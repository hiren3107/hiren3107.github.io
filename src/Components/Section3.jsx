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
        src="https://media-hosting.imagekit.io//58da1461efbb4749/sun.png?Expires=1836040490&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tq91vHhhoSQz7Y-AQKzcY6UBlX7~1XTjj0ZenvVHZUyOQQmStYYBxrDfR8Nr9VTkactFKL0Di5cObqrZ4HU8y2iWS1bfDULzmkN4GdlZSBZAIf-RfR-TFgPu9txT9Ndm4BogsQaA~5hYpLdn8kQpcUsl1z86ePm2GPUHx7Lbfb5XMyBQiw5UsTE73IUhCHAYaYoRHqDWjbdOZHbi~5gMARfTE2WcoZ9~GCR0vw9TI-nuy-Nji4QYWXNYw6UMZR6q1DiH5ME26RxB1gAyMybLPAprjpaFyqbHrIViFxDqvkXvDjXJC~AxsaWpKwX2QyWNIx4XpZcf3fg2~x3UzvsTqQ__"
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
        src="https://media-hosting.imagekit.io//19e254aa8d6c4f6a/mountains.png?Expires=1836040601&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XGMfYTeGqNKXbYzjrSNAYg5DaXCS8Y5PcY7NTRDJ6qCCWIW77AUxFT6SlgV36Ngh82HVGnmHshEyKJLVf4E5zRhTYOBLFMRvfyHnKn2Rc6bhD~lJxWFNTK34GF-RuBujOqaep0ZkK9OBOVpZQb67L90rbrPvmpkiZWZj2aAsIG4mkrVptlLkY6DoI613PoNWdIg5GpffpbCpgdwwHXGoyFxLKdDjB7FtYkzX0W6I9eEvB7Qvaysj88--qOmxE38MAjXg~xbS6YLpuCkqRpdlHu8CG2GSJ8xtYLuRjmkiVz8wo14yrXqp5oFd2KitvR4outr6ytAuxTLsq9uu9fB6Xg__"
        alt="Mountains"
      />
    </div>
  );
}

export default Section3;
