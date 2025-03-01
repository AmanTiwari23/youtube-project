import React from "react";
import Sidebar from "../Components/Sidebar";
import MainCtn from "../Components/MainCtn";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex bg-[#0f0f0f]">
      <Sidebar />
      <Outlet/>
    </div>
  );
};

export default Body;