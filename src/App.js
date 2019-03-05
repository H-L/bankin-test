import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './project-1/Home';
import Steps from './project-1/Steps';
import End from './project-1/End';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      answers: {
        salary: '',
        savings: '',
      },
    }
  }

  // Submit the step form
  handleSubmit = (e, history, stepId) => {
    e.preventDefault();
    history.push("/steps/" + (stepId+1));
  }

  // Change on step input
  handleChange = (e) => {
    let answers = this.state.answers;
    answers[e.target.id] = e.target.value;
    this.setState({
      answers: answers
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route  path="/steps/:stepId" 
                    render={(props) => (
                      <Steps {...props} 
                        handleChange={this.handleChange.bind(this)} 
                        handleSubmit={this.handleSubmit.bind(this)} 
                      />
                    )}
            />
            <Route path="/end" component={(props) => <End {...props} answers={this.state.answers} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
