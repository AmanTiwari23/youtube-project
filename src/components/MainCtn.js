import React from 'react'
import { useSelector } from "react-redux";
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';


const MainCtn = () => {
  const sidebar = useSelector((state) => state.appSlice.sideBar);

  return (
    <div className={`z-20 text-white py-2 px-0 mt-16   ${sidebar?`ml-[14rem]`:`ml-[7rem]`}`}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainCtn