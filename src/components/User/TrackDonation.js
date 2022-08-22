import React from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";

/**
 *
 */
const TrackDonation = () => {
  return (
    <div className="bg-red-200 sm:bg-blue-200 lg:bg-pink-300">
      <div className="max-w-6xl mx-16 my-10 xl:mx-auto flex gap-4 xl:gap-16 ">
        <div className=" gap-4 shadow-2xl rounded-3xl py-2 px-5 pb-10 w-1/2 xl:w-1/3 hidden xl:flex xl:flex-col">
          <div className=" px-4  py-3 text-2xl font-mono">Donation Report</div>
          <div className="rounded-3xl shadow-slate-400 shadow-2xl pl-4  py-4 text-xl bg-blue-300 text-white font-mono">
            Total Donation : 10
          </div>
          <div className="rounded-3xl shadow-slate-400 shadow-2xl pl-4  py-4 text-xl bg-lime-300 text-white font-mono">
            Active Donation : 5
          </div>
          <div className="rounded-3xl shadow-slate-400 shadow-2xl pl-4   py-4 text-xl bg-green-300 text-white font-mono">
            Completed Donation : 7
          </div>
        </div>
        <div className="flex flex-col w-full xl:w-2/3">
          <div className="border-2 border-lime-400 bg-white rounded-3xl px-12 py-4 flex flex-col gap-4 aniamte-pulse w-full">
            <div className="flex  items-center">
              <div className="mr-5 font-bold text-2xl font-mono text-lime-400">
                Status
              </div>
              <div className="text-xl">Active</div>
            </div>
            <div className="flex items-center">
              <div className="mr-5 font-bold text-2xl font-mono text-lime-400">
                Accepting NGO
              </div>
              <div className="text-2xl text-gray-600 ">Donate India</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="mr-5 font-bold text-2xl font-mono text-lime-400">
                Description
              </div>
              <div className="text-lg">Wants to donate some clothes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDonation;
