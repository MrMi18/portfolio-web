import React from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'My work', href: '#work' },
    { label: 'Blog', href: '#blog' },
  ]

  return (
    <header className='sticky top-0 z-50 w-full bg-transparent'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
        <a href='#' className='text-white text-2xl font-extrabold tracking-wider'>MI.</a>

        <nav className='hidden md:flex items-center gap-6'>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className='text-white/80 hover:text-white transition-colors text-sm'>
              {item.label}
            </a>
          ))}
        </nav>

        <div className='hidden md:flex items-center gap-4'>
          <a href='#settings' className='text-white/80 hover:text-white transition-colors text-sm'>Settings</a>
          <a href='#contact' className='inline-flex items-center rounded-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-semibold transition'>Hire me</a>
        </div>

        <button
          type='button'
          aria-label='Toggle menu'
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className='md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20'
        >
          <svg className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
          <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className='md:hidden border-t border-white/10 bg-black/90'>
          <div className='mx-auto max-w-6xl px-4 py-3'>
            <nav className='flex flex-col gap-3'>
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className='text-white/90 hover:text-white transition-colors text-base'>
                  {item.label}
                </a>
              ))}
              <a href='#settings' className='text-white/90 hover:text-white transition-colors text-base'>Settings</a>
              <a href='#contact' className='inline-flex items-center rounded-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-semibold transition'>Hire me</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar