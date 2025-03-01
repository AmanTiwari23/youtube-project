import React from "react";
import commentData from "../Utils/Constants";
import { CgProfile } from "react-icons/cg";

const Commentcontainer = ()=>{
    return(
        <CommentList commentData={commentData}/>
    )
}
const CommentList = ({commentData}) => {
  return(
  <div className="mt-4">
    {
        commentData.map((data,idx)=>(
            <div className="mb-8 p-4 bg-black rounded-2xl" key={idx}>
                <CommentCard data={data}/>
                {data.replies.length>0 &&
                    <div className="ml-8 border-white border-l-2">
                    <CommentList commentData={data.replies}/>
                </div>
                }
               

            </div>
        ))
    }
  </div>
  )
};



const CommentCard=({data})=>{
    const {name,cmnt} = data;
    return(
        <div className="flex items-center mb-4  gap-3">
            <div><CgProfile size={28} /></div>
            <div>
                <p className="font-bold">{name}</p>
                <p className="font-light">{cmnt}</p>
            </div>
        </div>
    )
}

export default Commentcontainer;
