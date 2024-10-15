import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

import { BiSolidUserAccount } from "react-icons/bi";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import { FaFire } from "react-icons/fa6";
import { IoMdMusicalNote } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { IoIosRadio } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";   
import { FaRegNewspaper } from "react-icons/fa6";
import { MdSportsBaseball } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { GiHanger } from "react-icons/gi";

import { IoLogoYoutube } from "react-icons/io";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
function Slidebar() { 
    const slidebarItems = [ 
        {
            id:1,
            name:"Home",
            icon:<IoMdHome />
        },
        {
            id:2,
            name:"Shorts",
            icon:<SiYoutubeshorts />
        },
        {
            id:3,
            name:"Shorts",
            icon:<MdSubscriptions />
        }
    ]
    const slidebarItems2 = [ 
        {
            id:1,
            name:"Your channel",
            icon:<BiSolidUserAccount />
        },
        {
            id:2,
            name:"History",
            icon:<MdOutlineHistory />
        },
        {
            id:3,
            name:"Playlist",
            icon:<MdOutlinePlaylistPlay />
        },
        {
            id:4,
            name:"Your videos",
            icon:<GoVideo />
        },
        {
            id:5,
            name:"Watch later",
            icon:<MdWatchLater />
        },
        {
            id:6,
            name:"Liked video",
            icon:<BiSolidLike />
        }
    ]
    const slidebarItems3 = [ 
        {
            id:1,
            name:"Trending",
            icon:<FaFire />
        },
        {
            id:2,
            name:"Shopping",
            icon:<FaBagShopping />
        },
        {
            id:3,
            name:"Music",
            icon:<IoMdMusicalNote />
        },
        {
            id:4,
            name:"Live",
            icon:<IoIosRadio />
        },
        {
            id:5,
            name:"Gaming",
            icon:<SiYoutubegaming />
        },
        {
            id:6,
            name:"News",
            icon:<FaRegNewspaper />
        },
        {
            id:7,
            name:"Sports",
            icon:<MdSportsBaseball />
        },
        {
            id:8,
            name:"Courses",
            icon:<SiCoursera />
        },
        {
            id:9,
            name:"Fashion & Beauty",
            icon:<GiHanger />
        },
        {
            id:10,
            name:"Podcast",
            icon:<MdPodcasts />
        },
        {
            id:11,
            name:"Movies",
            icon:<MdLocalMovies />
        }
    ]
    const slidebarItems4 = [ 
        {
            id:1,
            name:"You Tube Premium",
            icon:<IoLogoYoutube />
        },
        {
            id:2,
            name:"You Tube Studio",
            icon:<SiYoutubestudio />
        },
        {
            id:3,
            name:"You Tube Music",
            icon:<SiYoutubemusic />
        },
        {
            id:4,
            name:"You Tube Kids",
            icon:<SiYoutubekids />
        }
    ]

  return (
    <>
    <div className='px-6 w-[20%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16'>
      <div className='items-center cursor-pointer'>
        {
            slidebarItems.map((item)=>{
                return(
                    <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-md p-2'>
                        <div className='text-xl cursor-pointer'>{item.icon}</div> 
                        <span className='cursor-pointer'>{item.name}</span>
                    </div>
                )
            })
        }
      </div>
      <br/>
      <hr/>
      <div className='mt-4 cursor-pointer'>
        <div className='flex space-x-4 items-center mb-2 hover:bg-gray-200 duration-300 rounded-md p-2' >
            <h1 className='text-xl font-bold'>You</h1>
            <IoIosArrowForward className='text-xl'/>
        </div>
      {
            slidebarItems2.map((item)=>{
                return(
                    <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-md p-2'>
                        <div className='text-xl cursor-pointer'>{item.icon}</div> 
                        <span className='cursor-pointer'>{item.name}</span>
                    </div>
                )
            })
        }
        <br/>
        <hr/>
        {/* Explore */}
        <div className='mt-4 mb-4'>
            <h1 className='font-bold text-xl'>Explore</h1>
        </div>
        {
            slidebarItems3.map((item)=>{
                return(
                    <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-md p-2'>
                        <div className='text-xl cursor-pointer'>{item.icon}</div> 
                        <span className='cursor-pointer'>{item.name}</span>
                    </div>
                )
            })
        }
        <br/>
        <hr/>
        <div className='mt-2 mb-2'>
            <h1 className='text-xl font-bold'>More from YouTube</h1>
        </div>
        {
            slidebarItems4.map((item)=>{
                return(
                    <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-md p-2'>
                        <div className='text-xl cursor-pointer'>{item.icon}</div> 
                        <span className='cursor-pointer'>{item.name}</span>
                    </div>
                )
            })
        }
        <br/>
        <hr/>
        <div className='mt-4 cursor-pointer'>
            <p className='text-gray-500 '>About Press Copyright <br/> Contact Us Creators <br/> Advertise Developer</p>
            <br/>
            <p className='text-gray-500 '>Terms Privacy Policy & Safety <br/> How YouTube Works <br/> Test new Features</p>
        </div>
        <br/>
        <h4 className='text-gray-400'>pradhumannaruka04@gmail.com</h4>
      </div>
    </div>
    </>
  )
}

export default Slidebar
