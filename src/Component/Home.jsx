// import React from 'react'
// import Images from '../assets/Images/IMAGE1.jpg'
// import { FiFacebook } from "react-icons/fi";
// import { CiLinkedin } from "react-icons/ci";
// import { RiTwitterXLine } from "react-icons/ri";
// import { FaInstagram } from "react-icons/fa";
// import { FaRegCopyright } from "react-icons/fa6";
// import { RiPhoneFill } from "react-icons/ri";
// import { FaEnvelope } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import { RiStarFill } from "react-icons/ri";




// const Home = () => {
//   return (
//    <section>
//    {/* HEADER */}
//    <header className="h-[12vh] bg-[gray] flex justify-around font-[times-new-roman] items-center text-white cursor-pointer w-[100%]">
//         <div className="flex flex-col justify-center items-center">
//           <img src="src/assets/Images/EventHaven-removebg-preview.png" alt="" className='w-[15vw] h-[30vh]'/>
          
//         </div>
//         <div className="flex gap-9 font-bold font-[times-new-roman] py-8 text-xl">
//           <nav>Home</nav>
//           <nav>Discover</nav>
//           <nav>Login</nav>
//           <nav>Dashboard</nav>
//         </div>
//         <div className="font-[times-new-roman] py-8">
//           <button className="w-[10vw] rounded-md bg-orange-400 h-[6vh] border-white border-[1px]">
//             GET STARTED
//           </button>
//         </div>
//       </header>

//       {/* INRO */}
//     <section class="intro">
//       <div className="h-[100vh] flex justify-center items-center">
//         <div className="flex justify-center items-center flex-col gap-5">
//           <h1 className="text-6xl font-[times-new-roman] flex font-bold">
//             Your Gateway To Professional Event Planning
//           </h1>
//           <div className="flex justify-center items-center">
//             <p className=" font-[times-new-roman] w-[55vw] text-3xl  text-center">
//               Our platform bridges the gap between clients and Professional
//               planners, providing a seamless,efficient, and tailored approach to
//               creating extraordinary events.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* WHAT WE DO */}
//     <section class="wedo">
//       <div className="flex justify-center items-center w-[100%] h-[50vh]">
//             <h1 className="text-3xl font-[times-new-roman] text-center font-bold">WHAT WE DO</h1>
//       </div>

//           <div className='w-[100%] flex items-center justify-around gap-5'>
//             <p className="w-[30vw]  font-[times-new-roman] text-justify leading-10 text-xl pl-5">
//               We simplify event planning and management. We connect clients with
//               experienced event planners, trusted vendors, and unique venues to
//               bring every celebration, conference, or gathering to life. From
//               finding the perfect team to organizing every detail, we provide
//               the tools and resources to make every event seamless, stress-free,
//               and unforgettable.
//             </p>
//             <img src="src/assets/Images/IMAGE2.jpg" alt="" className='h-[80vh] w-[50vw] flex items-center justify-center'/>
//           </div>
//     </section>

//     {/* ABOUT US */}
//     <section className="h-[100vh] w-[100%] flex items-center justify-center">
//       <div className="flex justify-around items-center w-[100%] h-[100vh]">
//         <div>
//         <img src="src/assets/Images/IMAGE3.jpg" alt="" className='h-[80vh] w-[50vw]'/>
//         </div>
//         <div>
//           <h1 className="text-4xl font-[times-new-roman] text-center font-bold">ABOUT US</h1>
//           <div>
//             <p className="w-[30vw] leading-10  font-[times-new-roman] text-justify mt-10 text-xl">
//               At <span className='font-bold'>Event Haven</span>, we bridge the gap between event
//               enthusiasts, Professional planners, and trusted vendors.Our
//               platform empowers clients to discover and attend events, helps
//               planners showcase their skills and manage projects efficiently,
//               and connects vendors to new business opportunities. From seamless
//               ticketing to end-to-end event creation, we're here to make every
//               occasion extraordinary.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* WHAT WE OFFER */}
//     <section class="weoffer">
//       <h1 className="text-3xl font-[times-new-roman] text-center  font-bold text-white">
//         WHAT WE OFFER
//       </h1>
//       <br />

//       <div className="flex justify-center gap-5">
//         <div className=" shadow-sm shadow-[gray] h-[35vh] bg-white w-[25vw] rounded-md flex items-center justify-center flex-col">
//           <h1 className="text-xl font-[times-new-roman] font-bold  text-center">
//             Comprehensive Event Solutions
//           </h1>
//           <div>
//             <p className="font-[times-new-roman] mt-5 text-center p-3">
//               Whether you're planning a personal celebration or a large-scale
//               corporate event, we provide tools and resources to make every step
//               effortless{" "}
//             </p>
//           </div>
//         </div>

