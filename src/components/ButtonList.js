
import React from 'react'
import Button from './Button'


const ButtonList = () => {
    const buttonList = ["All","Data Structure","Web Development","AI","Data Science","Cloud and Devops","Cyber Security","Live","ML","Block Chain development","Web-3","UI/UX","Virtual Reality"]
  return (
    <div className='flex fixed items-center  bg-[#0f0f0f]  gap-3 py-4 overflow-x-scroll scrollbar-hide px-3 '> 
        {
            buttonList.map((ele)=>{
              
                return <Button text={ele} key={ele} />
            })
        }
       
    </div>
  )
}

export default ButtonList;