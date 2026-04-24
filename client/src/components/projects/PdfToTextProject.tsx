import { Css3, Javascript, Python as PythonIcon } from "@dev.icons/react";
import ProjectLayout from "./ProjectLayout";

const PdfToTextProject = () => {
  const stacks = [
    { title: "Flask", icon: <PythonIcon /> },
    { title: "JavaScript", icon: <Javascript /> },
    { title: "CSS3", icon: <Css3 /> },
  ];

  return (
    <ProjectLayout
      title="PDF Text Extractor"
      description="A full-stack web application that enables users to upload PDF documents and extract text content instantly. Built with a Flask backend and vanilla JavaScript frontend, featuring a responsive design with drag-and-drop file upload functionality and real-time text extraction."
      technicalOverview={
        <ul className="space-y-2 text-(--text-secondary)">
          <li>• Flask web framework with RESTful API endpoints</li>
          <li>• pdfplumber library for PDF text extraction</li>
          <li>• Asynchronous file upload with fetch API</li>
          <li>• Custom static asset serving</li>
        </ul>
      }
      keyFeatures={
        <ul className="space-y-2 text-(--text-secondary)">
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            <span>Drag-and-drop PDF upload with file validation</span>
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            <span>Real-time text extraction from multi-page PDFs</span>
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            <span>One-click copy extracted text to clipboard</span>
          </li>
          <li className="flex items-start">
            <span className="text-(--text-primary-light) mr-2">•</span>
            <span>Responsive card-based design for mobile and desktop</span>
          </li>
        </ul>
      }
      stacks={stacks}
      liveLink="https://pdf-text-extractor-qg9b.onrender.com/"
    />
  );
};

export default PdfToTextProject;