//         <div className=" shadow-sm shadow-[gray] h-[35vh] bg-white w-[25vw] rounded-md flex items-center justify-center flex-col">
//           <h1 className="text-xl font-[times-new-roman] font-bold  text-center">
//             Custom Event Planning
//           </h1>
//           <div>
//             <p className="font-[times-new-roman] mt-5 text-center p-3">
//               Tailor your event experience with customizable planning features,
//               including budgeting scheduling, and guest management.
//             </p>
//           </div>
//         </div>

//         <div className=" shadow-sm shadow-[gray] h-[35vh] bg-white w-[25vw] rounded-md flex items-center justify-center flex-col">
//           <h3 className="text-xl font-[times-new-roman] font-bold  text-center w-[20vw]">Professional Planner Network</h3>
//           <div>
//             <p className="font-[times-new-roman] mt-5 text-center p-3">
//               Connect with skilled event planners who canbring your ideas to
//               life with expertise and creativity.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex mt-10 justify-center gap-5">
//         <div className=" shadow-sm shadow-[gray] h-[35vh] bg-white w-[25vw] rounded-md flex items-center justify-center flex-col">
//           <h1 className="text-2xl font-[times-new-roman] font-bold  text-center">
//             Trusted Vendor Access
//           </h1>
//           <div>
//             <p className="font-[times-new-roman] mt-5 text-center p-3">
//               Find reliable vendors for catering, photography, venue rental,
//               entertainment, and more, ensuring every detail is a perfect.
//             </p>
//           </div>
//         </div>
//         <div className=" shadow-sm shadow-[gray] h-[35vh] bg-white w-[25vw] rounded-md flex items-center justify-center flex-col">
//           <h1 className="text-2xl font-[times-new-roman] font-bold  text-center">
//             Collaboration Made
//           </h1>
//           <div>
//             <p className="font-[times-new-roman] mt-5 text-center p-3">
//               Communicate effortlessly with planners, vendors and attendees
//               through built-in messaging and management tools
//             </p>
//           </div>
//         </div>
//         <div className=" shadow-sm shadow-[gray] h-[35vh] bg-white w-[25vw] rounded-md flex items-center justify-center flex-col">
//           <h1 className="text-2xl font-[times-new-roman] font-bold  text-center">
//             User-Friendly tools
//           </h1>
//           <div>
//             <p className="font-[times-new-roman] text-center p-3">
//               Utilize intuitive features such as RSVP tracking, ticketing
//               systems, and real-time updates to keep your event on track.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* OUR SERVICES */}
//     <section className="h-[100vh] w-[100%] flex items-center justify-center flex-col">
//       <h1 className="text-3xl font-[times-new-roman] text-center my-10 font-bold">
//         OUR SERVICES
//       </h1>
//       <div className="flex justify-center gap-5">
//         <div className=" shadow-lg shadow-[gray] h-[55vh] w-[30vw] rounded-md flex items-center justify-center flex-col">
//           <h1 className="text-2xl font-[times-new-roman] font-bold  text-center mt-5">
//             CLIENTS/USERS
//           </h1>
//           <div>
//             <p className="font-[times-new-roman] mt-3 text-center p-3 font-bold">
//               "Plan, Explore and Attend Events seamlessly"
//             </p>
//             <p className="font-[times-new-roman] text-center p-3 leading-7">
//               Discover a world of events tailored to your interests-whether it's
//               concerts, weddings, ortech conferences. book tickets, stay
//               updated, and even create your own events with just a few clicks.
//               Your next unforgettable experience starts here!
//             </p>
//           </div>
//         </div>
//         <div className=" shadow-lg shadow-[gray] h-[55vh] w-[30vw] rounded-md flex items-center justify-center flex-col">
//           <h2 className="text-2xl font-[times-new-roman] font-bold  text-center">
//             EVENT PLANNERS
//           </h2>
//           <div>
//             <p className="font-[times-new-roman] mt-3 text-center p-3 font-bold">
//               "Simplify Event Planning, Maximize Reach"
//             </p>
//             <p className="font-[times-new-roman] text-center p-3 leading-7">
//               Showcase your expertise and connect with clients who need your
//               skills. Use our tools to manage projects, coordinate with vendors,
//               and streamline every detail of your event planningprocess.Grow
//               your business while we help you find new Opportunities!
//             </p>
//           </div>
//         </div>
//         <div className=" shadow-lg shadow-[gray] h-[55vh] w-[30vw] gap-8 rounded-md flex items-center justify-center flex-col">
//           <h1 className="text-2xl font-[times-new-roman] font-bold  flex items-center justify-center w-[16vw]">VENDORS</h1>
//           <div>
//             <p className="font-[times-new-roman]  font-bold ">"Showcase Your Services, Grow your Network"</p>
//             <br />
//             <p className="font-[times-new-roman] text-center w-[25vw] flex items-center justify-center leading-7">
//               Reach the right audience by listing your services for catering,
//               decorations, venues, and more. Collaborate with event planners and
//               clients to turn their visions into reality, and expand your
//               business with ease through our platform.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>    

