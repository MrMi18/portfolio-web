import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import MyStudio from './components/MyStudio'
import './App.css'

const App = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <Navbar />
      <main className='mx-auto w-full max-w-screen-lg px-4'>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mt-16">
            {/* Left Column - About Me */}
            <div>
              <AboutMe />
            </div>

            {/* Right Column - My Studio */}
            <div>
              <MyStudio />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
      
      <Footer /> 
    </div>
  )
}

export default App