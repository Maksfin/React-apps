import React, {Component} from 'react';

class CardNumberInput extends Component {
  state = {
    number: this.props.value
  }

  formatting = (num) => {
    if (num) {
      num = num.toString().replace(/[^0-9]/g, '');

      const matches = num.match(/\d{4,}/g);
      const match = (matches && matches[0]) || '';
      const thousands = [];

      for (let i = 0, len = match.length; i < len; i += 4) {
        thousands.push(match.substring(i, i + 4));
      }

      return thousands.length ? thousands.join(' ') : num;

    } else {
      return '';
    }
  };

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  }
  

  render() {
    return <input value={this.state.number} onChange={this.handleChange}/>
  }
}

export default CardNumberInput;
