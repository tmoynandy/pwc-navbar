import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './Components/Navbar/Index';
import Landing from './Components/Home/Admin/Landing';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
      <div className = "row">
      <div className =  "col col-md-1 col-sm-1 col-xs-1">
        <Navbar />
      </div>
      <div className =  "col col-md-11 col-sm-11 col-xs-11">
        <Landing />
      </div>
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
