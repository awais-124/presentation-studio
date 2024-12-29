import React, { useState, useEffect } from 'react';
import styles from './SplashScreen.module.css';

import logo1 from '../../assets/logos/1.png';
import logo2 from '../../assets/logos/2.png';
import logo3 from '../../assets/logos/3.png';
import logo4 from '../../assets/logos/4.png';
import logo5 from '../../assets/logos/5.png';
import logo6 from '../../assets/logos/6.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

function SplashScreen({ hide }) {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000); // Change logo every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className={styles.splashContainer}>
      <div className={styles.logoContainer}>
        <img
          src={logos[currentLogoIndex]}
          alt='App Logo'
          className={styles.logo}
        />
      </div>
      <h2 className={styles.heading}>Presentation Studio</h2>
      <button onClick={hide} className={styles.getStartedButton}>
        Get Started
      </button>
    </div>
  );
}

export default SplashScreen;
