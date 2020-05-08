import React, { Component } from "react";
import leyla from "./songs/leyla.mp3"
import firefly from "./songs/firefly.mp3"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 69,
      leylaSong: leyla 
    };
  }

  playAudio = () => {
    var x = this.state.leylaSong
    x.play()
  };

  pauseAudio = () => {
    
    console.log("next time")
  };
  render() {
    return (
      <div className="App">
        <audio className="myAudio">
          <source src={leyla} type="audio/mpeg" />
        </audio>
        {/* <audio className="myAudio">
          <source src={firefly} type="audio/mpeg" />
        </audio> */}
        <button onClick={this.playAudio} type="button">
          Play Audio
        </button>
        <button onClick={this.pauseAudio} type="button">
          Pause Audio
        </button>
        <div>{this.state.timer}</div>
      </div>
    );
  }
}

export default App;
