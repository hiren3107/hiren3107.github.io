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
        src="https://media-hosting.imagekit.io//0627d08f1dad4188/planets.png?Expires=1836040492&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UxdC~Spo7n1xsFhmQJP3Hneg4~PdeBVlshPIyVTcENeUeYnXDYX9zNM3ffWJCfbM5xXAyKETCnXyWgkHh1dgkXS8NOAeeGKTxw8ibStT0wVFVo9QWxZzjcAZJVm6uC4yF635qUaL4aNqRHy3xCPl6XhgENznfRIOjZfWpZTJ8JUBekwr0iXhKvYRB81kr5Y4vA3xT4L-wPRUD6E2Riz0SBsdHsTKgsZ4EAsK3o6W6gaurTh8QeXRLLS0xkdOqyWVTAGZMLL7y2FVl66MDxeFpObJ7FBoRgzS48lAfLII54xXeE5E62x2a4WlIA0T6ZN7aZbOEnAAAniodvwfglA55A__"
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
        src="https://media-hosting.imagekit.io//19e254aa8d6c4f6a/mountains.png?Expires=1836040601&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XGMfYTeGqNKXbYzjrSNAYg5DaXCS8Y5PcY7NTRDJ6qCCWIW77AUxFT6SlgV36Ngh82HVGnmHshEyKJLVf4E5zRhTYOBLFMRvfyHnKn2Rc6bhD~lJxWFNTK34GF-RuBujOqaep0ZkK9OBOVpZQb67L90rbrPvmpkiZWZj2aAsIG4mkrVptlLkY6DoI613PoNWdIg5GpffpbCpgdwwHXGoyFxLKdDjB7FtYkzX0W6I9eEvB7Qvaysj88--qOmxE38MAjXg~xbS6YLpuCkqRpdlHu8CG2GSJ8xtYLuRjmkiVz8wo14yrXqp5oFd2KitvR4outr6ytAuxTLsq9uu9fB6Xg__"
        alt="Mountains"
        style={{ y: mountainsY }}
      />
    </div>
  );
}

export default Section1;
