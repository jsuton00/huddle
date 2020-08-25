import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const StartFreeButton = () => {
  return (
    <button id="btn-start" name="btn-start" type="button" className="btn-start">
      Get Started For Free
    </button>
  );
};

export const TryFreeButton = () => {
  return (
    <button
      id="btn-try-free"
      name="btn-try-free"
      type="button"
      className="btn btn-primary btn-try-free"
    >
      Try Free
    </button>
  );
};

export const SocialButtons = () => {
  return (
    <div className="social-buttons row">
      <div className="social-button">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </div>
      <div className="social-button">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </div>
      <div className="social-button">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
    </div>
  );
};
