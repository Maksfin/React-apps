import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ""
  }

  static displayName = "Card number formating";

  handleChanhgeCardNumber = (value) => {
    console.log(value)
    this.setState({
      cardNumber: value
    })
  }


  render() {
    return (
      <CardNumberInput value={this.state.cardNumber} onChange={this.handleChanhgeCardNumber}/>
    );
  }
}

export default CardNumberHolder;
