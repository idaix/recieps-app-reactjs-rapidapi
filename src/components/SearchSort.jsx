import React, { useState } from 'react'

const SearchSort = ({ searchValue, setSearchValue, setIsOnSearch }) => {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(value)
    setIsOnSearch(true)
  }

  return (
    <div className='flex items-center gap-1 mb-5'>
        <form className="flex-1 rounded-full" onSubmit={handleSubmit}>
          <input type="text" placeholder='Search...' className='border py-2 px-5 w-full rounded-full'
            onChange={(e)=>setValue(e.target.value)}
            value={value}
          />
        </form>
        <select className="border py-2 px-5 rounded-full bg-white">
          <option value="1">Sort</option>
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
        </select>
    </div>
  )
}

export default SearchSort