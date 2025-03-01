const commentData = [
    {
        name: "Soumay Sikchi",
        cmnt: "This video is nice",
        replies: [
            {
                name: "Akshay Saini",
                cmnt: "You say true",
                replies: [
                    {
                        name: "Rakesh",
                        cmnt: "Akshay you here",
                        replies: [
                            {
                                name: "Rajesh Saini",
                                cmnt: "Like kro video ko",
                                replies: [
                                    {
                                        name: "Sam",
                                        cmnt: "yes Like the video",
                                        replies: []
                                    }
                                ]
                            },
                            {
                                name: "Suhani",
                                cmnt: "Haa sahi bola",
                                replies: [
                                    {
                                        name: "Sakshi",
                                        cmnt: "Suhani tune sahi bola video mast hai",
                                        replies: [
                                            {
                                                name: "Priya",
                                                cmnt: "Bilkul sahi kaha!",
                                                replies: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "Suhani",
                cmnt: "Haa sahi bola",
                replies: [
                    {
                        name: "Sakshi",
                        cmnt: "Suhani tune sahi bola video mast hai",
                        replies: [
                            {
                                name: "Priya",
                                cmnt: "Bilkul sahi kaha!",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Rahul Sharma",
        cmnt: "Informative and well-explained content!",
        replies: [
            {
                name: "Ankit",
                cmnt: "Couldn't agree more!",
                replies: []
            },
            {
                name: "Neha",
                cmnt: "Really helpful for beginners.",
                replies: [
                    {
                        name: "Vikas",
                        cmnt: "Absolutely, a great starting point!",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Amit Kumar",
        cmnt: "Great visuals and explanation",
        replies: [
            {
                name: "Riya",
                cmnt: "Yes, the visuals make it easy to understand.",
                replies: [
                    {
                        name: "Aarav",
                        cmnt: "I especially liked the animations.",
                        replies: []
                    }
                ]
            },
            {
                name: "Kavya",
                cmnt: "Totally loved the editing!",
                replies: []
            }
        ]
    },
    {
        name: "Priyanka Sen",
        cmnt: "Can you make a tutorial on advanced topics?",
        replies: [
            {
                name: "Mohit",
                cmnt: "Yes, advanced topics would be great!",
                replies: []
            },
            {
                name: "Sonali",
                cmnt: "Looking forward to more content!",
                replies: [
                    {
                        name: "Rohit",
                        cmnt: "Same here!",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Deepak Gupta",
        cmnt: "I learned so much from this video!",
        replies: [
            {
                name: "Megha",
                cmnt: "Same here, it was very educational.",
                replies: []
            }
        ]
    },
    {
        name: "Isha Raj",
        cmnt: "This is one of the best tutorials I’ve watched.",
        replies: [
            {
                name: "Nikhil",
                cmnt: "I completely agree with you.",
                replies: []
            }
        ]
    },
    {
        name: "Karan Malhotra",
        cmnt: "I didn’t understand the part at 5:30, can someone explain?",
        replies: [
            {
                name: "Tina",
                cmnt: "Sure, let me break it down for you.",
                replies: [
                    {
                        name: "Harish",
                        cmnt: "She explained it perfectly!",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Anjali Kapoor",
        cmnt: "Loved the way you simplified this topic.",
        replies: []
    },
    {
        name: "Rohini",
        cmnt: "This video is a game changer for me!",
        replies: [
            {
                name: "Vivek",
                cmnt: "Totally agree!",
                replies: []
            }
        ]
    },
    {
        name: "Aakash Verma",
        cmnt: "Can you recommend more resources?",
        replies: []
    },
    {
        name: "Manisha",
        cmnt: "Very concise and to the point.",
        replies: []
    },
    {
        name: "Rajesh",
        cmnt: "Subscribed to your channel after watching this!",
        replies: []
    },
    {
        name: "Komal",
        cmnt: "This is exactly what I needed, thank you!",
        replies: [
            {
                name: "Piyush",
                cmnt: "Yes, it’s very relevant.",
                replies: []
            }
        ]
    },
    {
        name: "Siddharth",
        cmnt: "Can you make a playlist for similar videos?",
        replies: []
    },
    {
        name: "Alok",
        cmnt: "Watched it twice to fully understand. Great content!",
        replies: []
    }
];


export default commentData;

const GOOGLE_API_KEY = "AIzaSyA0kJWODEJ9d9Mml8l3j2C8YI7dhf0jKc4";



export const YOUTUBE_VIDEOS_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://proxy.cors.sh/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="  

export const OFFSET_LIVE_CHAT = 110; 