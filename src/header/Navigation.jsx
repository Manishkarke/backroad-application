import React from "react";
import { navigationLinks } from "../constants/constant";

function Navigation({ toggle }) {
  return (
    <nav className={`navigation ${toggle ? "show-links" : ""}`}>
      <ul>
        {navigationLinks.map(({ name, route }, index) => {
          return (
            <li key={index}>
              <a href={route}>{name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
