"use client"

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useRouter } from "next/navigation";
import { } from "nextjs-toploader";
import { FaArrowRight } from "react-icons/fa";
import Button from "../reusable/Button";

const ProjectCard = ({
  navLocation,
  snapShot,
  title,
}: {
  snapShot: string;
  title: string;
  navLocation: string;
}) => {
  const router = useRouter();
  return (
    <div className="space-y-2 p-3 rounded-md shadow-[0px_0px_10px_-6px_var(--text-secondary)]">
      <div
        onClick={() => router.push(navLocation)}
        className="w-full aspect-video cursor-pointer rounded-md overflow-hidden"
      >
        <img
          className="object-cover object-center w-full h-full"
          src={snapShot}
          alt="project img"
        />
      </div>
      <p className="flex gap-2 items-center">
        <span className="flex-1 wrap-break-word font-medium text-lg">
          {title}
        </span>
        <Link href={navLocation}>
          <Button className="p-4 text-lg" usePredefinedSize={false}>
            <FaArrowRight />
          </Button>
        </Link>
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="w-full mx-auto max-w-7xl px-3 py-15">
      <header className="flex justify-between items-center gap-2 mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          My Projects
        </h2>
        <Link className="font-semibold text-xl" href={"/"}>
          View More
        </Link>
      </header>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ProjectCard
          snapShot="/censca.png"
          navLocation="/"
          title="Censca Market - Online marketplace for african artisans"
        />
        <ProjectCard
          snapShot="/mxsend.png"
          navLocation="/"
          title="MxSend - Mobile and desktop app for file sharing"
        />
      </div>
    </section>
  );
};

export default Projects;
