import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openDropD, setOpenDropD] = React.useState(false);

  React.useEffect(() => {
    const handleresize = () => {
      window.innerWidth >= 960 && setOpenNav(false);
    };
    window.addEventListener("resize", handleresize);
    return () => window.removeEventListener("resize", handleresize);
  }, []);

  const hamb = (
    <div className="h-8 w-8">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 7L7 7M20 7L11 7"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M20 17H17M4 17L13 17"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M4 12H7L20 12"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    </div>
  );

  const cross = (
    <div className="h-8 w-8 transition-all">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M19 5L5 19M5.00001 5L19 19"
            stroke="#3b82f6 "
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </div>
  );

  const profiledropdown = (
    <div className="absolute p-4 z-50 right-8 md:right-0 top-4 text-nowrap border-2 border-blue-500 bg-blue-100 rounded-xl">
      <ul className="flex flex-col gap-2 ">
        <li>
          <Link>My Profile</Link>
        </li>
        <li>
          <Link>Logout</Link>
        </li>
      </ul>
    </div>
  );

  const Navlinks = (
    <div className="transition-all">
      <ul className="flex gap-4 flex-col md:flex-row font-oswald transition-all">
        <li className="md:hidden transition-all">
          <input
            type="text"
            className="placeholder-blue-500 transition-all placeholder:font-oswald px-2 rounded-full"
            placeholder="Search"
          />
        </li>
        <li
          onClick={() => setOpenNav(false)}
          className="hover:underline transition-all hover:underline-offset-2"
        >
          <Link to={"/mynotes"}>My Notes</Link>
        </li>
        <li
          onClick={() => setOpenDropD(!openDropD)}
          className="hover:underline transition-all hover:underline-offset-2"
        >
          Suyash Sharma...
          {openDropD && (<div className="relative"> 
            {profiledropdown}
          </div>)}
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <div className="bg-blue-100 flex justify-between items-center p-4 md:px-12 rounded-2xl shadow-md hover:shadow-xl text-blue-500">
        <div>
          <h1 className="text-md md:text-xl font-protest transition-all">
            <Link to={"/"}>Notes Keeper</Link>
          </h1>
        </div>

        <div>
          <div className="hidden md:block">
            <input
              type="text"
              className="placeholder-blue-500 placeholder:font-oswald px-2 rounded-full"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="hidden md:block">{Navlinks}</div>

        <div
          onClick={() => setOpenNav(!openNav)}
          role="Button"
          className="md:hidden transition-all"
        >
          {!openNav ? hamb : cross}
        </div>

        {openNav && (
          <div className="md:hidden transition-all shadow-lg rounded-2xl absolute z-50 right-8 top-16 p-8 bg-blue-100 border-2 border-blue-500">
            {Navlinks}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
