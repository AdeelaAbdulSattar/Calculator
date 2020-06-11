import React, { Component } from "react";
import "./input.scss";

class Input extends Component {
  render() {
    return <div className="input">{this.props.children}</div>;
  }
}

export default Input;
