import React from "react";
import { FiHome, FiUser } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";

import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <a href="#top">
        <FiHome />
      </a>
      <a href="#about">
        <FiUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <TbMessageCircle />
      </a>
    </nav>
  );
};

export default Nav;
