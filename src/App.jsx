import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import MyStudio from './components/MyStudio'
import Skills from './components/Tech'
import './App.css'

const App = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <Navbar />
      <main className='mx-auto w-full max-w-screen-lg px-4'>
        <Hero />
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
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main> 
    </div>
  )
}

export default App