import React from 'react';
import classes from './pricing.module.css';

import { pricingPlans } from '../../helpers/constants';

function Pricing() {
  return (
    <section className={classes.pricing} id='pricing'>
      <div className={classes.container}>
        <h2 className={classes.title}>Our Pricing Plans</h2>
        <div className={classes.cardsContainer}>
          {pricingPlans.map((plan, index) => (
            <div key={index} className={classes.card}>
              <h3 className={classes.cardTitle}>{plan.title}</h3>
              <p className={classes.cardPrice}>{plan.price}</p>
              <p className={classes.cardDescription}>{plan.description}</p>
              <ul className={classes.featuresList}>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={classes.cardButton}>Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
