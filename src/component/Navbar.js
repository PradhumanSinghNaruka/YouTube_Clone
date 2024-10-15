import React from 'react'
import { FiMenu } from "react-icons/fi";
import logo from "../image/YouTube-Logo.png"
import { IoIosSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import image from "../image/psn.png";
function Navbar() {
  return (
    <>
    <div className="flex px-4 max-w-screen-2xl justify-between fixed top-0 w-[100%] bg-white">
      <div className="flex items-center space-x-1 md:space-x-6">
        <FiMenu className="size-12 md:size-11 cursor-pointer rounded-full md:rounded-full hover:bg-gray-300 p-2"/>
        <img alt='' src={logo} className="w-16 h-12 md:w-25 md:h-12 hover:border hover:border-black cursor-pointer"/>
      </div>
      <div className="flex w-[50%] mt-2">
        <div className="w-[100%] rounded-l-full border px-3 py-2 hidden lg:block">
            <input type="text" placeholder="search" className="outline-none"/>
        </div>
        <button className="py-2 px-4 md:border md:rounded-r-full md:hover:bg-gray-300">
            <IoIosSearch className="cursor-pointer w-4 h-6 md:w-6 md:h-8 ml-12 md:ml-2"/>
        </button>
        <IoMdMic className=" size-9 md:size-12 cursor-pointer md:ml-2 hover:bg-gray-200 duration-200 rounded-full p-2"/>
      </div>
      <div className="flex items-center mr-20 md:mr-0 space-x-0 md:space-x-8 cursor-pointer">
        <RiVideoAddLine size={"40px"} className="rounded-full hover:bg-gray-300 duration-300 p-2 hidden lg:block"/>
        <FaRegBell size={"40px"} className="rounded-full hover:bg-gray-300 duration-300 p-2 hidden lg:block"/>
        <img alt='' src={image} className=' w-12 h-12 rounded-full p-2'/>
      </div>
    </div>
    </>
  )
}

export default Navbar
