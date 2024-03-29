import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Navbar from "../User/Navbar";
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import userImage from "./images.jpg";
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const Allngo = () => {
  const [dashboardAnimation, setDashboardAnimation] = useState("");

  setTimeout(() => {
    setDashboardAnimation("hidden");
  }, 1000);

  return (
    <>
      <Navbar />

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
        className={`${
          dashboardAnimation === "" ? "hidden" : ""
        }  mt-24 sm:mt-8`}
      >
        <div className=" px-2 xsm:px-12 grid xlg:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12 ">
          <div className="shadow-[0_1px_16px_2px_rgba(0,0,0,.2)] rounded-xl  px-2 sm:px-8 py-6 flex  flex-col gap-6 bg-slate-50  hover:text-colorPrimary hover:border-colorPrimary hover:border-2 transition-all duration-200 ease-in-out ">
            <div className="flex gap-10">
              <img
                src={userImage}
                className="w-24 h-24  rounded-full shadow-2xl"
              />
              <div className="flex flex-col gap-1">
                <div className="text-2xl tracking-widest text-neutral-500 font-light">
                  Donate India
                </div>
                <div className="text-base tracking-wide">
                  <span className="text-lg font-semibold tracking-wider pr-1">
                    Locality :
                  </span>
                  Janakpuri
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
                We are contributing towards the welfare of the women and child
                by providing them proper knowledge and skills
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0  justify-between items-center ">
              <div>
                <Link
                  to="/ngo/id"
                  className="bg-gradient-to-r from-colorPrimary  to-colorSecondary text-white rounded-2xl px-6 py-2 text-xl font-medium  hover:border-2 transition-all duration-200 ease-in-out "
                >
                  More info
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-[0_1px_16px_2px_rgba(0,0,0,.2)] rounded-xl  px-2 sm:px-8 py-6 flex  flex-col gap-6 bg-slate-50  hover:text-colorPrimary hover:border-colorPrimary hover:border-2 transition-all duration-200 ease-in-out ">
            <div className="flex gap-10">
              <img
                src={userImage}
                className="w-24 h-24  rounded-full shadow-2xl"
              />
              <div className="flex flex-col gap-1">
                <div className="text-2xl tracking-widest text-neutral-500 font-light">
                  Donate India
                </div>
                <div className="text-base tracking-wide">
                  <span className="text-lg font-semibold tracking-wider pr-1">
                    Locality :
                  </span>
                  Janakpuri
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
                We are contributing towards the welfare of the women and child
                by providing them proper knowledge and skills
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0  justify-between items-center ">
              <div>
                <Link
                  to="/ngo/id"
                  className="bg-gradient-to-r from-colorPrimary  to-colorSecondary text-white rounded-2xl px-6 py-2 text-xl font-medium  hover:border-2 transition-all duration-200 ease-in-out "
                >
                  More info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allngo;
