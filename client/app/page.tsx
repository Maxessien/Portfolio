import Hero from "@/src/components/home/Hero"
import ProjectsSection from "@/src/components/home/ProjectSection"
import Skills from "@/src/components/home/Skills"


const HomePage = () => {
  return (
    <section className="w-full">
      <Hero />
      <Skills />
      <ProjectsSection />
    </section>
  )
}

export default HomePage