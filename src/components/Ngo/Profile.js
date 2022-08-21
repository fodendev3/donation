import React, { useState } from "react";
import ngoImage from "./images.jpg";
import LogOut from "./LogOut";

export default function Profile() {
  {
    document.querySelector("body").style.overflowX = "hidden";
  }
  const [edit, setEdit] = useState(true);
  const [page, setpage] = useState("profile");

  return (
    <>
      <div className={`${page === "logout" ? "" : "hidden"}`}>
        <LogOut />
      </div>
      <div className="">
        <div className="max-w-7xl  2xl:mx-auto mx-12 mt-8 ">
          <h1 className="text-3xl font-mono">Settings</h1>
          <div className="flex gap-28 mt-8">
            <div className="flex flex-col  gap-5 tracking-wider">
              <div
                className={`text-xl cursor-pointer ${
                  page === "profile" ? "font-bold tracking-widest text-2xl" : ""
                }`}
                onClick={() => {
                  setpage("profile");
                }}
              >
                Profile
              </div>
              <div
                className={`text-xl cursor-pointer ${
                  page === "password"
                    ? "font-bold tracking-widest text-2xl"
                    : ""
                }`}
                onClick={() => {
                  setpage("password");
                }}
              >
                Password
              </div>
              <div
                className={`text-xl cursor-pointer ${
                  page === "logout" ? "font-bold tracking-widest text-2xl" : ""
                }`}
                onClick={() => {
                  setpage("logout");
                }}
              >
                Logout
              </div>
            </div>
            <div className="w-full">
              <div className="h-36 rounded-tl-3xl w-full bg-gray-200 relative">
                <img
                  src={ngoImage}
                  alt="Ngo Logo"
                  className="absolute rounded-full w-28 h-28 top-[85%] left-8"
                ></img>
                <div className="absolute top-full left-44 mt-4 flex flex-col gap-1">
                  <h1 className="text-2xl font-bold tracking-wide">
                    Donate India
                  </h1>
                  <h1 className="font-light tracking-widest">
                    Update your photos and personnal details
                  </h1>
                </div>
                <div className="absolute top-full right-0 mt-4 flex gap-4 items-center">
                  <button
                    className={`bg-gray-200 text-black font-semibold px-4 py-2 rounded-xl ${
                      edit ? "hidden" : ""
                    }`}
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-black text-white px-4 py-2 rounded-xl"
                    onClick={() => {
                      edit ? setEdit(false) : setEdit(true);
                    }}
                  >
                    {edit ? "Update" : "Save Changes"}
                  </button>
                </div>
              </div>
              <div
                className={` gap-10 mt-36 w-full flex-col ${
                  page === "profile" ? "flex" : "hidden"
                }`}
              >
                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    Organisation Name
                  </div>
                  <div className="w-full">
                    <input
                      disabled={edit}
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="text"
                      value="Donate India"
                    ></input>
                  </div>
                </div>
                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    Website
                  </div>
                  <div className="w-full">
                    <input
                      disabled={edit}
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="text"
                      value="donationweb.vercel.app"
                    ></input>
                  </div>
                </div>
                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    <div>Logo Url</div>
                    <div className="font-light tracking-widest text-base mt-1">
                      This will be displayed on your profile{" "}
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      disabled={edit}
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="text"
                      value="webpages.webp"
                    ></input>
                  </div>
                </div>
                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    <div>Description</div>
                    <div className="font-light tracking-widest text-base mt-1">
                      About 100 words
                    </div>
                  </div>
                  <div className="w-full">
                    <textarea
                      rows={3}
                      disabled={edit}
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="text"
                      value="We are contributing towards the welfare of the women and child by providing them proper knowledge and skills"
                    ></textarea>
                  </div>
                </div>

                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    <div>Email</div>
                  </div>
                  <div className="w-full">
                    <input
                      disabled={edit}
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="email"
                      value="care@donateindia.com"
                    ></input>
                  </div>
                </div>
                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    <div>Contact No</div>
                  </div>
                  <div className="w-full">
                    <input
                      disabled={edit}
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="text"
                      value="8612635623"
                    ></input>
                  </div>
                </div>
                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    <div>Alternate Contact No</div>
                  </div>
                  <div className="w-full">
                    <input
                      disabled={edit}
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="tel"
                      value="6545812721"
                    ></input>
                  </div>
                </div>

                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    <div>Locality</div>
                  </div>
                  <div className="w-full">
                    <input
                      disabled={edit}
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="tel"
                      value="Janakpuri"
                    ></input>
                  </div>
                </div>
                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    <div>Address</div>
                  </div>
                  <div className="w-full">
                    <textarea
                      rows={2}
                      disabled={edit}
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="text"
                      value="C-4 , Street no.10,Block C , Janakpuri , New Delhi"
                    ></textarea>
                  </div>
                </div>
                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    <div>Pincode</div>
                  </div>
                  <div className="w-full">
                    <input
                      disabled={edit}
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="text"
                      value="110058"
                    ></input>
                  </div>
                </div>
              </div>
              <div
                className={` gap-10 mt-36 w-full flex-col ${
                  page === "password" ? "flex" : "hidden"
                }`}
              >
                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    <div>New password</div>
                  </div>
                  <div className="w-full">
                    <input
                      className={`w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      type="text"
                      placeholder="New password"
                    ></input>
                  </div>
                </div>
                <div className="flex gap-12 w-full items-center">
                  <div className="text-xl tracking-wide font-medium w-1/2">
                    <div>New password</div>
                  </div>
                  <div className="w-full relative">
                    <input
                      type="password"
                      className={`password-show w-full px-6 py-2 text-lg ${
                        edit ? "text-gray-600" : ""
                      }  bg-gray-100 rounded-lg`}
                      placeholder="Confirm Password"
                    ></input>
                    <div
                      className="absolute right-6 top-1/2 -translate-y-1/2"
                      onClick={() => {
                        const typePassword =
                          document.querySelector(".password-show");
                        console.log(typePassword);
                        if (typePassword.type === "text") {
                          typePassword.type = "password";
                        } else {
                          typePassword.type = "text";
                        }
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" text-right mb-12">
                  <button className="bg-black text-white px-4 py-2 rounded-xl">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
