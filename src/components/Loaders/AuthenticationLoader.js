import React from 'react';
import classes from './AuthenticationLoader.module.css';

const AuthenticationLoader = () => {
  return (
    <div className={classes['auth-loader']}>
      <div className={classes['loader']}></div>
      <p>Checking Authentication...</p>
    </div>
  );
};

export default AuthenticationLoader;
