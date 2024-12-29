import React from 'react';
import Nav from '../../sections/Nav/nav';
import Hero from '../../sections/Hero/hero';
import Features from '../../sections/Features/features';
import Categories from '../../sections/Categories/categories';
import Pricing from '../../sections/Pricing/pricing';
import Testimonial from '../../sections/Testimonial/testimonial';
import Footer from '../../sections/Footer/footer';

function WebPage({ user, onLogout }) {
  return (
    <React.Fragment>
      <Nav signout={onLogout} />
      <Hero />
      <Features />
      <Categories />
      <Pricing />
      <Testimonial />
      <Footer />
    </React.Fragment>
  );
}

export default WebPage;
