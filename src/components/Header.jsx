import { Navbar } from './'
import Bannner from '../assets/cooking.png'
const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-gradient-to-t from-primary/25 to-transparent mb-5 rounded-xl flex flex-col md:flex-row justify-between p-3">
        <div className="text-6xl text-center md:text-start md:w-[50%] mt-5 font-semibold capitalize leading-relaxed">A plae where you can found all recipes</div>
        <img src={Bannner} alt="Lorem" className='w-96' />
      </div>
    </div>
  )
}

export default Header