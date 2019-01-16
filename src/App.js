import React, { Component } from 'react';
import './App.css';
import Chronometre from './Chronometre';

class App extends Component {
  render() {
    return (
      <div>
        <div className="chronometre">
          <Chronometre />
        </div>
      </div>
    );
  }
}

export default App;