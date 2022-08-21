import React from "react";
// import styled from 'styled-components';
import PropTypes from "prop-types";
import userImage from "./images.jpg";
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Dashboard = () => {
  {
    document.querySelector("body").style.overflowX = "hidden";
  }
  return (
    <>
      {setTimeout(() => {
        document
          .querySelector(".ngo-dashboard-animation")
          .classList.add("hidden");

        document.querySelector(".ngo-dashboard").classList.remove("hidden");
      }, 1000)}
      {/* Animation of dahboard for showing palete */}
      <div className="my-44 px-16 ngo-dashboard-animation">
        <div class=" shadow-2xl rounded-md p-12 max-w-lg w-full ">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-300 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-300 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for the showcase of exact data */}
      <div className="ngo-dashboard hidden mt-32">
        <div className="  px-12 grid xlg:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 ">
          <div className="shadow-[0_1px_16px_2px_rgba(0,0,0,.2)] rounded-xl  px-8 xsm:px-4 py-6 flex  flex-col gap-6 bg-slate-50 bg-slate-50  hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
            <div className="flex gap-10">
              <img
                src={userImage}
                alt="User Image"
                srcset=""
                className="w-24 h-24  rounded-full shadow-2xl"
              />
              <div className="flex flex-col gap-1">
                <div className="text-2xl tracking-widest text-neutral-500 font-light">
                  Shivansh Arora
                </div>
                <div className="text-base tracking-wide">
                  <span className="text-lg font-semibold tracking-wider pr-1">
                    Pincode :
                  </span>
                  110035
                </div>
                <div className="text-base tracking-wide">
                  <span className="text-lg font-semibold tracking-wider pr-1">
                    Phone No :
                  </span>
                  8527713895
                </div>
              </div>
            </div>
            <div>
              <span className="text-xl font-medium ">Description:</span>
              <div className="text-neutral-700 pt-2">
                Wants to donate some cloths
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div>
                <button className="bg-gradient-to-r from-[#2dc1e4] to-[#e8ecc7]  text-gray-100 rounded-2xl px-6 py-2 text-xl font-medium hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
                  More info
                </button>
              </div>
              <div className="flex gap-4 items-center">
                <button className="bg-green-400 text-white rounded-2xl px-6 py-2 text-xl font-medium  hover:bg-gray-100 hover:text-green-400 hover:border-green-400 hover:border-2 transition-all duration-200 ease-in-out ">
                  Accept
                </button>
                <button className="text-red-400 border-2 border-red-400 rounded-2xl px-6 py-2 text-xl font-medium  hover:bg-red-400 hover:text-gray-100 hover:border-none  transition-all duration-200 ease-in-out ">
                  Decline
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-[0_1px_16px_2px_rgba(0,0,0,.2)] rounded-xl  px-8 xsm:px-4 py-6 flex  flex-col gap-6 bg-slate-50 bg-slate-50  hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
            <div className="flex gap-10">
              <img
                src={userImage}
                alt="User Image"
                srcset=""
                className="w-24 h-24  rounded-full shadow-2xl"
              />
              <div className="flex flex-col gap-1">
                <div className="text-2xl tracking-widest text-neutral-500 font-light">
                  Shivansh Arora
                </div>
                <div className="text-base tracking-wide">
                  <span className="text-lg font-semibold tracking-wider pr-1">
                    Pincode :
                  </span>
                  110035
                </div>
                <div className="text-base tracking-wide">
                  <span className="text-lg font-semibold tracking-wider pr-1">
                    Phone No :
                  </span>
                  8527713895
                </div>
              </div>
            </div>
            <div>
              <span className="text-xl font-medium ">Description:</span>
              <div className="text-neutral-700 pt-2">
                Wants to donate some cloths
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div>
                <button className="bg-[#2dc1e4]  text-gray-100 rounded-2xl px-6 py-2 text-xl font-medium hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
                  More info
                </button>
              </div>
              <div className="flex gap-4 items-center">
                <button className="bg-green-400 text-white rounded-2xl px-6 py-2 text-xl font-medium  hover:bg-gray-100 hover:text-green-400 hover:border-green-400 hover:border-2 transition-all duration-200 ease-in-out ">
                  Accept
                </button>
                <button className="text-red-400 border-2 border-red-400 rounded-2xl px-6 py-2 text-xl font-medium  hover:bg-red-400 hover:text-gray-100 hover:border-none  transition-all duration-200 ease-in-out ">
                  Decline
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-[0_1px_16px_2px_rgba(0,0,0,.2)] rounded-xl  px-8 xsm:px-4 py-6 flex  flex-col gap-6 bg-slate-50 bg-slate-50  hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
            <div className="flex gap-10">
              <img
                src={userImage}
                alt="User Image"
                srcset=""
                className="w-24 h-24  rounded-full shadow-2xl"
              />
              <div className="flex flex-col gap-1">
                <div className="text-2xl tracking-widest text-neutral-500 font-light">
                  Shivansh Arora
                </div>
                <div className="text-base tracking-wide">
                  <span className="text-lg font-semibold tracking-wider pr-1">
                    Pincode :
                  </span>
                  110035
                </div>
                <div className="text-base tracking-wide">
                  <span className="text-lg font-semibold tracking-wider pr-1">
                    Phone No :
                  </span>
                  8527713895
                </div>
              </div>
            </div>
            <div>
              <span className="text-xl font-medium ">Description:</span>
              <div className="text-neutral-700 pt-2">
                Wants to donate some cloths
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div>
                <button className="bg-[#2dc1e4]  text-gray-100 rounded-2xl px-6 py-2 text-xl font-medium hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
                  More info
                </button>
              </div>
              <div className="flex gap-4 items-center">
                <button className="bg-green-400 text-white rounded-2xl px-6 py-2 text-xl font-medium  hover:bg-gray-100 hover:text-green-400 hover:border-green-400 hover:border-2 transition-all duration-200 ease-in-out ">
                  Accept
                </button>
                <button className="text-red-400 border-2 border-red-400 rounded-2xl px-6 py-2 text-xl font-medium  hover:bg-red-400 hover:text-gray-100 hover:border-none  transition-all duration-200 ease-in-out ">
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

export default Dashboard;
