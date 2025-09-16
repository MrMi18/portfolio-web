import React from 'react'
import profileImage from '../assets/profile.jpg'

const Hero = () => {
      return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-900/10 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-between min-h-screen px-8 md:px-16">
        {/* Left content */}
        <div className="flex-1 max-w-2xl text-white">
          {/* About Me Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                🚀
              </div>
              <h2 className="text-white/80 tracking-wider uppercase">About Me</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-medium">
              hey, I'm Imran <span className="inline-block animate-bounce">👋</span>
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-8 font-mono">
              Passionate FullStack Web Developer from Nagpur,<br />
              pushing the boundaries of web technology to create<br />
              immersive digital experiences.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                🚀
              </div>
              <h2 className="text-white/80 tracking-wider uppercase">My Mission</h2>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 font-mono">
              Bridging the Gap Between Design and<br />
              Development: Where creativity meets<br />
              functionality, and innovation drives progress.
            </p>
          </div>

          {/* Quote */}
          <div className="italic text-white/60 font-mono">
            Keep moving, don't settle. <span className="inline-block">🚀</span>
          </div>
        </div>

        {/* Right side - Profile Image */}
        <div className="flex-shrink-0 ml-8">
          <div className="relative">
            <div className="w-80 h-96 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Imran - FullStack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
// 	return (
// 		<section className='mt-12'>
// 			<div className='mx-auto max-w-6xl px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 rounded-3xl overflow-hidden bg-gradient-to-br from-black/80 via-slate-900/75 to-transparent'>
// 				{/* Left: copy */}
// 				<div className='md:w-2/3 text-white'>
// 					<p className='mb-3 text-sm uppercase tracking-widest text-white/80'>About me</p>
// 					<h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight'>
// 						hey, I'm <span className='text-white'>Imran</span>
// 						<span className='inline-block ml-3 align-[-0.2em]'>👋</span>
// 					</h1>
// 					<p className='mt-6 max-w-2xl text-lg text-white/90'>
// 						Passionate FullStack Web Developer from Nagpur, building fast, accessible, and delightful web experiences.
// 					</p>

// 					<div className='mt-8 flex flex-wrap gap-3'>
// 						<a href='#work' className='inline-flex items-center rounded-full bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 text-sm font-semibold transition'>View my work</a>
// 						<a href='#contact' className='inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition'>Contact me</a>
// 					</div>

// 					<div className='mt-8 w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90'>
// 						<div className='flex items-center gap-3'>
// 							<span className='text-2xl'>🪄</span>
// 							<div>
// 								<div className='text-sm font-semibold tracking-wider'>🎨 My Mission</div>
// 								<div className='text-sm text-white/80'>My Mission
// Bridging the Gap Between Design and Development: Where creativity meets functionality, and innovation drives progress. Keep moving, don't settle. 🚀</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Right: portrait */}
// 				<div className='md:w-1/3 flex justify-center md:justify-end'>
// 					<img src={profile} alt='Profile' className='w-64 md:w-80 rounded-3xl shadow-2xl object-cover transform hover:scale-105 transition' />
// 				</div>
// 			</div>
// 		</section>
// 	)
}

export default Hero

