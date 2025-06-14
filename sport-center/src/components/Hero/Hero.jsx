import React from 'react';
import './Hero.css';
import HeroOverlay from './HeroOverlay';
import HeroText from './HeroText';
import HeroImage from './HeroImage';

function Hero() {
  return (
    <section id="home" className="hero">
      <HeroOverlay>
        <HeroText />
        <HeroImage />
      </HeroOverlay>
    </section>
  );
}

export default Hero;
