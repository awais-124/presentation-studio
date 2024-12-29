import React, { useState } from 'react';
import classes from './nav.module.css';

import { navLinks } from '../../helpers/constants';

function Nav({ signout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        Presentation<span>Studio</span>
      </div>
      <ul className={`${classes.navLinks} ${isMenuOpen ? classes.active : ''}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={classes.link}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={signout} className={classes.logout}>
        LOGOUT
      </button>
      <div className={classes.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Nav;
