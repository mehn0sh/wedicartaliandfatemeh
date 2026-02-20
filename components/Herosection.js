"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection({ isMobile }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative h-[80vh] md:h-screen bg-[url('/img/g2.png')] bg-cover bg-center flex flex-col items-center justify-center gap-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.08,
          rotate: 1.5,
        }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 rounded-xl bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <Image
          src="/img/Asset 1.png"
          alt="Bottom Image"
          width={600}
          height={400}
          className="object-contain w-[400px] md:w-[600px] transition duration-500"
        />
      </motion.div>
    </motion.section>
  );
}