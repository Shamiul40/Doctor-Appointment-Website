import React from "react";
import logoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-20 my-12 bg-white shadow-2xl">
      <div className="flex justify-center">
        <NavLink className="flex justify-center items-center gap-2 text-2xl font-bold">
          <img className="w-8" src={logoImg} alt="" />
          Phudu
        </NavLink>
      </div>
      <div className="flex justify-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-[#176AE5] "
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-[#176AE5] "
                  : ""
              }
              to="myBookings"
            >
              My-Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-[#176AE5] "
                  : ""
              }
              to="blogs"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-[#176AE5] "
                  : ""
              }
              to="contactUs"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="border-dashed border-gray-300 mb-2" />
      <div className="flex justify-center items-center gap-4">
        <a href="https://www.facebook.com/john.doe" target="_blank" rel="noopener noreferrer"> <FaFacebookF /> </a>
        
        <a href="https://www.youtube.com/@JohnDoeChannel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a  href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
        <a href="https://www.instagram.com/john.doe/" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
      </div>
    </div>
  );
};

export default Footer;
