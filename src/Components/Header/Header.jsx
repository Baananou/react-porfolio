import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Mohamed Yessine Baananou</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#Contact" className="scroll__down">
        Scroll Down
      </a>
      <HeaderSocials />
    </header>
  );
};

export default Header;
