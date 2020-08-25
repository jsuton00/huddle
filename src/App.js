import React from 'react';
import { SocialButtons, TryFreeButton } from './components/Buttons';
import CalltoAction from './components/CalltoAction';
import HeroSection from './components/HeroSection';
import FeatureTabs from './components/Tabs';
import huddle from './assets/images/logo.svg';
import whiteHuddle from './assets/images/whiteLogo.svg';

function App() {
  return (
    <div id="app" className="app">
      <header id="app-header" className="app-header container-fluid">
        <nav id="app-nav" role="navigation" className="app-nav row">
          <div id="app-nav-logo" className="app-nav-logo">
            <img src={huddle} alt="Huddle" />
          </div>
          <div id="app-nav-button" className="app-nav-button">
            <TryFreeButton />
          </div>
        </nav>
        <HeroSection />
      </header>
      <main id="app-main" className="app-main container-fluid">
        <FeatureTabs />
        <CalltoAction />
      </main>
      <footer id="app-footer" className="app-footer container-fluid">
        <div className="app-footer-nav row">
          <div className="app-nav-logo">
            <img src={whiteHuddle} alt="Huddle" />
          </div>
          <div className="app-footer-social">
            <SocialButtons />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
