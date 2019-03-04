import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home__container">
        <div className="home__text">
          <h1 className="title">Bonjour <span role="img" aria-label="waving hand">👋️</span></h1>
          <p>Nous savons tous que c’est plus facile de dépenser que de mettre de côté <span role="img" aria-label="shamed monkey">🙈</span></p>
          <p>Voyons ensemble combien vous devriez mettre de côté par mois et comment y arriver <span role="img" aria-label="strong arm">💪</span></p>
        </div>
        <Link to="steps/1">C'est parti</Link>
      </div>
    )
  }
}
