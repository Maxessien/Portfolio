/* eslint-disable @next/next/no-img-element */
import { JSX, ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

export interface Stack {
  title: string;
  icon: ReactNode | JSX.Element;
}

export interface ProjectLayoutProps {
  title: string;
  description: string;
  technicalOverview: ReactNode;
  keyFeatures: ReactNode;
  stacks: Stack[];
  liveLink: string;
  liveLinkText?: string;
  snapShotUrl: string[];
}

const ProjectLayout = ({
  title,
  description,
  technicalOverview,
  keyFeatures,
  stacks,
  liveLink,
  snapShotUrl,
  liveLinkText = "View Live Demo",
}: ProjectLayoutProps) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:p-10 space-y-12 bg-(--main-primary-light) border border-(--main-secondary-light) rounded-2xl shadow-2xl">
      <div className="text-center space-y-6">
        <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 max-w-4xl mx-auto rounded-xl shadow-inner bg-(--main-secondary) p-2">
          {snapShotUrl.map((url) => (
            <div key={url} className="w-full snap-center shrink-0 aspect-video overflow-hidden rounded-lg border border-(--main-secondary-light)">
              <img className="w-full h-full object-contain object-center transform hover:scale-105 transition-transform duration-500" src={url} alt="Snapshot" />
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto space-y-4 pt-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-(--text-primary) tracking-tight">{title}</h1>
          <p className="text-lg md:text-xl text-(--text-secondary-light) leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-(--main-primary) rounded-xl p-6 md:p-8 border border-(--main-secondary-light) shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-(--text-primary) mb-4 border-b border-(--main-secondary-light) pb-2">
            Technical Overview
          </h2>
          <div className="text-(--text-secondary) leading-relaxed">
            {technicalOverview}
          </div>
        </div>

        <div className="bg-(--main-primary) rounded-xl p-6 md:p-8 border border-(--main-secondary-light) shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-(--text-primary) mb-4 border-b border-(--main-secondary-light) pb-2">
            Key Features
          </h2>
          <div className="text-(--text-secondary) leading-relaxed">
            {keyFeatures}
          </div>
        </div>
      </div>

      <div className="bg-(--main-primary) rounded-xl px-4 py-8 sm:p-10 border border-(--main-secondary-light) shadow-sm">
        <h2 className="text-3xl font-bold text-(--text-primary) mb-8 text-center tracking-wide">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {stacks.map((stack, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center p-5 bg-(--main-primary-light) border border-(--main-secondary-light) rounded-xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 w-32 md:w-36"
            >
              <div className="mb-4 [&>svg]:w-12 [&>svg]:h-12 text-(--text-primary-light) group-hover:text-(--text-primary) transition-colors">
                {stack.icon}
              </div>
              <span className="text-sm md:text-base font-semibold text-(--text-secondary) text-center group-hover:text-(--text-primary) transition-colors">
                {stack.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center pt-6">
        <a
          target="_blank"
          href={liveLink}
          className="group flex items-center justify-center gap-3 px-8 py-4 bg-(--main-primary) text-(--text-primary) border-2 border-(--main-secondary-light) rounded-full font-bold text-lg hover:bg-(--main-secondary-light) hover:text-(--text-primary) transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <span>{liveLinkText}</span>
          <span className="group-hover:translate-x-1 transition-transform">
            <FaArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectLayout;
