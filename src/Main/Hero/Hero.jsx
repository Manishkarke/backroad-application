import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className='hero-section' id='home'>
      <div className='hero-banner'>
        <h1>Continue Exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem
          dicta.
        </p>
        <a href='#tours' className='btn hero-button'>
          Explore Tours
        </a>
      </div>
    </section>
  );
}

export default Hero;
