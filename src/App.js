import React from 'react';
import './App.css';

import Nav from './sections/Nav/nav';
import Hero from './sections/Hero/hero';
import Features from './sections/Features/features';
import PopularSlides from './sections/Popular-Slides/popular-slides';
import Categories from './sections/Categories/categories';
import Pricing from './sections/Pricing/pricing';
import Working from './sections/Working/working';
import Testimonial from './sections/Testimonial/testimonial';
import FAQs from './sections/FAQs/FAQs';
import Contact from './sections/Contact/contact';
import Footer from './sections/Footer/footer';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Features />
      {/* <PopularSlides /> */}
      <Categories />
      <Pricing />
      {/* <Working /> */}
      <Testimonial />
      <FAQs />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
