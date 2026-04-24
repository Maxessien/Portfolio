"use client"

import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

const ProjectLinks = ({navLocation, title}: {title: string, navLocation: string})=>{
    return (
        <Link 
            href={navLocation} 
            className="flex items-center justify-between p-6 bg-(--main-primary-light) border border-(--main-secondary-light) rounded-xl cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
        >
            <span className="text-xl font-semibold text-(--text-primary) group-hover:text-(--text-primary-light) transition-colors">
                {title}
            </span>
            <FaArrowRight className="text-(--text-secondary) group-hover:text-(--text-primary) transition-colors text-xl" />
        </Link>
    )
}

export default ProjectLinks