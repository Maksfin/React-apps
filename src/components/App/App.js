import React, { Component } from 'react';
import Video from '../VideoPlayer';
import Switcher from '../Switcher';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switcher>
          {"VideoPlayer"} {"Card number formating"} {"ModalButton"}
        </Switcher>
        <div className="component-wrapper">
          <Video/>
        </div>
      </div>
    )
  }
}

export default App;
