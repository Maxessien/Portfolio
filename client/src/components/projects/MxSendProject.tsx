import {
  _React as ReactIcon,
  Redux,
  Rust,
  TailwindIcon,
  Tauri,
  TypescriptIcon,
} from '@dev.icons/react';
import ProjectLayout from './ProjectLayout';

const MxSendJsx = () => {
  const stacks = [
    { title: 'Rust', icon: <Rust className="text-4xl" /> },
    { title: 'Tauri', icon: <Tauri className="text-4xl" /> },
    { title: 'React', icon: <ReactIcon className="text-4xl" /> },
    { title: 'TypeScript', icon: <TypescriptIcon className="text-4xl" /> },
    { title: 'Redux', icon: <Redux className="text-4xl" /> },
    { title: 'Tailwind', icon: <TailwindIcon className="text-4xl" /> },
  ];

  return (
    <ProjectLayout
      title="MxSend"
      description="MxSend is a high-performance, cross-platform peer-to-peer file transfer application built with a modern Rust backend and React frontend, enabling seamless file sharing across devices on local networks."
      
      technicalOverview={
        <ul className="space-y-2 text-(--text-secondary)">
          <li>• Multi-threaded server using Axum web framework</li>
          <li>• WebSocket support via Socketioxide for real-time communication</li>
          <li>• SPA with Redux Toolkit for state management</li>
          <li>• Tauri framework providing secure IPC Bridge communication</li>
        </ul>
      }

      keyFeatures={
        <ul className="space-y-2 text-(--text-secondary)">
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            QR Code Authentication for secure peer discovery
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            WebSocket-based live transfer progress updates
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            Automatic categorization of files (Audio, Video, Image, Document)
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            Native builds for Windows, macOS, Linux, and Android
          </li>
        </ul>
      }

      stacks={stacks}
      liveLink="https://github.com/Maxessien/mx-send-tauri/releases/tag/v1.0.1"
      liveLinkText="View Latest App Releases"
    />
  );
};

export default MxSendJsx;