import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = () => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>The Last Airbender</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='flex gap-2 mt-8'>
            <button className='flex items-center gap-2 px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'><FaPlay/> <span>Play</span></button>
            <button className='flex items-center gap-2 px-6 py-2 bg-gray-50 bg-opacity-50 text-black rounded-md hover:bg-opacity-80'><FaInfoCircle size="20px"/><span>Watch more</span> </button>
        </div>
    </div>
  )
}

export default VideoTitle