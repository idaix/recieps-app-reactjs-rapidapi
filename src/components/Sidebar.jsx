import React from 'react'
import Loader from './Loader/Loader'

const Sidebar = ({ categories }) => {
  if(!categories.length) return <div className="w-full"><Loader /></div> 
  return (
    <div className='w-72'>
      <ul>
        {categories.map(category=>(
          <li key={category?.['tracking-id']} className="flex items-center text-lg font-semibold p-3 cursor-pointer hover:bg-primary/30 rounded-full duration-300">
            <img src={category?.display?.iconImage} className="w-6 h-6 mr-4" alt="icon" />
            <span>{category?.display?.displayName}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar