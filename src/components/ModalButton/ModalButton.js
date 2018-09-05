import React, { Component } from 'react';
import Modal from './Modal'
import './ModalButton.css';

class ModalButton extends Component {
  state= {
    isShowModal : false
  }

  handleClick = () => {
    this.setState({
      isShowModal: !this.state.isShowModal
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Show modal!</button>
        {
          this.state.isShowModal ? (
            <Modal>
              <div className="modal">
                <div className="modal__fog">
                  <div className="modal__body">
                    <h1>Модальное окно!</h1>
                    <button onClick={this.handleClick}>Close</button>
                  </div>
                </div>
              </div>
            </Modal>
          ) : null
        }
      </div>  
    );
  }
}

export default ModalButton;
