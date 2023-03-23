import React from "react";

function Tour({ imgPath, date, title, details, country, interval, price }) {
  return (
    <article className='card'>
      <figure className='tour-img-container'>
        <img src={imgPath} alt={title} className='tour-img' />
        <figcaption>{date}</figcaption>
      </figure>

      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{details}</p>

        <div className='footer'>
          <p>
            <span>
              <i className='fas fa-map' />
            </span>
            {country}
          </p>
          <p>{`${interval} days`}</p>
          <p>{`from $${price}`}</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;
