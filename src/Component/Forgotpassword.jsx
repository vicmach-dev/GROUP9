import React from 'react'

const Forgotpassword = () => {
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-end'>
        <form action="" className='border-[1px] gap-8 border-blue-500 h-[100vh] w-[50%] rounded-l-3xl flex items-center justify-center flex-col text-left'>
            <div className='flex items-start justify-center flex-col gap-8 text-right'>
            <h2 className='font-bold text-3xl'>Forgot Password</h2>
            <small className=' w-[25vw] text-justify font-normal'>Please enter your username or your email address. You will receive a link to create new password via email.</small>

            <div className="border-[1px] border-black w-[25vw] h-[5vh] flex items-center justify-center rounded-lg pl-2">
                
              <i>
                <FcGoogle className="mr-2 text-xl" />
              </i>
              <hr className='border-[1px] border-black  h-6 font'/>
              <input
                type="text"
                placeholder="sign up with Google"
                className=" focus:outline-none flex-grow "
              />
            </div>
            </div>

            <div className='flex items-center flex-col gap-3'>
                <button className='border-black border-[1px] rounded-full w-[13vw] h-[4vh] flex items-center justify-center bg-yellow-100 text-sm font-mono'>Send Email</button>
                <button className='font-mono text-sm'>Back to Login</button>
            </div>
            </form>
        
    </div>
  )
}

export default Forgotpassword