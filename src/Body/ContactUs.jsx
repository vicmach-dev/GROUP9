import React from 'react'
import { RiPhoneFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div>
      {/* CONTACT US */}
      <section className="h-[70vh] bg-[#394457] font-[times-new-roman] cursor-pointer">
        <div className="flex p-10 justify-around items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#e2b28b] rounded-full text-2xl text-white w-[3vw] h-[3vw] flex items-center justify-center">
              <i>
                <RiPhoneFill />
              </i>
            </div>
            <div>
              <p className="text-white mt-3">(+234) 8168656764</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#e2b28b] rounded-full text-2xl text-white w-[3vw] h-[3vw] flex items-center justify-center">
              <i>
                <FaEnvelope />
              </i>
            </div>
            <div>
              <p className="text-white mt-3">Eventhaven@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#e2b28b] rounded-full text-2xl text-white w-[3vw] h-[3vw] flex items-center justify-center">
              <i>
                <FaLocationDot />
              </i>
            </div>
            <div>
              <p className="text-white text-left mt-3">
                2334 Saint Roland Avenue, London
              </p>
            </div>
          </div>
        </div>

        <div>
          <hr className="m-10" />
        </div>

        <div className="flex justify-around ">
          <div className="text-white font-[times-new-roman]">
            <h1 className="font-bold text-2xl cursor-pointer hover:text-blue-300">
              About
            </h1>
            <div className="mt-3 leading-7 opacity-50">
              <p className="hover:text-blue-300 ">Our Team</p>
              <p className="hover:text-blue-300 ">FAQ</p>
              <p className="hover:text-blue-300">Clients</p>
              <p className="hover:text-blue-300">Career</p>
            </div>
          </div>

          <div className="text-white font-[times-new-roman]">
            <h2 className="font-bold text-2xl cursor-pointer hover:text-blue-300">
              Our Company
            </h2>
            <div className="mt-3 leading-7 opacity-50">
              <p className="hover:text-blue-300">Home</p>
              <p className="hover:text-blue-300">Location</p>
              <p className="hover:text-blue-300">Contact Us</p>
              <p className="hover:text-blue-300 ">History</p>
            </div>
          </div>

          <div className="text-white font-[times-new-roman]">
            <h3 className="font-bold text-2xl cursor-pointer hover:text-blue-300">
              What We do
            </h3>
            <div className="mt-3 leading-7 opacity-50">
              <p className="hover:text-blue-300 ">Solutions</p>
              <p className="hover:text-blue-300 ">Projects</p>
              <p className="hover:text-blue-300 ">Market</p>
              <p className="hover:text-blue-300 ">Connections</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-[times-new-roman] opacity-50 text-xl">
              Subscribe
            </h4>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Email address"
                className="w-[15vw] h-[5vh] rounded-l-md pl-3"
              />
              <button className="bg-[#e2b28b] text-white text-xl p-2 rounded-r-md absolute h-[5vh] ">
                <FaArrowRight />
              </button>
            </div>
            <p className="text-white mt-5 opacity-50">
              Get newsletter and project updates in your mailbox
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs
