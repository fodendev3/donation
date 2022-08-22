import React from "react";
import TrackDonationCard from "./TrackDonationCard";
// import styled from "styled-components";
// import PropTypes from "prop-types";

/**
 *
 */
const TrackDonation = () => {
  return (
    <div className="max-w-6xl mx-16 my-10 xl:mx-auto flex gap-4 xl:gap-16 ">
      <div className=" gap-4 shadow-2xl rounded-3xl py-2 px-5 pb-10 w-1/2 xl:w-1/3 hidden xl:flex xl:flex-col h-full">
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
      <div className="flex flex-col w-full xl:w-2/3 gap-10">
        <TrackDonationCard
          info={{
            status: "completed",
            description: "Wants to donate some cloths",
            ngoname: "Donate india",
            ngoid: "45678",
            dateDonationAccepted: "12/04/2022",
            dateDonationCompleted: "16/04/2022",
          }}
        />
        <TrackDonationCard
          info={{
            status: "active",
            description: "Wants to donate some cloths",
            ngoname: "Donate india",
            ngoid: "45678",
          }}
        />
      </div>
    </div>
  );
};

export default TrackDonation;
