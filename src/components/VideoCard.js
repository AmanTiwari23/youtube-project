import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {thumbnails} = snippet;
    function formatViews(number) {
        if (!number) {
            return "0"; // Default to "0" views if the value is missing
          }
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
    
    
  return (
    <div className='w-[420px] rounded-t-xl cursor-pointer mb-4'>
        <div className='rounded-t-xl'>
            <img className='w-full rounded-xl' src={thumbnails?.medium?.url} alt="" />
        </div>
        <div className='pl-2 pt-1'>
            <p className=' font-bold text-wrap w-[80%]'>{snippet?.title.substring(0,50)}...</p>
            <p>{snippet.channelTitle}</p>
            <div className='flex'>
                <p>{formatViews(statistics?.viewCount)} |  </p>
                <p>{timeAgo(snippet?.publishedAt)}</p>

            </div>
        </div>
    </div>
  )
}

export default VideoCard
