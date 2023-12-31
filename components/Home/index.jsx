import React from "react";

import Banner from "./Banner";
import About from "./About";
import CtaSection from "./CtaSection";
import Gallery from "./Gallery";
import TestimonialSection from "./Testimonial";

const Index = () => {
  return (
    <>
      <Banner />

      <section id="about">
        <About />
      </section>
      <section id="cta">
        <CtaSection />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonial">
        <TestimonialSection />
      </section>
    </>
  );
};

export default Index;
