import React, { Component } from "react";
import "./Step.css";

class Step extends Component {

  handleClick = () => {
    const { isClickable, onClick, number } = this.props;
    isClickable && onClick(number);
  };

  render() {
    const { number, children, isClickable, isSelected } = this.props;

    return (
      <div
        className={`step${isSelected ? " step-selected" : ""}${
          isClickable ? " step-clickable" : ""
        }`}
        onClick={this.handleClick}
      >
        <p className="step__number">{number}</p>
        <p className="step__title">{children}</p>
      </div>
    );
  }
}

export default Step;
