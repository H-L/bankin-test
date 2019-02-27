import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__text">
        <h2 className="home__title">
          Bonjour 👋️
        </h2>
        <p>Nous savons tous que c’est plus facile de dépenser que de mettre de côté 🙈</p>
        <p>Voyons ensemble combien vous devriez mettre de côté par mois et comment y arriver 💪</p>
      </div>
      <img src={require("../assets/img/Cochon OPT.gif")} className="home__image" alt="Mettre de côté - Home"/>
      <button className="home__navigation">
        C'est parti
      </button>
    </div>
  )
}

export default Home;
