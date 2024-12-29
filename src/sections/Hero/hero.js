import React, { useState, useEffect } from 'react';
import classes from './hero.module.css';

import { taglines } from '../../helpers/constants';

function Hero() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out
      setTimeout(() => {
        setCurrentTaglineIndex(
          (prevIndex) => (prevIndex + 1) % taglines.length
        ); // Update tagline
        setFade(false); // Start fade-in
      }, 500); // Match with fade-out duration
    }, 4000); // Total duration (fade-out + stay + fade-in)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.hero} id='hero'>
      <div className={classes.content}>
        <h1 className={`${classes.tagline} ${fade ? classes.fade : ''}`}>
          {taglines[currentTaglineIndex]}
        </h1>
        <p className={classes.subTagline}>
          Explore beautifully crafted, ready-to-use presentation slides for all
          your needs.
        </p>
        <button className={classes.ctaButton}>Browse Slides</button>
      </div>
    </div>
  );
}

export default Hero;
