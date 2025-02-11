import './App.css'
import Signup from "./Body/Signup";
import Login from './Body/Login';
import Body from './Component/Body'
import Home from './Body/Home'
import Discover from './Body/Discover'
import Dashboard from './Body/Dashboard'
import ContactUs from './Body/ContactUs'
import GetStarted from './Body/GetStarted'
import Forgotpassword from './Component/Forgotpassword';
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
import Event from './Body/Event'
import { Route, BrowserRouter, Routes } from "react-router-dom"

const App = () => {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Body />}>
            <Route element={<Home />} path="/" />
            <Route element={<Discover />} path="/Discover" />
            <Route element={<Login />} path="/Login" />
            <Route element={<Dashboard />} path="/Dashboard" />
            <Route element={<ContactUs />} path="/ContactUs" />
            <Route element={<Forgotpassword />} path="/Forgotpassword" />
          </Route>
          <Route element={<GetStarted />} path="/GetStarted" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
