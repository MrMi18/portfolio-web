import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='mt-12'>
      <div className='rounded-2xl bg-white/5 p-6'>
        <h3 className='text-xl font-semibold'>Get in touch</h3>
        <p className='mt-2 text-white/80'>Have a project or just want to say hi? Send a message.</p>

        <form className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <input className='col-span-1 sm:col-span-1 rounded-md bg-transparent border border-white/10 px-3 py-2' placeholder='Your name' />
          <input className='col-span-1 sm:col-span-1 rounded-md bg-transparent border border-white/10 px-3 py-2' placeholder='Email' />
          <textarea className='col-span-1 sm:col-span-2 rounded-md bg-transparent border border-white/10 px-3 py-2 h-24' placeholder='Message' />
          <button type='submit' className='col-span-1 sm:col-span-2 inline-flex items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-white font-semibold'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
