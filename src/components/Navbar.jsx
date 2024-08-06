import React from "react";

import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex gap-4 justify-center text-2xl items-center ">
       <a href="https://www.linkedin.com/in/hari-a-suresh/"><FaLinkedin /></a> 
       <a href="https://github.com/Hariasuresh"> <FaGithubSquare /></a>
        <a href="https://www.instagram.com/im_hari_a_suresh/"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
