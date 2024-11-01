import React from "react";
import { commentsData, Comment } from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div  key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
       <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
