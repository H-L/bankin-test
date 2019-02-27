import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import StepOne from './steps/StepOne';

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__text">
        <h2 className="home__title">
          Bonjour <span role="img">️👋️</span>
        </h2>
        <p>Nous savons tous que c’est plus facile de dépenser que de mettre de côté <span role="img">🙈</span></p>
        <p>Voyons ensemble combien vous devriez mettre de côté par mois et comment y arriver <span role="img">💪</span></p>
      </div>
      <img src={require("../assets/img/Cochon OPT.gif")} className="home__image" alt="Mettre de côté - Home"/>
      <Link className="home__navigation" to="/step-one">
        C'est parti
      </Link>
    </div>
  )
}

export default Home;
