import React from "react";
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
// const propTypes = {};

// const defaultProps = {};

/**
 *
 */
const Loader = () => {
  return (
    <div className=" loader w-screen h-screen  flex justify-center items-center   ">
      <div className="grid grid-rows-2 grid-cols-2 relative">
        <div className="circle absolute w-24 h-24  -top-12 -left-12 rounded-full border-[.75rem] border-yellow-400   "></div>
        <div className="circle absolute w-24 h-24  -top-12 -right-12 rounded-full border-[.75rem] border-green-400   "></div>
        <div className="circle absolute w-24 h-24  -bottom-12 -left-12 rounded-full border-[.75rem] border-blue-400   "></div>
        <div className="circle absolute w-24 h-24  -bottom-12 -right-12 rounded-full border-[.75rem] border-purple-400   "></div>

        <div className="relative w-32 h-32">
          <div className="absolute z-0 right-0 top-0 w-32 h-32 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500  triangle-left-top-big"></div>
          <div className="absolute z-10 right-12 top-8 w-12 h-12 bg-white triangle-left-top-small"></div>
          {/* <div className="relative right-0 top-0 w-20 h-20 bg-blue-200 circle-left-top-big"></div>
          <div className="relative right-0 top-0 w-20 h-20 bg-blue-200 circle-left-top-small"></div> */}
        </div>
        <div className="relative w-32 h-32">
          <div className="absolute z-0 right-0 top-0 w-32 h-32 bg-gradient-to-l from-green-300  via-green-400 to-green-500 triangle-right-top-big"></div>
          <div className="absolute z-10 left-12 top-8 w-12 h-12 bg-white triangle-right-top-small"></div>
          {/* <div className="relative right-0 top-0 w-20 h-20 bg-blue-200 circle-left-top-big"></div>
          <div className="relative right-0 top-0 w-20 h-20 bg-blue-200 circle-left-top-small"></div> */}
        </div>
        <div className="relative w-32 h-32">
          <div className="absolute z-0 left-0 top-0 w-32 h-32 bg-gradient-to-r from-blue-300  via-blue-400 to-blue-500 triangle-left-bottom-big"></div>
          <div className="absolute z-10 left-8 bottom-8 w-12 h-12 bg-white triangle-left-bottom-small"></div>
          {/* <div className="relative right-0 top-0 w-20 h-20 bg-blue-200 circle-left-top-big"></div>
          <div className="relative right-0 top-0 w-20 h-20 bg-blue-200 circle-left-top-small"></div> */}
        </div>
        <div className="relative w-32 h-32">
          <div className="absolute z-0 right-0 top-0 w-32 h-32 bg-gradient-to-r from-purple-300  via-purple-400 to-purple-500 triangle-right-bottom-big"></div>
          <div className="absolute z-10 right-8 bottom-8 w-12 h-12 bg-white triangle-right-bottom-small"></div>
          {/* <div className="relative right-0 top-0 w-20 h-20 bg-blue-200 circle-left-top-big"></div>
          <div className="relative right-0 top-0 w-20 h-20 bg-blue-200 circle-left-top-small"></div> */}
        </div>
      </div>
    </div>
  );
};

// Loader.propTypes = propTypes;
// Loader.defaultProps = defaultProps;
// // #endregion

export default Loader;
