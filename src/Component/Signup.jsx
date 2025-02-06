import React from "react";
import  Picture  from "../assets/Images/bg.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Signup() {
  return (
    <main
      style={{ backgroundImage: `url('${Picture}')` }}
      className=" h-[90vh] flex justify-center items-center bg-center bg-cover bg-[rgba(255,255,255,0.9)]"
    >
      <section className="h-[80vh] w-[70vw] border-blue-300 border-2 shadow-sm shadow-blue-500fv  bg-[rgba(255,255,255,0.6)]">
        <div className="flex flex-col justify-center items-center  ">
          <h1 className="text-center font-bold text-xl my-6">Create Account</h1>
          <div className="flex justify-between w-[70%]">
            <div className="flex items-center shadow-sm shadow-[gray] bg-white w-[20vw] p-2">
              <i>
                <FcGoogle className="mr-2 text-xl" />
              </i>
              <input
                type="text"
                placeholder="sign up with Google"
                className=" focus:outline-none flex-grow "
              />
            </div>
            <div className="flex items-center shadow-sm shadow-[gray] bg-white w-[20vw] p-2">
              <i>
                <FaFacebook className="mr-2 text-xl text-blue-500" />
              </i>
              <input
                type="text"
                placeholder="sign up with Facebook"
                className="focus:outline-none flex-grow "
              />
            </div>
          </div>
          <div className="flex mt-5 items-center w-[100%] justify-center">
            <div className=" border-b border-black w-[2vw]"></div>
            <span className="mx-2 font-bold text-center">OR</span>
            <div className=" border-b border-black w-[2vw]"> </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-left w-[40vw]">Name</h1>
          <input
            type="text"
            placeholder="David Ben "
            required
            className="w-[40vw] shadow-sm shadow-[gray] p-2"
          />

          <h2 className="text-left w-[40vw]">E-mail</h2>
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            className="w-[40vw] shadow-sm shadow-[gray] p-2"
          />

          <div>
            <h3 className="text-left w-[40vw]">Password</h3>
            <input
              type="password"
              placeholder="Enter Password"
              required
              className="w-[40vw] shadow-sm shadow-[gray] p-2"
            />
          </div>
        </div>

        <p className="text-center mt-5">
          By creating your account, you agree to the{" "}
          <span className=" text-orange-400">Terms of Services</span> and{" "}
          <span className=" text-orange-400">Privacy Policy</span>
        </p>

        <span className="flex justify-center items-center mt-8">
          <button className=" bg-orange-200  p-2 rounded-md w-[20vw]">
            {" "}
            Create Account{" "}
          </button>
        </span>

        <p className="text-center">
          Already have an account?<span className="text-orange-400">Login</span>
        </p>
      </section>
    </main>
  );
}

export default Signup;
