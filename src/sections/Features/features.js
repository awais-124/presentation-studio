import React from 'react';
import classes from './features.module.css';
import { featuresData } from '../../helpers/constants';

function Features() {
  return (
    <section className={classes.featuresSection} id='features'>
      <div className={classes.featuresContent}>
        <h2 className={classes.heading}>Our Features</h2>
        <div className={classes.cardsContainer}>
          {featuresData.map((feature, index) => (
            <div key={index} className={classes.card}>
              <div className={classes.icon}>{feature.icon}</div>
              <h3 className={classes.cardTitle}>{feature.title}</h3>
              <p className={classes.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
