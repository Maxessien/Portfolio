import { NodejsIcon, TypescriptIcon } from "@dev.icons/react";
import { SiExpress } from "react-icons/si";
import ProjectLayout from "./ProjectLayout";

const OfflineCloudinary = () => {
  const stacks = [
    { title: "Node.js", icon: <NodejsIcon className="text-4xl" /> },
    {
      title: "Express",
      icon: <SiExpress className="text-4xl text-(--text-primary-light)" />,
    },
    { title: "TypeScript", icon: <TypescriptIcon className="text-4xl" /> },
  ];

  return (
    <ProjectLayout
      keyFeatures={
        <ul className="space-y-2 text-(--text-secondary)">
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            Local file uploads and deletions with HTTP server emulator
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            Cloudinary-style API responses for seamless integration
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            Built-in Express server to serve uploaded files via HTTP
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            In-memory caching system for dramatically faster operations
          </li>
        </ul>
      }
      liveLink="https://www.npmjs.com/package/offline-cloudinary"
      stacks={stacks}
      technicalOverview={
        <ul className="space-y-2 text-(--text-secondary)">
          <li>• HTTP Server Emulator via startEmulator()</li>
          <li>• Programmatic API through offlineCloudinary instance</li>
          <li>• In-memory cache with dirty flag tracking</li>
          <li>• Periodic sync to disk every 500ms</li>
        </ul>
      }
      liveLinkText="View NPM registry page"
      title="Offline Cloudinary"
      description="A Node.js package that emulates Cloudinary's file upload and management functionality locally, eliminating the need for internet access or a Cloudinary account during development and testing. Perfect for developers who need to test file upload functionality without incurring API costs or requiring external dependencies."
    />
  );
};

export default OfflineCloudinary;
