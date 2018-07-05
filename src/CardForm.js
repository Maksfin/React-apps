import React from "react";
import "./CardForm.css";

class CardForm extends React.Component {
  handleChangeForm = e => {
    const { onChangeForm } = this.props;
    const { name, value } = e.target;
    onChangeForm(name, value);
  };

  render() {
    const { cardNumber } = this.props;
    return (
      <div>
        <h1 className="title">Номер карты</h1>
        <div className="card-form">
          <input
            type="text"
            name="cardNumber"
            value={cardNumber}
            placeholder="0000 0000 0000 0000"
            onChange={this.handleChangeForm}
          />
        </div>
      </div>
    );
  }
}

export default CardForm;
