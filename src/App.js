import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import StepOne from './components/steps/StepOne';
import StepTwo from './components/steps/StepTwo';
import StepThree from './components/steps/StepThree';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/step-one' component={StepOne}/>
          <Route path='/step-two' component={StepTwo}/>
          <Route path='/step-three' component={StepThree}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
