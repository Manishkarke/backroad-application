import React from "react";
import "./About.css";
import { about } from "../../assets";
import SectionTitle from "../../UI/SectionTitle";

function About() {
  return (
    <section className='section' id='about'>
      <SectionTitle title='About Us' />

      <article className='section-center about-center'>
        <div className='about-image'>
          <img src={about} alt='Tour 1' className='about-photo' />
        </div>

        <div className='about-info'>
          <h3>Explore The Difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam
            cumque temporibus explicabo dolorum sapiente odio unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam
            cumque temporibus explicabo dolorum sapiente odio unde dolor?
          </p>
          <a href='#12' className='btn'>
            Read More
          </a>
        </div>
      </article>
    </section>
  );
}

export default About;
