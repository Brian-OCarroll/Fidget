import React, { Component, useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import './scss/App.scss'
function LightSwitch() {
  // const [light, setLight] = useState([
  //   {
  //     on: false,

  //   }
  // ]);
  
  return (
    <div className="light-switch-container" >
      <input type="checkbox" id="light-switch" />
      <label for="light-switch" id="light-switch-label">
        <div class="screw"></div>
        <div class="switch"></div>
        <div class="screw"></div>
      </label>
      <div id="background"></div>
    </div>
  )
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <LightSwitch />
      </div>
    );
  }
}

export default App;
