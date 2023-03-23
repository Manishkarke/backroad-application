import React from "react";

function SectionTitle({ title }) {
  const sectionTitle = title.split(" ");
  return (
    <div className='section-title'>
      <h2>
        {sectionTitle[0]} 
        <span>{` ${sectionTitle[1]}`}</span>
      </h2>
    </div>
  );
}

export default SectionTitle;
