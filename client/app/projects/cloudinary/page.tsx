

import OfflineCloudinary from "@/src/components/projects/OfflineCloudinary";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const OfflineCloudinaryPage = () => {
  return (
    <section className="py-20 px-6 bg-(--main-primary) flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <Link href="/projects" className="inline-flex items-center gap-2 mb-8 text-(--text-secondary) hover:text-(--text-primary) transition-colors font-medium">
          <FaArrowLeft /> Back to Projects
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-(--text-primary)">
          Offline Cloudinary
        </h1>
        <OfflineCloudinary />
      </div>
    </section>
  )
}

export default OfflineCloudinaryPage