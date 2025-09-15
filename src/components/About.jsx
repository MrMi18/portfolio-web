import React from 'react'
import profile from '../assets/profile.jpg'

const About = () => {
  return (
    <section id='about' className='relative mx-4 mt-6 overflow-hidden rounded-3xl ring-1 ring-white/10'>
      <img src={profile} alt='Profile background' className='absolute inset-0 h-full w-full object-cover object-center md:object-right' />

      <div className='absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/30' />
      <div className='absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-emerald-600/30 via-cyan-500/20 to-transparent mix-blend-screen' />

      <div className='relative mx-auto max-w-6xl px-6 py-12 md:py-20'>
        <p className='mb-3 text-sm uppercase tracking-widest text-white/80 flex items-center gap-2'>
          <span className='inline-block h-1.5 w-1.5 rounded-full bg-white/80' /> About me
        </p>
        <h1 className='text-[40px] leading-tight font-extrabold md:text-[64px] md:leading-[1.05] tracking-tight'>
          hey, I'm <span className='text-white'>Imran</span> <span className='align-[-0.2em]'>👋</span>
        </h1>
        <p className='mt-4 max-w-2xl text-base md:text-lg text-white/90'>
          Passionate FullStack Web Developer from Nagpur, pushing the boundaries of web technology to create immersive digital experiences.
        </p>

        <div className='mt-10 w-full max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-6 text-white/90 shadow-2xl backdrop-blur-xl'>
          <p className='mb-3 text-sm font-semibold tracking-widest text-white/90 flex items-center gap-2'>
            <span className='text-lg'>🪄</span> MY MISSION
          </p>
          <p className='text-white/90'>
            Bridging the Gap Between Design and Development: Where creativity meets functionality, and innovation drives progress.
          </p>
          <p className='mt-6 italic text-white/90'>Keep moving, don't settle. <span className='not-italic'>🚀</span></p>
        </div>

        <div className='mt-8 flex gap-3'>
          <a href='#work' className='inline-flex items-center rounded-lg bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition-colors'>View my work</a>
          <a href='#contact' className='inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors'>Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default About
