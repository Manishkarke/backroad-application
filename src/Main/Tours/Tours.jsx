import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import Tour from "./Tour";
import { tours } from "../../constants/constant";
import "./Tours.css";

function Tours() {
  return (
    <section className='section' id='tours'>
      <SectionTitle title='Featured Tours' />

      <div className='section-center featured-center'>
        {tours.map(
          ({ id, image: { imgPath, date }, title, tourDetails, country, tourInterval, price }) => {
            return (
              <Tour
                key={id}
                imgPath={imgPath}
                date={date}
                title={title}
                details={tourDetails}
                country={country}
                interval={tourInterval}
                price={price}
              />
            );
          }
        )}
        {/* <Tour imgPath={}/>  */}
      </div>
    </section>
  );
}

export default Tours;
