import React from 'react';
import classes from './footer.module.css';

import { footerContent } from '../../helpers/constants';

import LOGO from '../../assets/logos/4.png';

function Footer() {
  return (
    <footer className={classes.footer} id='contact'>
      <div className={classes.container}>
        <img src={LOGO} alt='logo' className={classes.footerLogo} />
        <div className={classes.footerSections}>
          {/* Company Info Section */}
          <div className={classes.footerSection}>
            <h3 className={classes.footerSectionTitle}>Company Info</h3>
            <ul className={classes.footerLinks}>
              {footerContent.companyInfoLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className={classes.footerSection}>
            <h3 className={classes.footerSectionTitle}>Quick Links</h3>
            <ul className={classes.footerLinks}>
              {footerContent.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className={classes.footerSection}>
            <h3 className={classes.footerSectionTitle}>Follow Us</h3>
            <div className={classes.socialLinks}>
              {footerContent.socialLinks.map((social, index) => (
                <a
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={index}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className={classes.copyright}>
        <p>
          &copy; {new Date().getFullYear()} PresentationStudio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
