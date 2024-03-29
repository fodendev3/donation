/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDataContext } from "../../context/ContextProvider";
// import styled from 'styled-components';
// import PropTypes from "prop-types";
import userImage from "./images.jpg";
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

const Dashboard = () => {
  const [dashboardAnimation, setDashboardAnimation] = useState("");
  const { ngoData: data } = useDataContext()

  setTimeout(() => {
    setDashboardAnimation("hidden");
  }, 1000);

  return (
    <>
      {/* Animation of dahboard for showing palete */}
      <div className={`my-24 sm:mt-8 px-16 ${dashboardAnimation}`}>
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
      <div
        className={`${dashboardAnimation === "" ? "hidden" : ""
          }  mt-24 sm:mt-8`}
      >
        <div className=" px-2 xsm:px-12 grid xlg:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12 ">
          <div className="shadow-[0_1px_16px_2px_rgba(0,0,0,.2)] rounded-xl  px-2 sm:px-8 py-6 flex  flex-col gap-6 bg-slate-50 hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
            <div className="flex gap-10">
              <img
                src={userImage}
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
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0  justify-between items-center ">
              <div>
                <button className="bg-gradient-to-r from-[#2dc1e4] to-[#e8ecc7]  text-gray-100 rounded-2xl px-6 py-2 text-xl font-medium hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
                  More info
                </button>
              </div>
              <div className="flex flex-col sm:flex-row  gap-4 items-center">
                <button className="bg-green-400 text-white rounded-2xl px-6 py-2 text-xl font-medium  hover:bg-gray-100 hover:text-green-400 hover:border-green-400 hover:border-2 transition-all duration-200 ease-in-out ">
                  Accept
                </button>
                <button className="text-red-400 border-2 border-red-400 rounded-2xl px-6 py-2 text-xl font-medium  hover:bg-red-400 hover:text-gray-100 hover:border-none  transition-all duration-200 ease-in-out ">
                  Decline
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-[0_1px_16px_2px_rgba(0,0,0,.2)] rounded-xl  px-2 sm:px-8 py-6 flex  flex-col gap-6 bg-slate-50 hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
            <div className="flex gap-10">
              <img
                src={userImage}
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
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0  justify-between items-center ">
              <div>
                <button className="bg-gradient-to-r from-[#2dc1e4] to-[#e8ecc7]  text-gray-100 rounded-2xl px-6 py-2 text-xl font-medium hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
                  More info
                </button>
              </div>
              <div className="flex flex-col sm:flex-row  gap-4 items-center">
                <button className="bg-green-400 text-white rounded-2xl px-6 py-2 text-xl font-medium  hover:bg-gray-100 hover:text-green-400 hover:border-green-400 hover:border-2 transition-all duration-200 ease-in-out ">
                  Accept
                </button>
                <button className="text-red-400 border-2 border-red-400 rounded-2xl px-6 py-2 text-xl font-medium  hover:bg-red-400 hover:text-gray-100 hover:border-none  transition-all duration-200 ease-in-out ">
                  Decline
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-[0_1px_16px_2px_rgba(0,0,0,.2)] rounded-xl  px-2 sm:px-8 py-6 flex  flex-col gap-6 bg-slate-50 hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
            <div className="flex gap-10">
              <img
                src={userImage}
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
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0  justify-between items-center ">
              <div>
                <button className="bg-gradient-to-r from-[#2dc1e4] to-[#e8ecc7]  text-gray-100 rounded-2xl px-6 py-2 text-xl font-medium hover:bg-gray-100 hover:text-[#2dc1e4] hover:border-[#2dc1e4] hover:border-2 transition-all duration-200 ease-in-out ">
                  More info
                </button>
              </div>
              <div className="flex flex-col sm:flex-row  gap-4 items-center">
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

export default Dashboard;
