import React, { Component } from 'react';
import Video from '../VideoPlayer';
import CardNumberHolder from '../CardNumberHolder';
import ModalButton from '../ModalButton';
import Switcher from '../Switcher';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switcher>
          <Video/>
          <CardNumberHolder/>
          <ModalButton/>
      </Switcher>
    )
  }
}

export default App;
