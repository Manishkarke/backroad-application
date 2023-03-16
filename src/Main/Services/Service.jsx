import React from "react";

function Service({ icon, title, details }) {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon} />
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p>{details}</p>
      </div>
    </article>
  );
}

export default Service;
