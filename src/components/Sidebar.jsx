import Loader from './Loader/Loader'

const Sidebar = ({ categories, setSearchValue, setIsOnSearch }) => {
  if(!categories.length) return <div className="w-full"><Loader /></div>
  return (
    <div className='w-64 '>
      <ul>
        {categories.map(category=>(
          <li 
            key={category?.['tracking-id']}
            className="flex items-center text-lg font-semibold px-5 py-2 cursor-pointer hover:bg-primary/30 rounded-full duration-300"
            onClick={()=>{
              setSearchValue(category?.display?.displayName);
              setIsOnSearch(true)
            }}
          >
            
            <img src={category?.display?.iconImage} className="w-7 h-7 p-1 rounded-full bg-gradient-to-tr from-white to-primary/75 mr-4" alt="icon" />
            <span>{category?.display?.displayName}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar