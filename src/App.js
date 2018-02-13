import React, { Component } from "react";
import "./App.css";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";

class App extends Component {
  state = {
    tabsData: ["Personal information", "Card information", "Finish"],
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: ""
  };

  handleChangeForm = (name, value) => {
    this.setState(() => ({ [name]: value }));
  };

  handleTabClick = val => {
    this.setState({
      step: val
    });
  };

  handleClickNextForm = () => {
    this.setState(({ step }) => ({
      step: step + 1
    }));
  };

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    if (step === 1) {
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (step === 2) {
      return (
        <CardForm
          cardNumber={cardNumber}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (step === 3) {
      return "Поздравляем!";
    }
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    if (step === 1) {
      return (
        firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        email.includes("@")
      );
    }
    if (step === 2) {
      return cardNumber.length === 16;
    }
    if ((step !== 1) | 2) {
      return;
    }
  };

  render() {
    const { tabsData, step } = this.state;

    return (
      <div className="container">
        <div className="tab-panel">
          {tabsData.map((name, index) => (
            <Step
              key={name}
              number={index + 1}
              children={name}
              currentStep={step}
              isClickable={index + 1 < step}
              isSelected={step === index + 1}
              onClick={this.handleTabClick}
            />
          ))}
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
