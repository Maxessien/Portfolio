import {
  FfmpegIcon,
  NextjsIcon,
  NodejsIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@dev.icons/react";
import { SiRedux } from "react-icons/si";
import ProjectLayout from "./ProjectLayout";

const VdlTubeProject = () => {
  const stacks = [
    { title: "Next.js", icon: <NextjsIcon className="text-4xl" /> },
    { title: "TypeScript", icon: <TypescriptIcon className="text-4xl" /> },
    { title: "FFmpeg", icon: <FfmpegIcon className="text-4xl" /> },
    {
      title: "Redux",
      icon: <SiRedux className="text-4xl text-(--text-primary-light)" />,
    },
    { title: "Node.js", icon: <NodejsIcon className="text-4xl" /> },
    { title: "Tailwind", icon: <TailwindIcon className="text-4xl" /> },
  ];

  return (
    <ProjectLayout
      title="VDL Tube"
      description="A powerful web-based Youtube video downloading and processing tool with robust format conversion, direct downloads, and customizable media extraction capabilities."
      
      technicalOverview={
        <ul className="space-y-2 text-(--text-secondary)">
          <li>• Backend proxy server managing stream extraction securely</li>
          <li>• Extensive usage of FFmpeg for media transcoding</li>
          <li>• Stream optimization and chunk processing architecture</li>
          <li>• React/Next.js frontend with Redux state handling</li>
        </ul>
      }

      keyFeatures={
        <ul className="space-y-2 text-(--text-secondary)">
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            Multi-resolution video downloading options
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            Custom video range and chapters downloads
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            Custom format combinations and muxing capabilities
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            Real-time progress reporting for transcode operations
          </li>
        </ul>
      }

      stacks={stacks}
      liveLink="https://vdl-tube-v2.vercel.app/"
      liveLinkText="Explore VDL Tube Live"
    />
  );
};

export default VdlTubeProject;