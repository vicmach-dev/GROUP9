import React from 'react'
import Space from "../assets/Images/Space.jpeg";
import Man from "../assets/Images/Man.jpeg";
import Party from "../assets/Images/Party.jpeg";
import Stadium from "../assets/Images/Stadium.jpeg";
import People from "../assets/Images/People.jpeg";
import Pc from "../assets/Images/Pc.jpeg";
import Calendar from "../assets/Images/Calendar.jpeg";


const Event = () => {
  return (
    <main className="bg-gray-300 px-8 h-full">
      <h1 className="flex justify-center items-center text-2xl h-16">
        MY EVENTS
      </h1>

      <div className=" flex flex-col gap-6">
        <div
          style={{ backgroundImage: `url('${Space}')` }}
          className="bg-cover bg-center rounded-md h-[23vh] flex justify-center items-center text-black"
        >
          <button className="bg-white text-xl border w-44 border-1ps border-gray-600 rounded-md items-center font-bold  ">
            Upcoming Events
          </button>
        </div>

        <div
          style={{ backgroundImage: `url('${Man}')` }}
          className="bg-cover bg-center rounded-md h-[23vh] flex justify-center items-center  text-black"
        >
          <button className="bg-white text-xl border w-44 border-1ps border-gray-600 rounded-md items-center font-bold  ">
            Ongoing Events
          </button>
        </div>

        <div
          style={{ backgroundImage: `url('${Party}')` }}
          className="bg-cover bg-center rounded-md h-[23vh] flex justify-center items-center  text-black"
        >
          <button className="bg-white text-xl border w-36 border-1ps border-gray-600 rounded-md items-center font-bold  ">
            Popular Events
          </button>
        </div>

        <div
          style={{ backgroundImage: `url('${Calendar}')` }}
          className="bg-cover bg-center rounded-md h-[23vh] flex justify-center items-center  text-black"
        >
          <button className="bg-white text-xl w-28 border border-1ps border-gray-600 rounded-md items-center font-bold  ">
            Calendar
          </button>
        </div>

        <div
          style={{ backgroundImage: `url('${Stadium}')` }}
          className="bg-cover bg-center rounded-md h-[23vh] flex justify-center items-center  text-black"
        >
          <button className="bg-white text-xl w-36 border border-1ps border-gray-600 rounded-md items-center font-bold  ">
            Past Events
          </button>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div
            style={{ backgroundImage: `url('${People}')` }}
            className="bg-cover bg-center rounded-md h-[23vh] w-[50vw] flex justify-center items-center  text-black"
          >
            <button className="bg-white text-xl w-36 border border-1ps border-gray-600 rounded-md items-center font-bold  ">
              Drafts
            </button>
          </div>

          <div
            style={{ backgroundImage: `url('${Pc}')` }}
            className="bg-cover bg-center rounded-md h-[23vh] w-[50vw] flex justify-center items-center  text-black"
          >
            <button className="bg-white text-xl w-36 border border-1ps border-gray-600 rounded-md items-center font-bold  ">
              Saved
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Event
