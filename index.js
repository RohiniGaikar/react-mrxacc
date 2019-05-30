import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDBContainer } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Dashboard from './components/Dashboard';
//import Hello from './Hello';

import './style.css';



class App extends Component {
  constructor() {
    super();
    
  }render() {
    console.log("entry");
    return (
            <div>
             <Dashboard />
             </div>
      
    );
  }
}

render(<App />, document.getElementById('root'));
/***<Hello name={this.state.name} />****/