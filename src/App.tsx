import { ui } from './content/site-content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return <>
    <a href="#main" className="skip-link">{ui.skipToContent}</a>
    <Navbar />
    <main id="main" tabIndex={-1}>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </>
}
