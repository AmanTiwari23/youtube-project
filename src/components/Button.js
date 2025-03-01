import React from 'react'

const Button = ({text}) => {
  return (
    <div className=' flex-shrink-0 '>
        <button className='bg-[#222222]  px-4 py-1 rounded-md transition-all delay-100  hover:bg-[#535252]'>{text}</button>
    </div>
  )
}

export default Button