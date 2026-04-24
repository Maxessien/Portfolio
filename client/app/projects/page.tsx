import ProjectLinks from "@/src/components/projects/ProjectLinks"


const ProjectPage = () => {
  return (
    <section className="py-20 px-6 bg-(--main-primary) flex flex-col items-center">
        <div className="max-w-4xl w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-(--text-primary)">
                My Projects
            </h2>
            <div className="flex flex-col gap-4">
                <ProjectLinks navLocation="/projects/mxsend" title="MxSend - Mobile and desktop app for file sharing" />
                <ProjectLinks navLocation="/projects/imgenc" title="Image Text Encoder - Web App for encoding text messages in images" />
                <ProjectLinks navLocation="/projects/pdftotext" title="PDF to Text - Web App for converting PDF documents into raw text" />
                <ProjectLinks navLocation="/projects/cloudinary" title="Offline Cloudinary - Local media management and storage tool for developers" />
                <ProjectLinks navLocation="/projects/vdltube" title="Vdl Tube - Video platform and streaming application" />
            </div>
        </div>
    </section>
  )
}

export default ProjectPage