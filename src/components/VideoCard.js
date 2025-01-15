import React from 'react'

const VideoCard = ({info}) => {
   
    const {snippet, statistics} = info;
    const { channelTitle, title,thumbnails} = snippet;
  return (
    <div className='p-2 m-4 w-72 shadow-lg rounded-lg hover:bg-gray-300'>
      <img className='rounded-lg object-cover w-72 h-44 '  src={thumbnails.medium.url} alt='thumb nail'/>
      <ul>
        <li className='font-bold py-2 truncate ...'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
