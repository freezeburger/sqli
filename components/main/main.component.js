import React from 'react';
import './main.component.css';

export const Main = props => (
    <section>
    <div className="hero hero-home simplified">
      <div className="hero-home-bg-cover"></div>
      <div className="container container-simplified">
        <div className="row row-simplified">
          <h1>De la musique pour tous.</h1>
          <h4>Des millions de titres. Aucune carte de crédit nécessaire.</h4>
          <a href="/fr/download/" role="button" data-tracking="{&quot;category&quot;: &quot;home (offer)&quot;, &quot;action&quot;: &quot;premium&quot;}" className="generic-btn-premium btn btn-green btn-simplified js-goto-signup js-button-hero-get-free">
            TÉLÉCHARGEZ SPOTIFY FREE
          </a>
        </div>
      </div>
    </div>
  </section>
); 

export default Main;
