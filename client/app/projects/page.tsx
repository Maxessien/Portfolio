import ProjectLinks from "@/src/components/projects/ProjectLinks"


const ProjectPage = () => {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-(--main-primary) min-h-[calc(100vh-80px)] flex flex-col items-center">
        <div className="max-w-4xl w-full space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-(--text-primary) tracking-tight">
                    Featured Projects
                </h2>
                <p className="text-lg md:text-xl text-(--text-secondary-light) max-w-2xl mx-auto leading-relaxed">
                    A showcase of my recent work, featuring full-stack applications, robust desktop tools, and innovative web utilities.
                </p>
            </div>
            
            <div className="flex flex-col gap-5 p-6 md:p-10 bg-(--main-primary-light) border border-(--main-secondary-light) rounded-3xl shadow-xl md:hover:shadow-2xl transition-shadow duration-500">
                <ProjectLinks navLocation="/projects/mxsend" title="MxSend - Cross-Platform File Sharing Application" />
                <ProjectLinks navLocation="/projects/imgenc" title="Pixel Cipher - Image-Based Text Encryption Utility" />
                <ProjectLinks navLocation="/projects/pdftotext" title="PDF to Text - Web App for converting PDF documents into raw text" />
                <ProjectLinks navLocation="/projects/cloudinary" title="Offline Cloudinary - Local media management and storage tool for developers" />
                <ProjectLinks navLocation="/projects/vdltube" title="Vdl Tube - Video platform and streaming application" />
            </div>
        </div>
    </section>
  )
}

export default ProjectPage