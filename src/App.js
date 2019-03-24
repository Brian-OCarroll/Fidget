import React, { Component} from 'react';
import logo from './logo.svg';
import lightSound from './audio/best.mp3'
// import './App.css';
import './scss/App.scss'
import LightSwitch from './components/lightSwitch'
class App extends Component {
  constructor() {
    super();
    this.src = './audio/breaker1.mp3';
    this.audio = new Audio(lightSound);
    this.audio.preload = 'auto';
  this.audio.load();

  }
  play = () => {
    // this.audio.play();
    if (this.audio.paused) {
      this.audio.play();
  }else{
      this.audio.currentTime = 0
  }
  }
  render() {
    return (
      <div className="App">
        <LightSwitch click={this.play}/>
      </div>
    );
  }
}

export default App;
