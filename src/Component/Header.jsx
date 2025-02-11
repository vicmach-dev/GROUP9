import React from "react";
import { Navlist } from "./Navlist";
import { NavLink } from "react-router-dom";
// import Images from '../assets/Images/IMAGE1.jpg'

const Header = () => {
  return (
    <header className="h-[12vh] bg-[gray] flex justify-around font-[times-new-roman] items-center text-white cursor-pointer w-[100%]">
      <div className="flex flex-col justify-center items-center">
        <img
          src="src/assets/Images/EventHaven-removebg-preview.png"
          alt=""
          className="w-[15vw] h-[30vh]"
        />
      </div>
      <nav className="flex gap-9 font-bold font-[times-new-roman] py-8 text-xl">
        {Navlist.map((nav) => (
          <NavLink key={nav.id} to={nav.path} className="hover:text-blue-700">
            {nav.name}
          </NavLink>
        ))}
      </nav>
      <NavLink
        to="/GetStarted"
        className="font-[times-new-roman] flex items-center justify-center w-[10vw] rounded-md bg-[#e2b28b] h-[5vh] border-white border-[1px] hover:bg-blue-700"
      >
        GET STARTED
      </NavLink>
    </header>
  );
};

export default Header;
