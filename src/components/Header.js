// import React, { useEffect, useState} from "react";
// import { toggleMenu } from "../utils/appSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { YOUTUBE_SEARCH_API } from "../utils/constent";
// import { cacheResults} from "../utils/searchSlice";

// const Head = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const searchCache = useSelector((store) => store.search);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchCache[searchQuery]) {
//         setShowSuggestions(searchCache[searchQuery]);
//       } else {
//         getSearchSugestions();
//       }
//     }, 200);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchQuery]);

//   const getSearchSugestions = async () => {
    
//     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
//     const json = await data.json();
//     setSuggestions(json[1]);

//     dispatch(
//       cacheResults({
//         [searchQuery]: json[1],
//       })
//     );
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchQuery(suggestion);
//     setShowSuggestions(false);
//   }

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };

//   return (
//     <div className="grid grid-flow-col p-5 m-2 shadow-lg">
//       <div className="flex col-span-1">
//         <img
//           onClick={() => toggleMenuHandler()}
//           className="h-6 cursor-pointer"
//           src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
//           alt="hamburger"
//         />
//         <img
//           className="h-6 mx-2"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
//           alt="logo"
//         />
//       </div>
//       <div className="col-span-10">
//         <div>
//           <input
//             type="text"
//             className="w-1/2 border border-gray-400 p-1 rounded-l-full"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onFocus={() => setShowSuggestions(true)}
//             onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//           />
//           <button className="px-5 p-1 bg-gray-200 rounded-r-full border border-gray-400 border-l-0">
//             🔍
//           </button>
//         </div>
//         {showSuggestions && (
//           <div className="fixed bg-white py-2 px-2 w-[35rem] shadow-lg rounded-lg z-10 border border-gray-50">
//             <ul>
//               {suggestions.map((s) => (
//                 <li key={s} className="py-2 shadow-sm hover:bg-gray-200" onClick={ ()=> handleSuggestionClick(s)}>
//                   🔍 {s}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       <div className="col-span-1">
//         <img
//           className="h-8"
//           alt="User"
//           src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
//         />
//       </div>
//     </div>
//   );
// };

// export default Head;

import React, { useEffect, useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/devtube.png";
import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { toogleSideBar } from "../Store/Slices/appSlice";
import { addToCache } from "../Store/Slices/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const cacheRes = useSelector((state) => state.searchSlice);
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1); // To track the current selection
  const searchBoxRef = useRef(null);

  async function fetchSearchData() {
    const url = `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&cp=3&gs_id=100&q=${encodeURIComponent(
      inputValue
    )}&xhr=t&xssi=t&gl=IN`;
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const text = await res.text(); // Get the response as plain text
      const jsonString = text.replace(/^\)\]\}'/, ""); // Strip the `)]}'` prefix
      const data = JSON.parse(jsonString); // Parse the remaining JSON
      setSearchData(data[1]);
      dispatch(addToCache({ [inputValue]: data[1] }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (cacheRes[inputValue]) {
        setSearchData(cacheRes[inputValue]);
      } else {
        fetchSearchData();
      }
    }, 200);

    return () => {
      clearTimeout(timeId);
    };
  }, [inputValue]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setSearchData(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenu = () => {
    dispatch(toogleSideBar());
  };

  const searchClickHandler = (query) => {
    setSearchData(null);
    setInputValue("");
    nav(`/results?search_query=${query}`);
  };

  const handleKeyDown = (event) => {
    if (!searchData || searchData.length === 0) return;

    if (event.key === "ArrowDown") {
      setHighlightIndex((prevIndex) =>
        prevIndex === searchData.length - 1 ? 0 : prevIndex + 1
      );
    } else if (event.key === "ArrowUp") {
      setHighlightIndex((prevIndex) =>
        prevIndex === 0 ? searchData.length - 1 : prevIndex - 1
      );
    } else if (event.key === "Enter") {
      if (highlightIndex >= 0) {
        searchClickHandler(searchData[highlightIndex][0]);
      }
    }
  };

  return (
    <div
      className="text-white w-full z-50 pb-4 grid grid-flow-col pt-5 px-5 items-center fixed bg-[#0f0f0f]"
      ref={searchBoxRef}
    >
      <div className="flex items-center pl-4 gap-8 col-span-3">
        <GiHamburgerMenu
          onClick={handleMenu}
          size={52}
          color="white"
          className="cursor-pointer p-3 transition-all delay-75  hover:rounded-full hover:bg-[#222222]"
        />
        <div className="flex items-center">
          <img src={Logo} width={42} alt="" />
          <p className="text-3xl font-bold font-sans">DevTube</p>
        </div>
      </div>

      <div className="flex col-span-8  items-center">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          value={inputValue}
          className="w-3/5 h-10 py-1 px-4 bg-[#0f0f0f] border-2 border-gray-800 text-white rounded-l-full text-xl"
          type="search"
          placeholder="Search"
        />
        <button
          className="h-10 py-1 px-4  bg-[#222222] border-2 border-gray-800 border-l-0 rounded-r-full"
          onClick={() => searchClickHandler(inputValue)}
        >
          <FaSearch size={18} />
        </button>
      </div>

      <div className="">
        <CgProfile size={34} />
      </div>

      {searchData && searchData.length > 1 && (
        <div className="absolute left-[31rem] top-20 py-3 bg-[#1e1d1d] w-2/5 rounded-xl">
          <ul>
            {searchData.map((ele, idx) => (
              <li
                onClick={() => searchClickHandler(ele[0])}
                key={idx}
                className={`flex items-center gap-3 text-sm cursor-pointer px-4 py-2 ${
                  highlightIndex === idx ? "bg-[#575454]" : "hover:bg-[#575454]"
                }`}
              >
                <FaSearch size={12} />
                {ele[0]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;