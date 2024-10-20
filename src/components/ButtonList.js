import React from "react";
import Button from "./Button";
import { useRef } from "react";


const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Song",
    "Cricket",
    "Cooking",
    "Live",
    "Soccer",
    "Valentines",
    "Action",
    "Funny",
    "Hot",
    "RRB",
    "NTPC",
    "SBI",
    "SSC"
    
  ];
  const scrollRef = useRef(null);

  // Function to scroll to the left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  // Function to scroll to the right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <div className="relative max-w-screen-xl">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 p-2 rounded-full z-10"
      >
        &#8249;
      </button>

      <div
        ref={scrollRef}
        className="flex no-scrollbar overflow-x-scroll space-x-4 p-4 px-4"
      >
        {buttonList.map((button, index) => (
          <Button key={index} name={button} />
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 p-2 rounded-full z-10"
      >
       &#8250;
      </button>
    </div>
  );
};

export default ButtonList;
