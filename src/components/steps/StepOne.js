import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Steps.css';


export default class StepOne extends Component {

  handleChange = (e) => {
    
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }
  render() {
    return (
      <div className="step">
        <h2 className="step__title">
          Combien gagnez-vous chaque mois ?
        </h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" autoFocus keyboardType='numeric' onChange={this.handleChange}/>
        </form>
        <div className="step__navigation">
          <Link className="button--purple" to="/step-two">Suivant</Link>
        </div>
    </div>
    )
  }
}
