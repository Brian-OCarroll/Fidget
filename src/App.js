import React, { Component } from 'react';
import lightSound from './audio/best.mp3';
import scrollSound from './audio/scroll.ogg';
import './scss/App.scss';
import LightSwitch from './components/lightSwitch';
import Scroller from './components/scroller';
class App extends Component {
  constructor() {
    super();
    this.state= {
      light: false,
      src: lightSound
    }

  }
  componentDidMount() {
    
  }
  // loadAudio() {
  //   // this.src = './audio/breaker1.mp3';
  //   this.audio = new Audio(this.state.src);
  //   this.audio.preload = 'auto';
  //   this.audio.load();
  // }
  lightSwitch = () => {
    console.log(this.state.light)
    this.setState({
      light: !this.state.light,
      src: lightSound
    }, () => {
      this.play();
    })
  }
  scroller = () => {
      this.setState({
        src:scrollSound
      }, () => {
        this.play();
      })
  }
  play = () => {
    this.audio = new Audio(this.state.src);
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.currentTime = 0
    }
  }
  render() {
    return (
      <div className="App flex">
        <div className= { this.state.light ? "background --background-light-on " : "background" }></div>
        <LightSwitch light={this.state.light} click={this.lightSwitch} />
        <Scroller click={this.scroller}/>
      </div>
    );
  }
}

export default App;
