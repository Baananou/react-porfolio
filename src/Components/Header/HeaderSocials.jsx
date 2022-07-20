import React from "react";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/Baananou" target="_blank" rel="noreferrer">
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mohamed-yessine-baananou/"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
      <a
        href="https://www.facebook.com/Mohamed.Yessine.Baananou"
        target="_blank"
        rel="noreferrer"
      >
        <FiFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
