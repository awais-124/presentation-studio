import React from 'react';
import classes from './testimonial.module.css';

import { testimonialsData } from '../../helpers/constants';

function Testimonials() {
  return (
    <section className={classes.testimonials} id='testimonials'>
      <div className={classes.container}>
        <h2 className={classes.title}>What Our Users Say</h2>
        <div className={classes.cardsContainer}>
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`${classes.card} ${
                index === 1 ? classes.centerCard : ''
              }`}
            >
              <img
                src={testimonial.imgPath}
                alt={`${testimonial.name}'s Testimonial`}
                className={classes.image}
              />
              <p className={classes.feedback}>"{testimonial.feedback}"</p>
              <h3 className={classes.name}>{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
