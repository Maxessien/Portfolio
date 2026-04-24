"use client"

import {
    Css3,
    Express,
    Figma,
    FirebaseIcon,
    GitIcon,
    Html5,
    Javascript,
    MongodbIcon,
    NextjsIcon,
    NodejsIcon,
    Npm,
    Python,
    _React as ReactIcon,
    Rust,
    Sass,
    TailwindIcon,
    Tauri,
    TypescriptIcon
} from "@dev.icons/react";
import { motion } from "framer-motion";
import { JSX, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";

const SkillCard = ({
  icon,
  masteryLevel,
  title,
}: {
  icon: JSX.Element;
  title: string;
  masteryLevel: number;
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-(--main-primary-light) rounded-xl shadow-lg border border-(--main-secondary-light) hover:scale-105 transition-transform duration-300">
      <div className="w-16 h-16 text-5xl flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold text-(--text-primary)">{title}</h3>
      <div className="w-full mt-3 bg-(--main-secondary) rounded-full h-2.5">
        <motion.div
          className="bg-(--text-primary-light) h-2.5 rounded-full"
          initial={{ width: "0%" }}
          whileInView={{ width: `${masteryLevel}%` }}
          transition={{ duration: 0.4, ease: "easeIn" }}
        ></motion.div>
      </div>
      <span className="text-base font-medium mt-1 text-(--text-secondary)">
        {masteryLevel}% Mastery
      </span>
    </div>
  );
};

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const skillsList = [
    { title: "HTML5", icon: <Html5 />, masteryLevel: 95 },
    { title: "CSS3", icon: <Css3 />, masteryLevel: 90 },
    { title: "JavaScript", icon: <Javascript />, masteryLevel: 92 },
    { title: "TypeScript", icon: <TypescriptIcon />, masteryLevel: 88 },
    { title: "React", icon: <ReactIcon />, masteryLevel: 90 },
    { title: "Next.js", icon: <NextjsIcon />, masteryLevel: 85 },
    { title: "Node.js", icon: <NodejsIcon />, masteryLevel: 80 },
    { title: "Rust", icon: <Rust />, masteryLevel: 65 },
    { title: "Tauri", icon: <Tauri />, masteryLevel: 60 },
    { title: "Express", icon: <Express color="var(--text-primary)" />, masteryLevel: 85 },
    { title: "NPM", icon: <Npm />, masteryLevel: 90 },
    { title: "MongoDB", icon: <MongodbIcon fill="var(--text-primary)" />, masteryLevel: 75 },
    { title: "Python", icon: <Python />, masteryLevel: 80 },
    {
      title: "GitHub",
      icon: <FaGithub color="var(--text-primary)" />,
      masteryLevel: 88,
    },
    {
      title: "Git",
      icon: <GitIcon fill="var(--text-primary)" />,
      masteryLevel: 68,
    },
    { title: "Tailwind", icon: <TailwindIcon />, masteryLevel: 92 },
    { title: "Sass", icon: <Sass />, masteryLevel: 85 },
    { title: "Firebase", icon: <FirebaseIcon />, masteryLevel: 70 },
    { title: "Figma", icon: <Figma />, masteryLevel: 55 },
  ];

  return (
    <section className="relative w-full bg-(--main-secondary) py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          My Skills
        </h2>
        <div className="relative flex items-center group">
          {canScrollLeft && (
            <button 
              onClick={() => scroll("left")}
              className="absolute cursor-pointer left-0 z-10 flex sm:hidden items-center justify-center w-12 h-12 bg-(--main-primary) text-(--text-primary) rounded-full shadow-md border border-(--main-secondary-light) -ml-4 hover:scale-110 hover:bg-(--main-primary-light) transition-all duration-300 opacity-80 hover:opacity-100"
              aria-label="Scroll left"
            >
              <FaChevronLeft size={20} />
            </button>
          )}
          
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="w-full flex-row flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-hidden snap-x snap-mandatory scroll-smooth py-4 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {skillsList.map((skill, index) => (
              <div key={index} className="max-w-90 min-w-80 w-full snap-center">
                <SkillCard
                  title={skill.title}
                  icon={skill.icon}
                  masteryLevel={skill.masteryLevel}
                />
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button 
              onClick={() => scroll("right")}
              className="absolute cursor-pointer right-0 z-10 flex sm:hidden items-center justify-center w-12 h-12 bg-(--main-primary) text-(--text-primary) rounded-full shadow-md border border-(--main-secondary-light) -mr-4 hover:scale-110 hover:bg-(--main-primary-light) transition-all duration-300 opacity-80 hover:opacity-100"
              aria-label="Scroll right"
            >
              <FaChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
