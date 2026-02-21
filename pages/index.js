import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import Countdown from "@/components/Countdown";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Gallery from "@/components/gallery";
import SimpleModal from "@/components/SimpleModal";
import HeroSection from "@/components/Herosection";
import RoyalInviteCard from "@/components/RSVPModal";


/* ================= Utils ================= */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return isMobile;
};

export default function Home() {
  const isMobile = useIsMobile();

  const sectionVariant = {
    hidden: { opacity: 0, y: isMobile ? 20 : 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.6 : 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="mx-auto">
      {/* ================= HERO ================= */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Hero Image */}
        <img
          src="/img/hero2.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-100/70 via-red-100/30 to-transparent" />

        {/* محتوا */}
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.6 : 1 }}
              className={`${styles.fancytext} text-4xl md:text-7xl mt-16`}
            >
              Fatemeh & Ali
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isMobile ? 0.2 : 0.6 }}
              className={`italic ${styles.textFont} text-white/90 text-2xl md:text-5xl`}
            >
              Save the Date
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isMobile ? 0.4 : 1 }}
              className="flex justify-center"
            >
              <Countdown targetDate="2026-03-24 19:30:00" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= SECTION 2 ================= */}

<HeroSection/>
 
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative h-[80vh] md:h-screen bg-[url('/img/g2.png')] bg-cover bg-center flex flex-col items-center justify-center mx-auto gap-6"
      >
  

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
  
          <Image
            src="/img/Asset 10.png"
            alt="Bottom Image"
            width={isMobile ? 500 : 600}
            height={500}
            className="object-contain  w-[450px]  duration-300 group-hover:scale-105 "
          />
        </motion.div>
      </motion.section>
      <Gallery />
      <SimpleModal />
            <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative h-[80vh] md:h-screen bg-[url('/img/g2.png')] bg-cover bg-center flex flex-col items-center justify-center mx-auto gap-6"
      >
  

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
  
          <Image
            src="/img/tm7.png"
            alt="Bottom Image"
            width={isMobile ? 500 : 600}
            height={500}
            className="object-contain  w-[450px]  duration-300 group-hover:scale-105 "
          />
        </motion.div>
      </motion.section>
<RoyalInviteCard/>
    </div>
  );
}
