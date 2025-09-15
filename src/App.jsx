import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <Navbar />
      <main className='mx-auto w-full max-w-screen-lg px-4'>
        <Hero />
        <Projects />
        <About />
        <Tech />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App