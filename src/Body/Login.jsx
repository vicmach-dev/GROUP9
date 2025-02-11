import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import LoginBg from "../assets/Images/LoginBg.jpeg"

const Login = () => {
  return (
    <main
      className="flex items-center bg-cover bg-center justify-center h-screen bg-gray-100"
      style={{ backgroundImage: `url('${LoginBg}')` }}
    >
      <div className="w-[50%] h-[70vh] bg-white rounded-md flex flex-col items-center justify-center bg-opacity-50 gap-[3vh]">
        <h1 className="w-[100%] h-[10vh] flex items-center justify-center text-lg font-bold">
          Login
        </h1>

        <section className="flex items-center justify-around w-[100%] h-[vh]">
          <button className="w-[13vw] h-[4vh] flex justify-center text-[10px] items-center border-black border-[1px] rounded-md  font-normal bg-white">
            <span className="pr-3 text-sm">
              <FcGoogle />
            </span>
            <span>Login with Google</span>{" "}
          </button>

          <button className="w-[13vw] h-[4vh] flex justify-center text-[10px] items-center border-black border-[1px] rounded-md font-normal bg-white">
            {" "}
            <span className="pr-3 text-blue-500 text-sm">
              {" "}
              <RiFacebookCircleFill />{" "}
            </span>
            Login with Facebook
          </button>
        </section>

        <section className="w-[100%] flex items-center justify-center gap-2 h-[8vh]">
          <hr className="w-4 flex items-center justify-center flex-col h-[0.3vh] bg-black" />
          <h1 className="font-bold text-[2vh]">OR</h1>
          <hr className="w-4 flex items-center justify-center flex-col h-[0.3vh] bg-black" />
        </section>

        <section className="flex items-center justify-center h-[15vh] w-[100%] flex-col gap-3 text-[2vh]">
          <div>
            <p>E-mail</p>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-[25vw] h-[5vh] border-black border-[1px] rounded-md pl-3 bg-white"
            />
          </div>

          <div>
            <p>Password</p>
            <input
              type="Password"
              placeholder="Enter Password"
              className="w-[25vw] h-[5vh] border-black border-[1px] rounded-md pl-3 bg-white"
            />
            <FaRegEye />
          </div>
        </section>

        <section className="flex items-center justify-center h-[10vh] w-[100%] flex-col gap-[1.5vh]">
          <button className="w-[10vw] h-[5vh] border-orange-300 bg-black text-orange-300 border-[1px] rounded-md text-[2vh] font-serif">
            Login
          </button>
          <button className="text-[1.5vh] font-serif">
            Forgot Your Password?
          </button>
        </section>
      </div>
    </main>
  );
};

export default Login;
