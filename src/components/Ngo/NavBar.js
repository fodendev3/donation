import React from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import profileImage from "./images.jpg";
const NavBar = () => {
  return (
    <div class="relative">
      <div className="sticky flex top-0 left-0 lex justify-between items-center w-screen py-8 px-8  sm:py-2 shadow-md">
        <div>
          <a href="/" className="flex items-center gap-4">
            <Logo dimension={2.5} />
            <h1
              className="text-4xl font-mono italic text-transparent bg-clip-text bg-gradient-to-t from-[#2dc1e4] to-[#e8ecc7] hidden lg:block"
              style={{
                wordSpacing: ".1rem",
                letterSpacing: ".1rem",
              }}
            >
              DoNation
            </h1>
          </a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="/">Home</a>
          <a href="/">Dashboard</a>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </a>
          <a href="/">
            <img src={profileImage} className="w-14 h-14 rounded-full" alt=''></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
