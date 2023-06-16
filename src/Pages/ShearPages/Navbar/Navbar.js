import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar  bg-[#F1F5F9]">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 text-[#70797E]  flex-col shadow bg-base-100 rounded-box w-52"
          >
            <ul>
              <li className="link-underline link-underline-black">
                <Link to="/">Home</Link>
              </li>
              <li className="link-underline link-underline-black2">
                <Link to="/services">Companies</Link>
              </li>
              <li className="link-underline link-underline-black3">
                <Link to="/products">Suppliers</Link>
              </li>
              <li className="link-underline link-underline-black4">
                <Link to="/about">Projects</Link>
              </li>
              <li className="link-underline link-underline-black5">
                <Link to="/contact">Setting</Link>
              </li>
              <li className="link-underline link-underline-black5">
                <Link to="/contact">Logout</Link>
              </li>
            </ul>
            ,
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Link to="/" className="pr-96">
          <p className="text-sky-500  font-bold text-xl  pl-6">
            Herman Cleaners
          </p>
        </Link>
        <ul className="flex gap-4 text-[#70797E] ">
          <li className="link-underline hover:text-black link-underline-black">
            <Link to="/">Home</Link>
          </li>
          <li className="link-underline hover:text-black link-underline-black2">
            <Link to="/services">Companies</Link>
          </li>
          <li className="link-underline hover:text-black link-underline-black3">
            <Link to="/products">Suppliers</Link>
          </li>
          <li className="link-underline hover:text-black link-underline-black4">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="link-underline hover:text-black link-underline-black5">
            <Link to="/contact">Setting</Link>
          </li>
          <li className="link-underline hover:text-black link-underline-black5">
            <Link to="/contact">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="lg:hidden mr-6">
          <p className="text-sky-500  font-bold text-xl  pl-6">
            Harman Cleaners
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
