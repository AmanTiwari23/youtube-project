import React from "react";

const ResultCard = ({info}) => {

  return (
    <div className="w-[420px] rounded-t-xl cursor-pointer mb-4">
      <div className="rounded-t-xl">
        <img
          className="w-full rounded-xl"
          src={info.snippet.thumbnails?.medium?.url}
          alt=""
        />
      </div>
     
    </div>
  );
};

export default ResultCard;