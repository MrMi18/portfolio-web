import React from 'react'

const projects = [
  { title: 'Project One', desc: 'Short description of project one', href: '#' },
  { title: 'Project Two', desc: 'Short description of project two', href: '#' },
  { title: 'Project Three', desc: 'Short description of project three', href: '#' },
]

const Projects = () => {
  return (
    <section id='work' className='mt-8'>
      <h2 className='text-xl font-semibold mb-4'>Selected work</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {projects.map((p) => (
          <a key={p.title} href={p.href} className='block rounded-2xl p-4 bg-white/5 hover:bg-white/6 transition'>
            <h3 className='font-semibold text-lg'>{p.title}</h3>
            <p className='mt-2 text-sm text-white/80'>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
