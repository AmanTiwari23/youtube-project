import React, { useEffect } from 'react'
import LiveChatCard from './LiveChatCard'
import { useDispatch, useSelector } from 'react-redux'
import {generateRandomUsername,generateRandomChatMessage} from "../Components/ChatGen"
import {addMessages} from "../Store/Slices/liveSlice";
const LiveChat = () => {
  const msgs = useSelector((state)=>state.liveSlice);
  const dispatch = useDispatch();

  useEffect(()=>{

    const i = setInterval(()=>{
      dispatch(addMessages({
        userName:generateRandomUsername(),
        msg:generateRandomChatMessage()
      }))
    },2000);

    return () =>  clearInterval(i);
  },[])
 

  return (
    <div className='overflow-y-scroll flex flex-col-reverse  h-[400px]'>
      {
        msgs.map((ele,idx)=>{
          return  <LiveChatCard key={idx} ele={ele}/>
        })
      }
    </div>
  )
}

export default LiveChat