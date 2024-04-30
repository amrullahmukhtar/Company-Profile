"use client";



import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-5 md:px-10 py-1 sticky top-0 z-40 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-10" src="/logo.png" alt="Logo" />
        </div>
        

        <div className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <a className="navitem" href="/">
                <b>Home</b>
              </a>
            </li>
            <li>
              <a className="navitem" href="/aboutUs">
                <b>About Us</b>
              </a>
            </li>
            <li>
              <a className="navitem" href="/service">
                <b>Service</b>
              </a>
            </li>
            <li>
              <a className="navitem" href="/team">
                <b>Our Team</b>
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="flex items-center align-middle justify-center text-center">
          <div className=" max-w-4 mr-2 flex items-center justify-center">
            <img className="" src="/call1.png" />
          </div>
          <p className="text-sm p-0" href="/">
            021-2220325
          </p>
        </div>
        <div className="md:hidden">
          <button
            className=" focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 md:hidden bg-none">
          <ul className="flex flex-col space-y-2 ">
            <li>
              <a className="" href="/">
                <b>Home</b>
              </a>
            </li>
            <li>
              <a className="" href="/aboutUs">
                <b>About Us</b>
              </a>
            </li>
            <li>
              <a className="" href="/service">
                <b>Service</b>
              </a>
            </li>
            <li>
              <a className="" href="/team">
                <b>Our Team</b>
              </a>
            </li>
          </ul>
        </div>
      )}

        
    </nav>
  );
};

export default Navbar;
