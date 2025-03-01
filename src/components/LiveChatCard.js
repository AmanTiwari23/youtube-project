import React from 'react'
import { CgProfile } from "react-icons/cg";

const LiveChatCard = ({ele}) => {
  return (
    <div className='p-4 flex flex-wrap gap-2 items-center border-b-2 border-gray-800 '>
      <CgProfile size={24} />
      <p className='text-lg'>{ele.userName}</p>
      <p className='text-wrap'>{ele.msg}</p>
    </div>
  )
}

export default LiveChatCard