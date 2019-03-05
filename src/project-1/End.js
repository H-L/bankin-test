import React from 'react';
import { Redirect } from 'react-router-dom';

const End = ({answers}) => {
  if(answers.salary && answers.savings){
    return (
      <div className="end__container">
        <p>Salary: {answers.salary}</p>
        <p>Savings: {answers.savings}</p>
      </div>
    )
  } else if(!answers.salary){
    return (<Redirect to="/steps/1" />)
  } else if(!answers.savings){
    return (<Redirect to="/steps/2" />)
  }
}

export default End;