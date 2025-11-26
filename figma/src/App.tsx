import profileImage from 'figma:asset/602c99a7bf57df00031fef094b637f4f78265186.png';
import { Navbar } from './components/Navbar';
import { AboutMe } from './components/AboutMe';
import { MyStudio } from './components/MyStudio';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { motion, useScroll, useTransform } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Static Background - No Parallax */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Static background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-900/10 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen px-8 md:px-16 py-12">
        {/* Enhanced Header Section */}
        <section id="home" className="flex items-center justify-between mb-16 min-h-screen pt-16">
          {/* Left content - Intro with animations */}
          <div className="flex-1 max-w-2xl text-white">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              hey, I'm{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Imran
              </motion.span>{" "}
              <motion.span 
                className="inline-block"
                animate={{ 
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                  scale: [1, 1.1, 1, 1.1, 1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                👋
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-white/80 leading-relaxed mb-8 font-normal tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Passionate{" "}
              <motion.span
                className="text-orange-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                FullStack Web Developer
              </motion.span>{" "}
              from Nagpur,<br />
              pushing the boundaries of web technology to create<br />
              immersive digital experiences.
            </motion.p>

            {/* Animated CTA Buttons */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg font-medium tracking-wide"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>

          {/* Enhanced Right side - Profile Image */}
          <motion.div 
            className="flex-shrink-0 ml-8"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-96 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={profileImage} 
                  alt="Imran - FullStack Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Enhanced glow effects */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-orange-500/20 via-blue-500/10 to-transparent pointer-events-none"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500/30 rounded-full"
                animate={{ 
                  y: [-10, 10, -10],
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/30 rounded-full"
                animate={{ 
                  y: [10, -10, 10],
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mb-20 py-16">
          {/* Left Column - About Me */}
          <div>
            <AboutMe />
          </div>

          {/* Right Column - My Studio */}
          <div>
            <MyStudio />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mb-20 py-16">
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-7xl mb-20 py-16">
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mb-20 py-16">
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Enhanced Decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400/40 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
          boxShadow: [
            "0 0 0 0 rgba(249, 115, 22, 0)",
            "0 0 0 10px rgba(249, 115, 22, 0.1)",
            "0 0 0 0 rgba(249, 115, 22, 0)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/50 rounded-full"
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.4, 0.9, 0.4],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-green-400/30 rounded-full"
        animate={{ 
          y: [-5, 5, -5],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Additional floating elements */}
      <motion.div 
        className="absolute top-1/2 left-1/6 w-3 h-3 border border-purple-400/30 rounded-full"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <motion.div 
        className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full"
        animate={{ 
          x: [-10, 10, -10],
          y: [-5, 5, -5],
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}