//     {/* TESTIMONIALS */}
//     <section className="h-[100vh] flex items-center justify-center flex-col">
//       <h1 className="text-3xl font-[times-new-roman] text-center font-bold">
//         TESTIMONIALS
//       </h1>
//       <div className="flex gap-3 mt-10">
//         <div className=" shadow-lg shadow-[gray] h-[50vh] w-[23vw] rounded-md flex items-center justify-center flex-col gap-2">
//           <p className="font-[times-new-roman] text-center text-balance w-[21vw]">
//             "Planning my wedding felt overwhelming untill i discovered this
//             platform. from finding the perfect planner to coordinating vendors,
//             everything was seamless. Highly recommend!"
//           </p>
//           <div className="flex text-yellow-500 justify-center items-center">
//             <i>
//               <RiStarFill />
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//           </div>
//           <span className="flex justify-center items-center gap-5 w-[25vw]">
//           <img src="src/assets/Images/IMAGE5.jpg" alt="" className='h-[3vw] w-[3vw] rounded-full'/>
//           </span>
//           <p className="font-[times-new-roman] text-center font-bold">
//             Ebeleagu David Ben
//           </p>
//         </div>

//         <div className="shadow-lg shadow-[gray] h-[50vh] w-[23vw] rounded-md flex items-center justify-center flex-col gap-2">
//           <p className="font-[times-new-roman] text-center w-[21vw]">
//             "This website has transformed the way i connect with clients. It
//             streamlined my workflow, and help me grow my business tenfold. A
//             must-have for any event planner!"
//           </p>
//           <div className="flex text-yellow-500 justify-center items-center">
//             <i>
//               <RiStarFill />
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//           </div>
//           <span className="flex justify-center items-center gap-5 w-[25vw]">
//           <img src="src/assets/Images/IMAGE5.jpg" alt="" className='h-[3vw] w-[3vw] rounded-full'/>
//           </span>
//           <p className="font-[times-new-roman] text-center font-bold">
//             Gorgie Michael
//           </p>
//         </div>

//         <div className="shadow-lg shadow-[gray] h-[50vh] w-[23vw] rounded-md flex items-center justify-center flex-col gap-2">
//           <p className="font-[times-new-roman] text-center w-[21vw]">
//             "Being part of this platform has been a game changer for my catering
//             business. I have gained exposure to so many events i wouldnt have
//             reached otherwise."
//           </p>
//           <div className="flex text-yellow-500 justify-center items-center">
//             <i>
//               <RiStarFill />
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//           </div>
//           <span className="flex justify-center items-center gap-5 w-[25vw]">
//           <img src="src/assets/Images/IMAGE5.jpg" alt="" className='h-[3vw] w-[3vw] rounded-full'/>
//           </span>
//           <p className="font-[times-new-roman] text-center font-bold">
//             Chiedozie Sopulu Favor
//           </p>
//         </div>

//         <div className=" shadow-lg shadow-[gray] h-[50vh] w-[23vw] rounded-md flex items-center justify-center flex-col gap-2">
//           <p className="font-[times-new-roman] text-center w-[21vw]">
//             "Our annual tech conference was a huge success, thanks to the
//             resources on this site. From the venue to the decorations,
//             everything exceeded our expectations. "
//           </p>
//           <div className="flex text-yellow-500 justify-center items-center">
//             <i>
//               <RiStarFill />
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//             <i>
//               <RiStarFill />{" "}
//             </i>
//           </div>
//           <span className="flex justify-center items-center">
//           <img src="src/assets/Images/IMAGE5.jpg" alt="" className='h-[3vw] w-[3vw] rounded-full'/>
//           </span>
//           <p className="font-[times-new-roman] text-center font-bold">
//             Victoria Obed
//           </p>
//         </div>
//       </div>
//     </section>

