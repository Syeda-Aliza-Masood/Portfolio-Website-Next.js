import { Navigation } from "@/app/Component/Navigation"
import { Hero } from "@/app/Component/Hero"
import { About } from "@/app/Component/About"
import { Skills } from "@/app/Component/Skills"
import { Projects } from "@/app/Component/Projects"
import { Contact } from "@/app/Component/Contact"
import { Footer } from "@/app/Component/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

