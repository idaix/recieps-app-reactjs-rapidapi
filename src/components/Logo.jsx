import ChefLogo from '../assets/chef.png'

const Logo = () => (
    <span className='flex gap-1 items-center'>
        <img src={ChefLogo} alt="logo" className='w-6 h-6' />
        <span className='text-primary font-semibold italic font-mono text-xl'>Wasfa</span>
    </span>
)

export default Logo