import './App.css'

import Home from './Component/Home'
import Signup from "./Component/Signup";
import Login from './Component/Login';
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { RiPhoneFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { RiStarFill } from "react-icons/ri";

const App = () => {
  

  return (
    <>
      <Home/>
      <Signup/>
      <Login/>
    </>
  )
}

export default App
