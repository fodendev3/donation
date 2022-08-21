import React, { useState } from "react";
import ngoLogo from "./images.jpg";
import eventImage from "./download.jpg";
export default function Posts() {
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
      <div
        className="fixed bottom-6 right-14 p-3  bg-gradient-to-r from-[rgba(143,198,253,.8)] to-[rgba(224,196,253,.8)] hover:from-[rgba(143,198,253,1)] hover:to-[rgba(224,196,253,1)] rounded-full flex items-center justify-center"
        title="New Post"
        onClick={() => {
          setPost("hidden");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 font-bold hover:animate-[spin_1s_ease-in-out] text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>

      <div className="pt-32 sm:pt-10  max-w-6xl px-8 xl:mx-auto  w-full ">
        <div className="flex gap-12 w-full ">
          <div className={` flex-col gap-12 w-full sm:w-2/3 ${post}`}>
            <div className="flex sm:hidden gap-4 ">
              <button className="shadow-lg shadow-slate-300 rounded-xl px-10 py-2">
                Our post
              </button>
              <button className="shadow-lg shadow-slate-300 rounded-xl px-10 py-2">
                Recent post
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
          <div
            className={`w-full sm:w-2/3 shadow-[-4px_0px_24px_rgba(0,0,0,.4)]  shadow-slate-300 rounded-3xl px-8 py-8 pt-16  flex-col gap-8 text-gray-600 relative ${
              post === "flex" ? "hidden" : "flex"
            }`}
          >
            <div
              className="absolute top-7 right-10"
              onClick={() => {
                setPost("flex");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gradient1b font-extrabold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-serif  font-thin tracking-wide">
              New post
            </h1>
            <form className="flex flex-col gap-8 w-full">
              <div className="w-full">
                <input
                  className={`w-full px-6 py-2 text-lg shadow-[0px_0px_12px_rgba(0,0,0,.2)]  bg-gray-100 rounded-lg outline-4 outline-gradient1b`}
                  type="text"
                  placeholder="Event Name"
                  required
                ></input>
              </div>

              <div className="w-full">
                <textarea
                  rows={3}
                  className={`w-full px-6 py-2 text-lg shadow-[0px_0px_12px_rgba(0,0,0,.2)]  bg-gray-100 rounded-lg outline-4 outline-gradient1b`}
                  type="text"
                  placeholder="Event description"
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <input
                  className={`w-full px-6 py-2 text-lg shadow-[0px_0px_12px_rgba(0,0,0,.2)]  bg-gray-100 rounded-lg outline-4 outline-gradient1b`}
                  type="text"
                  placeholder="Event banner image url"
                  required
                ></input>
              </div>
              <div className="w-full">
                <input
                  className={`w-full px-6 py-2 text-lg shadow-[0px_0px_12px_rgba(0,0,0,.2)]  bg-gray-100 rounded-lg outline-4 outline-gradient1b`}
                  type="text"
                  placeholder="Event url"
                ></input>
              </div>
              <button className="bg-gradient-to-r from-gradient1a to-gradient1b text-white py-3 text-3xl tracking-widest font-mono uppercase rounded-3xl hover:-translate-y-1 transition-all duration-200 hover:scale-[1.01] ">
                Submit
              </button>
            </form>
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
                Our posts
              </div>
              <div
                className="rounded-xl px-8 py-2  text-lg bg-white shadow-lg shadow-slate-200  hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                Recent posts
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}