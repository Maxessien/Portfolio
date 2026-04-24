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
}

const ProjectLayout = ({
  title,
  description,
  technicalOverview,
  keyFeatures,
  stacks,
  liveLink,
  liveLinkText = "View Live Demo",
}: ProjectLayoutProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-(--main-primary-light) border border-(--main-secondary-light) rounded-xl shadow-lg">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-(--text-primary)">
          {title}
        </h1>
        <p className="text-lg text-(--text-secondary) leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-(--main-primary) rounded-lg p-6 border border-(--main-secondary-light)">
          <h2 className="text-xl font-semibold text-(--text-primary) mb-4">
            Technical Overview
          </h2>
          {technicalOverview}
        </div>

        <div className="bg-(--main-primary) rounded-lg p-6 border border-(--main-secondary-light)">
          <h2 className="text-xl font-semibold text-(--text-primary) mb-4">
            Key Features
          </h2>
          {keyFeatures}
        </div>
      </div>

      <div className="bg-(--main-primary) rounded-lg p-6 border border-(--main-secondary-light)">
        <h2 className="text-2xl font-semibold text-(--text-primary) mb-6 text-center">
          Stacks
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {stacks.map((stack, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 bg-(--main-primary-light) border border-(--main-secondary-light) rounded-lg shadow-sm hover:-translate-y-1 transition-transform w-32"
            >
              <div className="mb-3 [&>svg]:w-10 [&>svg]:h-10">
                {stack.icon}
              </div>
              <span className="text-sm font-medium text-(--text-secondary) text-center">
                {stack.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="w-full flex justify-center font-semibold text-lg pb-4">
        <a
          target="_blank"
          href={liveLink}
          className="flex items-center justify-center gap-2 text-(--text-primary) hover:text-(--text-primary-light) transition-colors"
        >
          <span>{liveLinkText}</span>
          <span>
            <FaArrowRight />
          </span>
        </a>
      </p>
    </div>
  );
};

export default ProjectLayout;
