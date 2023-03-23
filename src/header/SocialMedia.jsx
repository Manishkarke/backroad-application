import React from "react";
import { socialMedia } from "../constants/constant";

function SocialMedia() {
  return (
    <div className='social-media'>
      {socialMedia.map(({ id, link, iconClass }) => {
        return (
          <a href={link}>
            <i className={`fab ${iconClass}`} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedia;
