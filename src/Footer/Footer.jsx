import React, { useEffect, useState } from "react";
import "./Footer.css";
import { navigationLinks, socialMedia } from "../constants/constant";

function Footer() {
  const [date, setDate] = useState();

  useEffect(() => {
    const year = new Date().getFullYear();
    setDate(year);
  }, []);
  return (
    <footer className='section footer-section'>
      {/* FOOTER LINKS */}
      <ul className='footer-links'>
        {navigationLinks.map(({ name, route }) => {
          return (
            <li key={name}>
              <a href={`${route}`}>{name}</a>
            </li>
          );
        })}
      </ul>

      {/* FOOTER ICONS */}
      <ul className='footer-icons'>
        {socialMedia.map(({ id, link, iconClass }) => {
          return (
            <li key={id}>
              <a href={`${link}`}>
                <i className={`fab ${iconClass}`} />
              </a>
            </li>
          );
        })}
      </ul>

      {/* COPYRIGHT BELONGS TO HERE */}
      <p className='copyright'>
        copyright &copy; backroads travel tours company <span id='date'>{date}</span> all rights
        reserved
      </p>
    </footer>
  );
}

export default Footer;