//     {/* CONTACT US */}
//     <section className="h-[70vh] bg-[#394457] font-[times-new-roman] cursor-pointer">
//       <div className="flex p-10 justify-around items-center">
//         <div className="flex flex-col justify-center items-center">
//           <div className="bg-[#fe2e19] rounded-full text-2xl text-white w-[3vw] h-[3vw] flex items-center justify-center">
//             <i>
//               <RiPhoneFill />
//             </i>
//           </div>
//           <div>
//             <p className="text-white mt-3">(+234) 8168656764</p>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           <div className="bg-[#fe2e19] rounded-full text-2xl text-white w-[3vw] h-[3vw] flex items-center justify-center">
//             <i>
//               <FaEnvelope />
//             </i>
//           </div>
//           <div>
//             <p className="text-white mt-3">Eventhaven@gmail.com</p>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           <div className="bg-[#fe2e19] rounded-full text-2xl text-white w-[3vw] h-[3vw] flex items-center justify-center">
//             <i>
//               <FaLocationDot />
//             </i>
//           </div>
//           <div>
//             <p className="text-white text-left mt-3">
//               2334 Saint Roland Avenue, London
//             </p>
//           </div>
//         </div>
//       </div>

//       <div>
//         <hr className="m-10" />
//       </div>

//       <div className="flex justify-around ">
//         <div className="text-white font-[times-new-roman]">
//           <h1 className="font-bold text-2xl cursor-pointer hover:text-blue-300">
//             About
//           </h1>
//           <div className="mt-3 leading-7 opacity-50">
//             <p className="hover:text-blue-300 ">Our Team</p>
//             <p className="hover:text-blue-300 ">FAQ</p>
//             <p className="hover:text-blue-300">Clients</p>
//             <p className="hover:text-blue-300">Career</p>
//           </div>
//         </div>

//         <div className="text-white font-[times-new-roman]">
//           <h2 className="font-bold text-2xl cursor-pointer hover:text-blue-300">
//             Our Company
//           </h2>
//           <div className="mt-3 leading-7 opacity-50">
//             <p className="hover:text-blue-300">Home</p>
//             <p className="hover:text-blue-300">Location</p>
//             <p className="hover:text-blue-300">Contact Us</p>
//             <p className="hover:text-blue-300 ">History</p>
//           </div>
//         </div>

//         <div className="text-white font-[times-new-roman]">
//           <h3 className="font-bold text-2xl cursor-pointer hover:text-blue-300">
//             What We do
//           </h3>
//           <div className="mt-3 leading-7 opacity-50">
//             <p className="hover:text-blue-300 ">Solutions</p>
//             <p className="hover:text-blue-300 ">Projects</p>
//             <p className="hover:text-blue-300 ">Market</p>
//             <p className="hover:text-blue-300 ">Connections</p>
//           </div>
//         </div>

//         <div>
//           <h4 className="text-white font-[times-new-roman] opacity-50 text-xl">
//             Subscribe
//           </h4>
//           <div className="mt-5">
//             <input
//               type="email"
//               placeholder="Email address"
//               className="w-[15vw] h-[5vh] rounded-l-md pl-3"
//             />
//             <button className="bg-[#fe2e19] text-white text-xl p-2 rounded-r-md absolute h-[5vh] ">
              
//                 <FaArrowRight />
              
//             </button>
//           </div>
//           <p className="text-white mt-5 opacity-50">
//             Get newsletter and project updates in your mailbox
//           </p>
//         </div>
//       </div>
//     </section>

//       {/* FOOTER */}
//       <section className="bg-[#1f1f1f] h-[20vh] pt-4 font-[times-new-roman] flex items-center justify-center flex-col cursor-pointer">
//       {/* <div className="flex justify-center text-2xl items-center w-[100%] h-[20vh] text-white border-blue-600 border-[1px]"> */}
//         <span className='flex items-center justify-center w-[100%] text-white h-[10vh]'>
//           <div className='w-[100%] flex items-center justify-center gap-10 '>
//           <FiFacebook  className='border-white border-[1px] w-[2vw] h-[2vw] rounded-full flex items-center justify-center'/>
//           <CiLinkedin  className='border-white border-[1px] w-[2vw] h-[2vw] rounded-full flex items-center justify-center'/>
//           <RiTwitterXLine  className='border-white border-[1px] w-[2vw] h-[2vw] rounded-full flex items-center justify-center'/> 
//           <FaInstagram  className='border-white border-[1px] w-[2vw] h-[2vw] rounded-full flex items-center justify-center'/>
//           </div>
//         </span>

//         <div className='flex items-center justify-center  h-[20vh] w-[100%] text-gray-500 font-semibold'>
//       <FaRegCopyright className='flex items-center justify-center h-[4vh]'/>
//       <p>2024 Event Haven. All Rights Reserved. Terms | Privacy</p>
//       </div>
//       {/* </div> */}    
//     </section>
//    </section>
//   )
// }

// export default Home