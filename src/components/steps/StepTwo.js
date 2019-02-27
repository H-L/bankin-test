import React from 'react';
import { Link } from 'react-router-dom';

const StepTwo = () => {
  return (
    <div className="step__container">
      StepTwo
      <Link className="navigation" to="/step-three" />
    </div>
  )
}

export default StepTwo;