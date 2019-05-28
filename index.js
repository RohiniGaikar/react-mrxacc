import React, { Component } from 'react';
import { render } from 'react-dom';
import Dashboard from './components/Dashboard';
//import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    console.log("entry");
    return (
      
      <div className="md-5">
       <Dashboard />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
/***<Hello name={this.state.name} />****/