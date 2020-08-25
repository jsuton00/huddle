import React from 'react';
import { StartFreeButton } from './Buttons';

export default function CalltoAction() {
  return (
    <div id="cta-section" className="cta-section row">
      <div className="cta-section-content">
        <h2 className="cta-section-title row">Ready to Build Your Community</h2>
        <div className="cta-section-button row">
          <StartFreeButton />
        </div>
      </div>
    </div>
  );
}
