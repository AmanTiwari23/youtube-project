import React from "react";
import { MdHome, MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebar = useSelector((state) => state.appSlice.sideBar);

  return (
    <div className="z-[100] mt-12">
      {sidebar ? (
        <div className="h-screen fixed w-[14rem] top-[86px] bg-[#0f0f0f]">
          <div className="text-white font-sans font-normal text-xl cursor-pointer pt-2">
            <div className="home   hover:rounded-2xl p-5 m-3 hover:bg-[#222222]">
              <Link to='/' className="flex  text-xl  gap-2 items-center">
                <MdHome size={28} />
                <p>Home</p>
              </Link>
            </div>
            <div className="history flex  gap-2    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#222222]">
              <FaHistory size={28} />
              <p>History</p>
            </div>
            <div className="subscription flex gap-2    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#222222]">
              <MdSubscriptions size={28} />
              <p>Subscriptions</p>
            </div>
            <div className="LikedVideos flex  gap-2 text-center    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#222222]">
              <BiSolidVideos size={28} />
              <p>Liked Videos</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen fixed w-[7rem] top-[86px] -z-10 bg-[#0f0f0f]">
          <div className="text-white font-sans font-normal text-xs cursor-pointer pt-2">
            <div className="home  hover:rounded-2xl p-5 m-3 hover:bg-[#222222]">
              <Link to ='/' className="flex flex-col gap-1 items-center ">
              <MdHome size={28} />
              <p>Home</p></Link>
              
            </div>
            <div className="history flex flex-col gap-1    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#222222]">
              <FaHistory size={28} />
              <p>History</p>
            </div>
            <div className="subscription flex flex-col gap-1    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#222222]">
              <MdSubscriptions size={28} />
              <p>Subscriptions</p>
            </div>
            <div className="LikedVideos flex flex-col gap-1 text-center    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#222222]">
              <BiSolidVideos size={28} />
              <p>Liked Videos</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;