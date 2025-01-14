import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: randomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      <div>
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div> 
    </div>

    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=> {
           e.preventDefault();
           dispatch(
            addMessage({
              name: "Aman Tiwari",
              message: liveMessage,
            })
           );
           setLiveMessage("")
    }}>
      <input type="text" className="px-2 w-10/12 bg-blue-100 " value={liveMessage} onChange={(e)=>{
        setLiveMessage(e.target.value);
      }}/>
      <button className="px-2 mx-2 bg-green-100">Send</button>
    </form>
    </>
  );
};

export default LiveChat; 
