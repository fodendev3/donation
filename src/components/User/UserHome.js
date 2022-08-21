/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ngoLogo from "../Ngo/images.jpg";
import eventImage from "../Ngo/download.jpg";
export default function UserHome() {
  document.querySelector("body").style.overflowX = "hidden";

  const [post, setPost] = useState("flex");
  //   const [message, setMessage] = useState("block");
  //   setTimeout(() => {
  //     setMessage("hidden");
  //   }, 1200);
  return (
    <>
      {/* <div
        className={`text-2xl text-gray-500 px-8 py-8 font-sans tracking-widest ${message} animate-pulse `}
      >
        Welcome back to DoNation
      </div> */}

      <div className="pt-32 sm:pt-10 mb-10 max-w-6xl px-8 xl:mx-auto  w-full ">
        <div className="flex gap-12 w-full ">
          <div className={` flex-col gap-12 w-full sm:w-2/3 ${post}`}>
            <div className="flex sm:hidden gap-4 ">
              <button className="shadow-lg shadow-slate-300 rounded-xl px-10 py-2">
                All Events
              </button>
              <button className="shadow-lg shadow-slate-300 rounded-xl px-10 py-2">
                Recent events
              </button>
            </div>
            <div className="flex flex-col px-8 py-4  rounded-3xl shadow-xl w-full gap-6 ">
              <div className="flex gap-6 items-center">
                <img src={ngoLogo} className="rounded-full w-16 h-16" />
                <div className="flex flex-col p-1 gap-.5">
                  <div className="text-2xl tracking-wider text-gray-800 font-extralight">
                    Donate India
                  </div>
                  <div className="text-sm text-gray-500 tracking-wide">
                    2h ago
                  </div>
                </div>
              </div>
              <div>
                <img src={eventImage} className="w-full h-64"></img>
              </div>
              <div className="font-semibold text-2xl pl-3 font-mono">
                Joei Events
              </div>
              <div className="font-light leading-7 -mt-3">
                Joie Events is one of the leading NGO Award Function and event
                management company in Delhi, India. We pleasure to help you in
                managing NGO Award Function events with very reasonably prices.
                We make strategies to make your NGO events success from every
                perspective. We understand the social responsibility and for
                this we organize NGO Award Function services at our best level.
                First we decide the venue of the NGO award function as per the
                requirement and nature of the NGO award ceremony.
              </div>
            </div>
            <div className="flex flex-col px-8 py-4  rounded-3xl shadow-xl w-full gap-6">
              <div className="flex gap-6 items-center">
                <img src={ngoLogo} className="rounded-full w-16 h-16" />
                <div className="flex flex-col p-1 gap-.5">
                  <div className="text-2xl tracking-wider text-gray-800 font-extralight">
                    Donate India
                  </div>
                  <div className="text-sm text-gray-500 tracking-wide">
                    2h ago
                  </div>
                </div>
              </div>
              <div>
                <img src={eventImage} className="w-full h-64"></img>
              </div>
              <div className="font-semibold text-2xl pl-3 font-mono">
                Joei Events
              </div>
              <div className="font-light leading-7 -mt-3">
                Joie Events is one of the leading NGO Award Function and event
                management company in Delhi, India. We pleasure to help you in
                managing NGO Award Function events with very reasonably prices.
                We make strategies to make your NGO events success from every
                perspective. We understand the social responsibility and for
                this we organize NGO Award Function services at our best level.
                First we decide the venue of the NGO award function as per the
                requirement and nature of the NGO award ceremony.
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-col  w-1/3 gap-8">
            <div className="flex flex-col justify-center items-center w-full p-6 pt-12 rounded-2xl shadow-2xl gap-4 relative">
              <img src={ngoLogo} className="rounded-full shadow-xl w-20 h-20" />
              <div className="text-2xl font-medium tracking-wide text-gray-700">
                Donate India
              </div>
              <div className="absolute top-4 right-4 text-gray-400 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="tracking-widest">Janakpuri</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div
                className="rounded-xl px-8 py-2  text-lg bg-white shadow-lg shadow-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                All events
              </div>
              <div
                className="rounded-xl px-8 py-2  text-lg bg-white shadow-lg shadow-slate-200  hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                Recent events
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
