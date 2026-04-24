import Hero from "@/src/components/home/Hero"
import Projects from "@/src/components/home/Projects"
import Skills from "@/src/components/home/Skills"


const HomePage = () => {
  return (
    <section className="w-full">
      <Hero />
      <Skills />
      <Projects />
    </section>
  )
}

export default HomePage