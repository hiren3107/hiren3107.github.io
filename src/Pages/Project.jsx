import React, { useState } from "react";
import { motion } from "framer-motion";

function Project() {
  const [activeSection, setActiveSection] = useState("webpages");

  const sections = {
    webpages: [
      {
        src: "src/assets/webpage img/Byfaith.png",
        view: "https://sage-dodol-c05ab6.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Byfaith"
      },
      {
        src: "src/assets/webpage img/Consul.png",
        view: "https://celebrated-wisp-5e7e34.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Consul"
      },
      {
        src: "src/assets/webpage img/Courses.png",
        view: "https://incredible-madeleine-9a7ae7.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Courses"
      },
      {
        src: "src/assets/webpage img/dogger.png",
        view: "https://astonishing-brigadeiros-42b96b.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/dogger"
      },
      {
        src: "src/assets/webpage img/Engineears.png",
        view: "https://lambent-gelato-c567fd.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Engineears"
      },
      {
        src: "src/assets/webpage img/Eventasia.png",
        view: "https://deft-tulumba-818002.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Eventasia"
      },
      {
        src: "src/assets/webpage img/Framework.png",
        view: "https://luxury-caramel-c16d9b.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Framework"
      },
      {
        src: "src/assets/webpage img/Gaming.png",
        view: "https://cheerful-dieffenbachia-765c79.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Gaming"
      },
      {
        src: "src/assets/webpage img/Horse Club.png",
        view: "https://inquisitive-puppy-381672.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Horse%20Club"
      },
      {
        src: "src/assets/webpage img/Konato.png",
        view: "https://comforting-shortbread-47f032.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Konato"
      },
      {
        src: "src/assets/webpage img/Lawyer.png",
        view: "https://fabulous-meerkat-092d8b.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Lawyer"
      },
      {
        src: "src/assets/webpage img/Listed.png",
        view: "https://reliable-biscuit-cde12d.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Listed"
      },
      {
        src: "src/assets/webpage img/Monday.png",
        view: "https://glittery-kataifi-079017.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Monday"
      },
      {
        src: "src/assets/webpage img/Mosh.png",
        view: "https://chipper-capybara-40c247.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Mosh"
      },
      {
        src: "src/assets/webpage img/Nftku.png",
        view: "https://whimsical-pasca-94cda9.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Nftku"
      },
      {
        src: "src/assets/webpage img/Photografer.png",
        view: "https://luxury-hotteok-185b56.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Photografer"
      },
      {
        src: "src/assets/webpage img/Re-born.png",
        view: "https://bejewelled-bublanina-17836d.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Re-born"
      },
      {
        src: "src/assets/webpage img/Seoweb  web-1.png",
        view: "https://gleeful-tarsier-8bc437.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Seoweb%20%20web-1"
      },
      {
        src: "src/assets/webpage img/Shapely Demo.png",
        view: "https://jolly-semolina-72f390.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Shapely%20Demo"
      },
      {
        src: "src/assets/webpage img/Shion house.png",
        view: "https://frabjous-melba-e98d73.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Shion%20house"
      },
      {
        src: "src/assets/webpage img/skater.png",
        view: "https://visionary-figolla-1ad832.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/skater"
      },
      {
        src: "src/assets/webpage img/Time zone.png",
        view: "https://dashing-bonbon-506bb1.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Time%20zone"
      },
      {
        src: "src/assets/webpage img/Tralive.png",
        view: "https://thunderous-gaufre-ed82c3.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Tralive"
      },
      {
        src: "src/assets/webpage img/Transportion.png",
        view: "http://fancy-kringle-28e516.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Transportion"
      },
      {
        src: "src/assets/webpage img/Wplms.png",
        view: "https://ornate-smakager-784982.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Webpages/Wplms"
      }
    ],
    websites: [
      {
        src: "src/assets/boat clone.png",
        view: "https://botclone.netlify.app",
        git: "https://github.com/hiren3107/Boat_Clone"
      },
      { 
        src: "src/assets/flayers.png",
        view: "https://elaborate-panda-f38d9c.netlify.app/",
        git: "https://github.com/hiren3107/Java-Script/tree/main/Website/Flyers"
      },
      { 
        src: "src/assets/Website img/GTA 5.png",
        view: "https://animated-starburst-1fe586.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Website/Gta%205"
      }, 
      { 
        src: "src/assets/Website img/Player X.png",
        view: "https://jovial-sundae-3985bc.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Website/Player%20X"
      }
    ],
    adminpanels: [
      { 
        src: "src/assets/adminpanel.png",
        view: "https://hirenadminpanel.netlify.app/",
        git: "https://github.com/hiren3107/NXT_WAVE_ADMINPANEL"
      },
      { 
        src: "src/assets/Adminpanel Jquary.png",
        view: "https://effervescent-seahorse-1da51d.netlify.app/",
        git: "https://github.com/hiren3107/Our_Works/tree/main/Adminpanel/Admin%20Panel%20Jquary"
      }
    ],
  };

  return (
    <motion.div 
    className="min-h-screen bg-[#0c0c1d] p-5 flex flex-col items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Navbar */}
    <nav className="w-full flex justify-center mb-6">
      {Object.keys(sections).map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`px-4 py-2 mx-2 rounded-lg text-white transition-all duration-300 ${
            activeSection === section
              ? "bg-[#6a4aff]"
              : "bg-gray-600 hover:bg-gray-500"
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </nav>

    {/* Projects Display */}
    <motion.div 
      className="w-[90%] md:w-[70%]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4 overflow-y-auto max-h-[70vh] p-2 custom-scrollbar-hide">
        {sections[activeSection].map((el, index) => (
          <motion.div
            key={index}
            className="border shadow-lg rounded-lg p-4 flex flex-col items-center bg-white h-full transition-transform transform hover:scale-102 hover:shadow-2xl hover:bg-[#f8f8f8] hover:border-[#6742a3ff] duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={el.src}
              alt="Project"
              className="w-full h-48 object-cover rounded-lg mb-3 transition-all duration-300 transform hover:scale-105"
            />
            <div className="flex gap-2 flex-grow justify-between mt-4">
              <a href={el.view} target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-[#6a4aff] to-[#a24cff] text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  View
                </button>
              </a>
              <a href={el.git} target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-[#ff8c00] to-[#ffb800] px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  GitHub
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
  );
}

export default Project;
