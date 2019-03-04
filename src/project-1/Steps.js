import React from 'react';
import { Redirect } from 'react-router-dom';

const steps = [
  {id:1, question: "Combien gagnez-vous par mois ?", answerName: "salary"},
  {id:2, question: "Combien épargnez-vous par mois ?", answerName: "savings"},
]

const find = id => steps.find(step => step.id === parseInt(id, 10));

const Steps = ({ match, history, handleSubmit, handleChange }) => {
  let stepId = match.params.stepId;
  const step = find(stepId);
  let currentStep = null;

  if(stepId >= 3){
    return ( <Redirect to="/end" /> )
  }

  if(stepId <= 0){
    return ( <Redirect to="/" /> )
  }

  console.log(step);
  
  if(step){
    currentStep = step;
  }

  return (
    <div className="steps__container">
      {currentStep.question}
      
      <form onSubmit={(e) => handleSubmit(e, history, step.id)}>
        <input type="text" placeholder="Test" name={currentStep.answerName} id={currentStep.answerName} onChange={handleChange}/>
        <button type="submit">
          Suivant
        </button>
      </form>
    </div>
  )
}

export default Steps;