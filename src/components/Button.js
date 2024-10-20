import React from 'react'

const Button = ({name}) => {
  return (
    <div >
     <button className='px-4 py-2 rounded-lg m-2 bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button
