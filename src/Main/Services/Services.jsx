import React from "react";
import { services } from "../../constants/constant";
import SectionTitle from "../../UI/SectionTitle";
import Service from "./Service";
import "./Services.css";

function Services() {
  return (
    <section className='section services' id='services'>
      <SectionTitle title='Our Services' />

      <article className='section-center services-center'>
        {services.map(({ iconClass, title, detail }, index) => {
          return <Service key={index} icon={iconClass} title={title} details={detail} />;
        })}
      </article>
    </section>
  );
}

export default Services;
