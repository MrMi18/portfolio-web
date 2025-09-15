import React from 'react'
import profile from '../assets/profile.jpg'

const Hero = () => {
	return (
		<section className='mt-12'>
			<div className='mx-auto max-w-6xl px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 rounded-3xl overflow-hidden bg-gradient-to-br from-black/80 via-slate-900/75 to-transparent'>
				{/* Left: copy */}
				<div className='md:w-2/3 text-white'>
					<p className='mb-3 text-sm uppercase tracking-widest text-white/80'>About me</p>
					<h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight'>
						hey, I'm <span className='text-white'>Imran</span>
						<span className='inline-block ml-3 align-[-0.2em]'>👋</span>
					</h1>
					<p className='mt-6 max-w-2xl text-lg text-white/90'>
						Passionate FullStack Web Developer from Nagpur, building fast, accessible, and delightful web experiences.
					</p>

					<div className='mt-8 flex flex-wrap gap-3'>
						<a href='#work' className='inline-flex items-center rounded-full bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 text-sm font-semibold transition'>View my work</a>
						<a href='#contact' className='inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition'>Contact me</a>
					</div>

					<div className='mt-8 w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90'>
						<div className='flex items-center gap-3'>
							<span className='text-2xl'>🪄</span>
							<div>
								<div className='text-sm font-semibold tracking-wider'>MY MISSION</div>
								<div className='text-sm text-white/80'>Bridging the gap between design and development.</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right: portrait */}
				<div className='md:w-1/3 flex justify-center md:justify-end'>
					<img src={profile} alt='Profile' className='w-64 md:w-80 rounded-3xl shadow-2xl object-cover transform hover:scale-105 transition' />
				</div>
			</div>
		</section>
	)
}

export default Hero

