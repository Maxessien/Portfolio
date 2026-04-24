

import MxSendJsx from "@/src/components/projects/MxSendProject";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const MxSendPage = () => {
  return (
    <section className="py-20 px-6 bg-(--main-primary) flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <Link href="/projects" className="inline-flex items-center gap-2 mb-8 text-(--text-secondary) hover:text-(--text-primary) transition-colors font-medium">
          <FaArrowLeft /> Back to Projects
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-(--text-primary)">
          MxSend
        </h1>
        <MxSendJsx />
      </div>
    </section>
  )
}

export default MxSendPage