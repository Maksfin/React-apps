import { Component } from 'react';
import ReactDom from 'react-dom';

class Modal extends Component {
  render() {
    return ReactDom.createPortal(this.props.children, document.querySelector("#modal"));
  }
}

export default Modal;
