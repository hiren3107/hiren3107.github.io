import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const hiren = true; // Replace with actual logic if needed
  const formSub = useRef();
  const contactRef = useRef();
  const isInView = useInView(contactRef, { triggerOnce: true, threshold: 0.3 });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0na1x4j", "template_dop3pwe", formSub.current, {
        publicKey: "43Xo0FgUkJFP6Gm7x",
      })
      .then(
        () => {
          Swal.fire({
            title: "Success",
            text: "Your message has been sent!",
            icon: "success",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Failed...",
            text: "Something went wrong!",
          });
        }
      );
  };

  return (
    <motion.div
      ref={contactRef}
      id="contact"
      className="contact h-auto flex justify-center pb-[100px]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[90%] md:w-[70%] xl:h-[100%] flex justify-between items-center grid grid-cols-1 lg:grid-cols-2 lg:gap-2 xl:gap-32">
        {/* Contact Info */}
        <motion.div
      className="mb-[50px]"
      initial={{ opacity: 0, x: -50 }}
      animate={hiren ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 1 }}
    >
      <p className="text-[40px] leading-[40px] lg:text-[50px] lg:leading-[50px] xl:text-[80px] xl:leading-[80px] font-black mb-[30px] hover:text-blue-500 transition-colors duration-300">
        Let's work <br /> together
      </p>

      <h3 className="text-[20px] font-black">E-Mail</h3>
      <a href="mailto:agravathiren07@gmail.com" className="text-[16px] mb-[30px] block text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300">
        agravathiren07@gmail.com
      </a>

      <h3 className="text-[20px] font-black">Address</h3>
      <a
        href="https://www.google.com/maps/search/Rajkot,+Gujarat"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[16px] mb-[30px] block text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300"
      >
        Rajkot, Gujarat
      </a>

      <h3 className="text-[20px] font-black">Phone</h3>
      <a href="tel:+918320828216" className="text-[16px] block text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300">
        8320828216
      </a>

      <div className="flex items-center gap-4 mt-5">
        <a href="https://www.linkedin.com/in/agravat-hiren-319a242aa" target="_blank" rel="noopener noreferrer">
          <motion.img 
            src="https://media-hosting.imagekit.io//94ab3a7d917b4be7/linkedin.png?Expires=1836041009&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rbOHr5UptElcAxc9D9ypW7el2vM9ROyJbTn7YMi-R2tvZeYow3WQ73M2v9HQRDBl4zWwRd-YFZ9EwmK7gZu1PnkuNp3bRNLX2L0lLMbgNnklIwtvnR0aUl8XmXLGKFIgNU5M20pfWmY9w9LK4AetSsrAVBkL7G2KsN7gNHH36D3XlocuEgMCcjbvaKzEPtslKjaxvkLMX98OX1IQjNzjzn5rFbVcBCBmX~DLQg2abCAERTxmMpcmQZAd~qff1LvBOP55gMEiRLXrqPFwBMh78dbtlD2atdlzqWTZGjLZGoHyyK6hZjVcjmLhuNXw3TNuI1VXyDoTzAw9QH4xISOrVA__" 
            alt="LinkedIn" 
            className="w-8 h-8" 
            whileHover={{ scale: 1.2 }} 
            transition={{ duration: 0.3 }}
          />
        </a>
        <a href="https://github.com/hiren3107" target="_blank" rel="noopener noreferrer">
          <motion.img 
            src="https://media-hosting.imagekit.io//24fb008a2817438a/github.png?Expires=1836041029&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VLs0ocxDP2tUH-CaT17Seb2rm3VN1JiTsrkvT6P20kLZkLvGnRzCErbtLoSl6Ai92WNRrWALTYc1DxqM~wag99~Gcv2w6wJpi5ipttZi5~PdbkXdlHlz5tF0kHU5xoQPkZlr-eolfGRW01quazUps3DJZeZQL385bB~ziSUVauk3sE1dFRxwSO2ATlKwu9Up7aBV6ATuMVqrlcx2ebN4jBBSPL4oi~HfUEoTJOim9PPSxckoCVKyXkud4K9o3fbdESOUESjdXuf4z9nn~biQpQe1PYncv9X~6PME-Szfio-56PQNbF7f0d2VzKdfjOwQ4oOOsR3TlCrVflOppo3KGQ__" 
            alt="GitHub" 
            className="w-8 h-8" 
            whileHover={{ scale: 1.2 }} 
            transition={{ duration: 0.3 }}
          />
        </a>
      </div>
    </motion.div>
    
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
        >
          <form
            ref={formSub}
            className="flex justify-center flex-col"
            onSubmit={sendEmail}
          >
            {/* Name Input */}
            <motion.input
              className="w-[100%] h-[50px] bg-transparent border ps-[15px] mb-[30px] rounded-[8px] focus:border-orange-500 transition-all"
              required
              type="text"
              placeholder="Name"
              name="from_name"
              whileFocus={{ scale: 1.05, borderColor: "#ff8c00" }}
            />

            {/* Email Input */}
            <motion.input
              className="w-[100%] h-[50px] bg-transparent border ps-[15px] mb-[30px] rounded-[8px] focus:border-orange-500 transition-all"
              required
              type="email"
              placeholder="Email"
              name="email"
              whileFocus={{ scale: 1.05, borderColor: "#ff8c00" }}
            />

            {/* Message Box */}
            <motion.textarea
              className="w-[100%] bg-transparent border ps-[15px] pt-[15px] mb-[30px] rounded-[8px] focus:border-orange-500 transition-all"
              required
              name="message"
              cols="30"
              rows="8"
              placeholder="Message"
              whileFocus={{ scale: 1.05, borderColor: "#ff8c00" }}
            />

            {/* Submit Button */}
            <motion.input
              type="Submit"
              id="submitbtn"
              className="w-[100%] h-[50px] bg-orange-500 text-white font-bold rounded-[8px] cursor-pointer hover:bg-orange-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            />
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
