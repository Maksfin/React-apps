import React, { Component } from "react";
import "./PersonalForm.css";

class PersonalForm extends Component {
  handleChangeForm = e => {
    const { onChangeForm } = this.props;
    const { name, value } = e.target;
    onChangeForm(name, value);
  };

  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <div>
        <h1>Персональная информация</h1>
        <div className="personal-form">
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First name"
            onChange={this.handleChangeForm}
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Last name"
            onChange={this.handleChangeForm}
          />
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChangeForm}
          />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
