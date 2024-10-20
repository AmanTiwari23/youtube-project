const GOOGLE_API_KEY = "AIzaSyA0kJWODEJ9d9Mml8l3j2C8YI7dhf0jKc4";

export const YOUTUBE_VIDEOS_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://proxy.cors.sh/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="  