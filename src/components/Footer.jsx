import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-12 border-t border-white/10 pt-6'>
      <div className='mx-auto max-w-6xl px-4 text-sm text-white/70'>
        <div className='flex items-center justify-between'>
          <div>© {new Date().getFullYear()} Imran</div>
          <div className='flex gap-4'>
            <a href='#' className='text-white/70 hover:text-white'>Twitter</a>
            <a href='#' className='text-white/70 hover:text-white'>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
