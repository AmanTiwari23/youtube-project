import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Commentcontainer from "./Commentcontainer";
import LiveChat from "./LiveChat";
import { useDispatch } from 'react-redux'
import {addMessages} from "../Store/Slices/liveSlice";

const Watch = () => {
  const sidebar = useSelector((state) => state.appSlice.sideBar);
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  const [data, setData] = useState(null);
  const [cmnt,setCmnt] = useState("");
  const dispatch = useDispatch();

  // const {snippet,statistics} = info;
  // const {thumbnails} = snippet;

  function formatViews(number) {
    number = Number(number);
    if (number >= 1_000_000) {
      return (number / 1_000_000).toFixed(1) + "M"; // Millions
    } else if (number >= 1_000) {
      return (number / 1_000).toFixed(1) + "K"; // Thousands
    } else {
      return number.toString(); // Less than 1,000
    }
  }
  function timeAgo(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);
    const diffInSeconds = Math.floor((now - date) / 1000);

    const secondsInMinute = 60;
    const secondsInHour = secondsInMinute * 60;
    const secondsInDay = secondsInHour * 24;
    const secondsInMonth = secondsInDay * 30; // Approximation
    const secondsInYear = secondsInDay * 365; // Approximation

    if (diffInSeconds >= secondsInYear) {
      const years = Math.floor(diffInSeconds / secondsInYear);
      return years + (years === 1 ? " year ago" : " years ago");
    } else if (diffInSeconds >= secondsInMonth) {
      const months = Math.floor(diffInSeconds / secondsInMonth);
      return months + (months === 1 ? " month ago" : " months ago");
    } else if (diffInSeconds >= secondsInDay) {
      const days = Math.floor(diffInSeconds / secondsInDay);
      return days + (days === 1 ? " day ago" : " days ago");
    } else if (diffInSeconds >= secondsInHour) {
      const hours = Math.floor(diffInSeconds / secondsInHour);
      return hours + (hours === 1 ? " hour ago" : " hours ago");
    } else if (diffInSeconds >= secondsInMinute) {
      const minutes = Math.floor(diffInSeconds / secondsInMinute);
      return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
    } else {
      return "just now";
    }
  }

  async function getData() {
    const dataURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key={APIKEY}`;
    try {
      let res = await fetch(dataURL);
      let op = await res.json();
      setData(op.items[0]);
    } catch {
      alert("Internet thik kro");
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className={`z-20  text-white w-full py-2 px-4 mt-20  ${
        sidebar ? `ml-[14rem]` : `ml-[7rem]`
      }`}
    >
      <div className="rounded-xl ml-3 w-full flex gap-6">
        <div className="w-[70%]">
          <iframe
            className="rounded-xl w-full"
            height="515"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {data && (
            <div className="pl-2 pt-1">
              <p className=" font-bold text-2xl text-wrap w-[100%]">
                {data?.snippet.title}
              </p>
              <p className="flex items-end text-2xl font-bold gap-2">
                {" "}
                {data.snippet.channelTitle} <RiVerifiedBadgeFill />
              </p>
              <div className="flex">
                <p>{formatViews(data?.statistics?.viewCount)} | </p>
                <p>{timeAgo(data?.snippet.publishedAt)}</p>
              </div>
            </div>
          )}
        </div>
        <div className="border-2 w-[24%]  rounded-2xl mr-8 border-gray-200">
          <p className="p-4 text-xl font-semibold  border-b-2 mb-2">Top Chat</p>
          <LiveChat/>
            <form className="flex" onSubmit={(e)=>{e.preventDefault()
            dispatch(addMessages({
              userName:'User123',
              msg:cmnt,
            }))
            }}>
              <input value={cmnt} onChange={(e)=>{
                setCmnt(e.target.value)

              }}
               className="m-2 text-black rounded-lg p-2" type="text" placeholder="Type Comment" />
              <button className=" m-2 px-8 py-0 rounded-xl bg-green-500">Send</button>
            </form>
         
        </div>
      </div>

      <div className="mt-3">
        <h2 className="px-1 ml-12 text-2xl font-bold mb-3">
          {data?.statistics.commentCount} Comments
        </h2>
        <div className="ml-10">
          <Commentcontainer />
        </div>
      </div>
    </div>
  );
};

export default Watch;
