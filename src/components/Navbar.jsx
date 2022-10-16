import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
        <Logo />
        <button>Explore recipes</button>
    </nav>
  )
}

export default Navbar