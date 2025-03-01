import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { setVideos } from "../Store/Slices/appSlice";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const Results = () => {
  const [searchParam] = useSearchParams();
  const inputValue = searchParam.get("search_query");
  const videos = useSelector((state) => state.appSlice.videos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fetchSearchData() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputValue}&type=video&key={APIKEY}`;

    try {
      const res = await fetch(url);
      const op = await res.json();
      dispatch(setVideos(op.items));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchSearchData();
  }, []);

  const handleNavigation = (videoId) => {
    navigate(`/watch?v=${videoId}`);
  };

  return (
    <div>
      {videos ? (
        <div className="flex mt-16 flex-wrap bg-[#0f0f0f] gap-1 justify-evenly">
          {videos.map((ele,idx) => (
            <div
              key={idx}
              onClick={() => handleNavigation(ele.id.videoId)}
              className="cursor-pointer">
              <ResultCard  info={ele} />
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Results;