import React from 'react';
import hero from '../assets/images/illustration-mockups.svg';
import { StartFreeButton } from './Buttons';

export default function HeroSection() {
  return (
    <div id="hero-section" className="hero-section row">
      <div id="hero-section-heading" className="hero-section-heading">
        <div id="hero-section-body" className="hero-section-body">
          <h1 className="hero-section-title row">
            Build The Community Your Fans Will Love
          </h1>
          <p className="hero-section-text row">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
        </div>
        <div id="hero-section-cta" className="hero-section-cta row">
          <StartFreeButton />
        </div>
      </div>
      <div id="hero-section-image" className="hero-section-image">
        <div id="hero-section-body" className="hero-section-body">
          <img src={hero} alt="Illustration of Devices" />
        </div>
      </div>
    </div>
  );
}
