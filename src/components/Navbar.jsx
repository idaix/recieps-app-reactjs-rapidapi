import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-5'>
        <Logo />
        <button>Explore recipes</button>
    </nav>
  )
}

export default Navbar