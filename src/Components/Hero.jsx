import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import './headline.css';
import './headline';

function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={sectionRef}
      className='hero lg:h-[85vh] xl:h-[90vh] flex justify-center'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[90%] md:w-[70%] xl:h-[100%] flex justify-between items-center grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:items-start mb-[50px] xl:mb-[1px]">
          <motion.h1
            className='text-[24px] uppercase tracking-[8px] text-[#623e9c] font-black mb-[10px] xl:mb-[40px] lg:mt-[20px]'
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hiren Agravat
          </motion.h1>
          <section className="cd-intro">
            <h1 className="cd-headline push">
              <span className='text-[#ffa500ff] font-black'>I'm Into</span> <br />
              <span className="cd-words-wrapper">
                <b className="is-visible"> Web Developer</b>
                <b>Web Designer</b>
                <b>Front-End Developer</b>
              </span>
            </h1>
          </section>
          <div className='mb-[16px] lg:mb-[40px] flex gap-4'>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button id='btn1' className="relative px-6 py-3 font-bold text-[#623e9c] border-2 border-[#623e9c] rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:text-white hover:scale-110 hover:shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#6742a3] before:to-[#845ec2] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100">
                <span className="relative z-10">Contact Me</span>
              </button>
            </motion.a>
            <motion.a
              href="src/assets/Hiren resume.pdf"
              download="Hiren_Agravat_Resume.pdf"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                id='btn2'
                className="relative px-6 py-3 font-bold text-[#ffa500] border-2 border-[#ffa500] rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:text-white hover:scale-110 hover:shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#ff8c00] before:to-[#ffa500] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100"
              >
                <span className="relative z-10">Resume</span>
              </button>
            </motion.a>
          </div>
          <img className='w-[46px] text-center animate-bounce' src="src/assets/scroll.png" alt="Scroll icon" />
        </div>
        <motion.div
          className="img m-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img className='xl:h-[89vh] transition-all duration-500 transform hover:scale-105 animate-infinite-scale' src="src/assets/me.png" alt="Hero Image" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
