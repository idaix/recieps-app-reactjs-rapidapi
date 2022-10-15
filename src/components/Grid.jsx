import React from 'react'

const Grid = ({ children }) => {
  return (
    <div className='columns-1 md:columns-2 lg:columns-3 gap-5'>
        {children}
    </div>
  )
}

export default Grid