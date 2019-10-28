import React from 'react';
import './cookie.component.css'

export function Cookie(props){
    return (
        <div className="mh-message-bar svelte-f6ll6r">
        <div className="mh-container svelte-f6ll6r">
          <div className="mh-html-text svelte-f6ll6r">
            <a
              className="alert-link cookie-link"
              href="https://www.spotify.com/fr/legal/cookies-vendor-list/"
              target="_blank"
              rel="noopener"
            >
              Nos partenaires
            </a>{' '}
            et nous-mêmes utilisons les cookies pour personnaliser votre
            expérience, pour vous présenter des annonces adaptées à vos centres
            d'intérêt, ainsi qu'à des fins de mesure et d'analyse. En utilisant
            notre site Web et nos services, vous acceptez notre utilisation des
            cookies conformément à notre
            <a
              className="alert-link cookie-link"
              href="https://www.spotify.com/fr/legal/cookies-policy/"
              target="_blank"
              rel="noopener"
            >
              politique en matière de cookies
            </a>
            .
          </div>{' '}
          <button className="mh-close svelte-f6ll6r">
            <span aria-hidden="true">✕</span>{' '}
            <span className="mh-screen-reader-only svelte-f6ll6r">Close</span>
          </button>
        </div>
      </div>
    );
}

export default Cookie;