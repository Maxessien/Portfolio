"use client"

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen max-h-140 min-h-130">
      <div className="h-full py-3 absolute -z-10 top-0 left-0 w-full flex justify-center items-center">
        <img
          className="h-full opacity-10 max-w-full"
          src="/max-logo-blur.png"
          alt="bg-logo"
        />
      </div>
      <motion.div
        initial={{ y: 25, opacity: 0.7 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-(--text-primary) tracking-tight">
          Hi, I&apos;m Max Essien
        </h1>
        <h2 className="text-2xl text-shadow-sm text-shadow-black md:text-3xl font-semibold mb-6 text-(--text-primary-light)">
          Fullstack Developer
        </h2>
        <p className="max-w-2xl text-shadow-md text-shadow-black text-lg md:text-xl text-(--text-secondary-light) leading-relaxed">
          I specialize in building scalable, user-centric web applications from
          the ground up. Whether it&apos;s crafting elegant front-end interfaces
          or architecting robust back-end systems, I turn complex problems into
          seamless digital experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
