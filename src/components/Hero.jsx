import React from 'react'
import { motion } from 'motion/react'
import profileImage from '../assets/profile.jpg'
import { Github, Linkedin, X, Instagram } from 'lucide-react'

const Hero = () => {
      return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-700/30">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-900/10 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center py-16 md:py-20 px-6 md:px-8">
        <div className="w-full max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Left: Avatar + socials */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                <img src={profileImage} alt="Imran" className="w-full h-full object-cover object-center" />
              </div>
              <div className="absolute -right-2 -bottom-2 w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm border border-white/20">👋</div>
            </motion.div>

            <div className="text-sm text-white/70 flex items-center gap-2">
              <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="none"><path d="M12 2a9 9 0 100 18 9 9 0 000-18z" stroke="currentColor" strokeWidth="0.5"/></svg>
              <span>Nagpur, Maharashtra, India</span>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-full bg-gray-800/50 hover:bg-orange-500/20 border border-white/10 text-white/80 transition"><Github size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-800/50 hover:bg-blue-600/10 border border-white/10 text-white/80 transition"><Linkedin size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-800/50 hover:bg-pink-500/10 border border-white/10 text-white/80 transition"><X size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-800/50 hover:bg-pink-500/10 border border-white/10 text-white/80 transition"><Instagram size={18} /></a>
            </div>

            <div className="hidden md:block mt-2 space-y-2">
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white bg-transparent hover:bg-white/5 transition">Work With Me</button>
              <a href="/resume_mohammad_imran.pdf" download className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15 transition border border-white/10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8l-6-4m6 4l6-4" /></svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Name + bio */}
          <motion.div 
            className="md:col-span-2 text-white"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
          >
            <p className="text-sm text-white/80 uppercase tracking-wider mb-4">About</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">Mohammad Imran</h1>
            <p className="text-lg text-white/70 mb-6">Full-Stack Developer | Next.js · React · Node.js</p>
            <p className="text-base text-white/80 max-w-3xl mb-6">Passionate FullStack Web Developer from Nagpur, pushing the boundaries of web technology to create immersive digital experiences. I build responsive, accessible web apps and enjoy learning new tools and frameworks to deliver delightful user experiences.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center px-5 py-3 bg-orange-500 text-black font-semibold rounded-lg">View my work</a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 border border-white/10 rounded-lg text-white hover:bg-white/5">Contact me</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-500"></div>
    </div>
    </div>
  );

}

export default Hero

