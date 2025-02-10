import React, {useState} from 'react'
import { FiFacebook } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-[#1f1f1f] h-[20vh] pt-4 font-[times-new-roman] flex items-center justify-center flex-col cursor-pointer">
      {/* <div className="flex justify-center text-2xl items-center w-[100%] h-[20vh] text-white border-blue-600 border-[1px]"> */}
        <span className='flex items-center justify-center w-[100%] text-white h-[10vh]'>
          <div className='w-[100%] flex items-center justify-center gap-10 '>
          <FiFacebook  className='border-white border-[1px] w-[2vw] h-[2vw] rounded-full flex items-center justify-center'/>
          <CiLinkedin  className='border-white border-[1px] w-[2vw] h-[2vw] rounded-full flex items-center justify-center'/>
          <RiTwitterXLine  className='border-white border-[1px] w-[2vw] h-[2vw] rounded-full flex items-center justify-center'/> 
          <FaInstagram  className='border-white border-[1px] w-[2vw] h-[2vw] rounded-full flex items-center justify-center'/>
          </div>
        </span>

        <div className='flex items-center justify-center  h-[20vh] w-[100%] text-gray-500 font-semibold'>
      <FaRegCopyright className='flex items-center justify-center h-[4vh]'/>
      <p>2024 Event Haven. All Rights Reserved. Terms | Privacy</p>
      </div>
      {/* </div> */}

      
    
    </section>
  )
}

export default Footer
