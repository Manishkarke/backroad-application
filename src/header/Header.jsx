import React, { useState } from "react";
import Navigation from "./Navigation";
import { logo } from "../assets/index";
import SocialMedia from "./SocialMedia";
import "./Header.css";

function Header() {
  const [toggle, setToggle] = useState(false);
  // const [icon, setIcon] = useState('fa-bars')
  return (
    <header className='header-container'>
      <div className='header-content'>
        <div className='nav-menu'>
          <img src={logo} alt='Company Logo' />

          <button className='nav-toggle' onClick={() => setToggle(!toggle)}>
            <i className={`fas fa-bars`} />
          </button>
        </div>
        <Navigation toggle={toggle} />
        <SocialMedia toggle={toggle} />
      </div>
    </header>
  );
}

export default Header;
