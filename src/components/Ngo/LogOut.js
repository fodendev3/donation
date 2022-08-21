import React from "react";
import logOutIcon from "./confirmation.png";
import { Link } from "react-router-dom";
export default function LogOut() {
  function hiddenModal() {
    document.querySelector(".logoutPanel").classList.add("hidden");
  }
  return (
    <>
      <div className="relative w-screen h-screen logoutPanel">
        <div className="absolute top-1/2 left-1/2  modal z-10 -translate-x-1/2 -translate-y-1/2 ">
          <div className="bg-white flex flex-col gap-6  items-center px-16 py-8 rounded-3xl border-t-8 border-t-green-400 ">
            <img
              src={logOutIcon}
              alt="Log out"
              className="w-24 animate-[spin_1s_ease-in-out]"
            />
            <h1 className="text-xl tracking-wide">
              Are you sure you want to logout
            </h1>
            <div className="flex gap-8 ">
              <button
                className="tracking-wider rounded-2xl text-xl font-semibold bg-[#7ed56f] px-6 py-2 text-gray-100 transition-all duration-200 hover:scale-105 hover:-translate-y-1 ngo-logout-cancel"
                onClick={hiddenModal}
              >
                Cancel
              </button>
              <Link
                to="/"
                className="tracking-wider rounded-2xl text-xl font-semibold bg-[#28b485]  px-6 py-2 text-white transition-all duration-200 hover:scale-105 hover:-translate-y-1 ngo-logout-confirm"
              >
                Confirm
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-screen h-screen bg-black/20 overlay -z-1 "
          onClick={hiddenModal}
        ></div>
      </div>
    </>
  );
}
