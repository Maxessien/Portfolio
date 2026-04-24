import {
  Express,
  _React as ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@dev.icons/react";
import ProjectLayout from "./ProjectLayout";

const ImageEncoderProject = () => {
  const stacks = [
    { title: "React", icon: <ReactIcon className="text-4xl" /> },
    { title: "TypeScript", icon: <TypescriptIcon className="text-4xl" /> },
    { title: "Express", icon: <Express className="text-4xl" /> },
    { title: "TailwindCSS", icon: <TailwindIcon className="text-4xl" /> },
  ];

  return (
    <ProjectLayout
      title="Image Text Encoder"
      description="A full-stack TypeScript application that implements steganography to hide secret text messages within images using LSB (Least Significant Bit) encoding. The system allows users to encode messages into images and decode them back, with the encoded images appearing visually identical to the original."
      
      technicalOverview={
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-(--text-primary-light)">
              Frontend
            </h3>
            <p className="text-(--text-secondary)">
              React, TypeScript, Vite, Tailwind CSS, TanStack Query
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-(--text-primary-light)">
              Backend
            </h3>
            <p className="text-(--text-secondary)">
              Express, TypeScript, Sharp, Multer
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-(--text-primary-light)">
              Algorithm
            </h3>
            <p className="text-(--text-secondary)">
              Custom LSB steganography with magic string validation
            </p>
          </div>
        </div>
      }

      keyFeatures={
        <ul className="space-y-2 text-(--text-secondary)">
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            <span>Hide text messages up to 1500 characters in images</span>
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            <span>Extract hidden messages from encoded images</span>
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            <span>Magic string validation for data integrity</span>
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            <span>Automatic download of encoded images</span>
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            <span>Copy-to-clipboard functionality for decoded messages</span>
          </li>
        </ul>
      }

      stacks={stacks}
      liveLink="https://image-encoder-673s.onrender.com/"
      liveLinkText="View Website"
    />
  );
};

export default ImageEncoderProject;