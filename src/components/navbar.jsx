import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-teal-500 mr-6">
        <span className="font-semibold text-2xl tracking-tight">Kyoso</span>
        <div className="border-l h-11  mx-3 hidden lg:block"></div>
      </div>

      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
        <div className="text-sm lg:flex-grow space-x-15">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 mr-8 "
          >
            <div className="flex flex-col items-center">
              <img className="h-5 w-5" src="/feed.png" alt="Feed Logo" />
              FEED
            </div>
          </a>

          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 mr-8"
          >
            <div className="flex flex-col items-center">
              <img className="h-5 w-5" src="/users.svg" alt="user Logo" />
              NETWORKS
            </div>
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 mr-8"
          >
            {" "}
            <div className="flex flex-col items-center">
              <img className="h-5 w-5" src="/case.svg" alt="case Logo" />
              PROJECT
            </div>
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 mr-8"
          >
            <div className="flex flex-col items-center">
              <img className="h-5 w-5" src="/chat.svg" alt="chat Logo" />
              CHAT
            </div>
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 mr-8"
          >
            <div className="flex flex-col items-center">
              <img className="h-5 w-5" src="/bell.svg" alt="bell Logo" />
              NOTIFICATIONS
            </div>
          </a>
        </div>
      </div>
      <div className="border-l h-11  mx-3 hidden lg:block"></div>
      <div className="relative mx-3">
        <input
          type="text"
          className="pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300"
          placeholder="Search"
        />
        <AiOutlineSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-teal-400" />
      </div>
      <div>
        <button className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-teal-500 hover:border-black">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
