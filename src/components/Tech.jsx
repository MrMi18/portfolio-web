import React from 'react'

const tech = ['React', 'Tailwind', 'Vite', 'Node']

const Tech = () => {
  return (
    <section id='tech' className='mt-8'>
      <h3 className='text-lg font-semibold mb-3'>Tech I use</h3>
      <div className='flex flex-wrap gap-2'>
        {tech.map((t) => (
          <span key={t} className='px-3 py-1 rounded-full bg-white/5 text-sm text-white/90'>{t}</span>
        ))}
      </div>
    </section>
  )
}

export default Tech
