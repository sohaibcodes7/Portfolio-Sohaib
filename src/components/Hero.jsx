import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Tech from "./Tech";
import { useEffect, useMemo, useState } from "react";

const gradient =
  "linear-gradient(149deg, rgba(2,0,36,0.8407738095238095) 0%, rgba(137,126,230,1) 50%, rgba(255,118,180,0.6418942577030813) 99%)";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const textStyles = useMemo(() => {
    return {
      background: gradient,
      padding: isMobile ? "0.8rem" : "1.5rem",
      borderRadius: isMobile ? "0.5rem" : "2rem",
      width: isMobile ? "90%" : "140%",
      fontSize: isMobile ? "1.2rem" : "1.5rem",
    };
  }, [isMobile]);

  useEffect(() => {
    // Check if it's a mobile screen (e.g., screen width less than 768px)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Attach the event listener for resizing
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[8rem] short:top-[100px] xs:top-[60px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div
          style={{ zIndex: 1 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#f72585]" />
          <div className="w-1 sm:h-80 h-40 pink-gradient" />
        </div>

        <div style={{ zIndex: 1, width: isMobile ? "90%" : "65%" }} className="pb-24 md:pb-0">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#f72585]">Hello,</span> and welcome to my
            corner of the web!
          </h1>
          <br />
          <div className="short:flex short:flex-row short:w-[60vw] shorter:w-[70vw]">
            <p
              style={textStyles}
              className={`${styles.heroSubText} mt-2 text-white-100 short:mr-10`}
            >
              I'm Sohaib Nadeem, your trusted ally in Web Development. With
              more than 1 years for experience and all the modern
              technologies under my belt, my mission is to turn your digital
              aspirations into reality, tailoring solutions to your unique
              needs.
            </p>
            <br />
            {/* <p
              style={textStyles}
              className={`${styles.heroSubText} mt-2 text-white-100`}
            >
              💡 Amid the ever-changing digital landscape, I specialize in the
              MERN stack (MongoDB, Express.js, React, Node.js). I blend
              technology, creativity, and unwavering commitment to craft bespoke
              web solutions that make you stand out.
            </p> */}
          </div>
        </div>
      </div>

      {!isMobile && <ComputersCanvas />}

      <div
        className={`absolute xs:bottom-10 md:bottom-5 bottom-5 w-full hidden sm:flex justify-center items-center`}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
