import React from 'react';
import { Redirect } from 'react-router-dom';

// Add as many steps as you'd like. It does not handle input type and other complex params yet tho.
const steps = [
  {id:1, question: "Combien gagnez-vous par mois ?", answerName: "salary"},
  {id:2, question: "Combien épargnez-vous par mois ?", answerName: "savings"},
]

// Easy way to find step by stepId
const find = id => steps.find(step => step.id === parseInt(id, 10));

const Steps = ({ match, history, handleSubmit, handleChange, answers }) => {
  let stepId = match.params.stepId;

  // Redirect if params is too hight
  if(stepId > steps.length){
    return ( <Redirect to="/end" /> )
  }

  // Redirect if params is too low
  if(stepId <= 0){
    return ( <Redirect to="/" /> )
  }
  
  // If step exist
  const step = find(stepId);
  let currentStep = null;

  if(step){
    currentStep = step;
  }

  return (
    <div className="steps__container">
      {currentStep.question}
      
      <form onSubmit={(e) => handleSubmit(e, history, step.id)}>
        <input 
          type="text" placeholder="Test" 
          name={currentStep.answerName} 
          id={currentStep.answerName} 
          onChange={handleChange}
        />
        <button type="submit">
          Suivant
        </button>
      </form>
    </div>
  )
}

export default Steps;