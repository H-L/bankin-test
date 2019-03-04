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

  handleSubmit = (e, history, stepId) => {
    e.preventDefault();
    history.push("/steps/" + (stepId+1));
  }

  handleChange = (e) => {
    this.setState({
      answers: {
        [e.target.id]: e.target.value
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route  path="/steps/:stepId" 
                    render={(props) => (<Steps {...props} handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />)}
            />
            <Route path="/end" component={End} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
