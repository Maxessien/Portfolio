import PdfToTextProject from "@/src/components/projects/PdfToTextProject";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PdfToTextPage = () => {
  return (
    <section className="py-20 px-6 bg-(--main-primary) flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <Link href="/projects" className="inline-flex items-center gap-2 mb-8 text-(--text-secondary) hover:text-(--text-primary) transition-colors font-medium">
          <FaArrowLeft /> Back to Projects
        </Link>
        <PdfToTextProject />
      </div>
    </section>
  )
}

export default PdfToTextPage