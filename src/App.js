import React from 'react';
import './App.css';

import Nav from './sections/Nav/nav';
import Hero from './sections/Hero/hero';
import Features from './sections/Features/features';
import Categories from './sections/Categories/categories';
import Pricing from './sections/Pricing/pricing';
import Testimonial from './sections/Testimonial/testimonial';
import Footer from './sections/Footer/footer';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Features />
      <Categories />
      <Pricing />
      <Testimonial />
      <Footer />
    </React.Fragment>
  );
}

export default App;
