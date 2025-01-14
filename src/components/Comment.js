import React from "react";

export const commentsData = [
  {
    name: "aman",
    text: "this is a comment",
    replies: [
      {
        name: "aman",
        text: "this is a comment",
        replies: [
          {
            name: "aman",
            text: "this is a comment",
            replies: [
              {
                name: "aman",
                text: "this is a comment",
                replies: [],
              },
            ],
          },
          {
            name: "aman",
            text: "this is a comment",
            replies: [],
          },
        ],
      },
      {
        name: "aman",
        text: "this is a comment",
        replies: [],
      },
    ],
  },
  {
    name: "aman",
    text: "this is a comment",
    replies: [],
  },
  {
    name: "aman",
    text: "this is comment",
    replies: [],
  },
  {
    name: "aman",
    text: "this is a comment",
    replies: [],
  },
];
export const Comment = ({ data }) => { 
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm p-1 rounded-lg bg-gray-200 m-2">
      <img
        className="w-12 h-12 "
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
