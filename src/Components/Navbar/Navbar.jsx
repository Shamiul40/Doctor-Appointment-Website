import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
            <NavLink className={({isActive})=>isActive? "underline underline-offset-4 decoration-[#176AE5] " : ""} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive? "underline underline-offset-4 decoration-[#176AE5] " : ""} to="myBookings">My-Bookings</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive? "underline underline-offset-4 decoration-[#176AE5] " : ""} to="blogs" >Blogs</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive? "underline underline-offset-4 decoration-[#176AE5] " : ""} to="contactUs">Contact Us</NavLink>
          </li>
          </ul>
        </div>

        <NavLink className="flex justify-center items-center gap-2 text-2xl font-bold">
          <img className="w-8" src={logoImg} alt="" />
          Phudu
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className={({isActive})=>isActive? "underline underline-offset-4 decoration-[#176AE5] " : ""} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive? "underline underline-offset-4 decoration-[#176AE5] " : ""} to="myBookings">My-Bookings</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive? "underline underline-offset-4 decoration-[#176AE5] " : ""} to="blogs" >Blogs</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive? "underline underline-offset-4 decoration-[#176AE5] " : ""} to="contactUs">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#176AE5] text-white rounded-4xl">Emergyncy</a>
      </div>
    </div>
  );
};

export default Navbar;
