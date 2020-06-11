import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Button from "./components/Button";
import Input from "./components/Input";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      operator: "",
      nextOperation: "",
    };
  }

  addToInput = (val) => {
    if (this.state.nextOperation !== "clear")
      this.setState({ input: this.state.input + val });
    else
      this.setState({
        input: val,
        nextOperation: "",
      });
  };

  add = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "plus",
    });
  };

  divide = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "divide",
    });
  };

  multiply = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "multiply",
    });
  };

  subtract = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "subtract",
    });
  };

  percent = () => {
    let result = parseFloat(this.state.input) * 0.01;
    this.setState({
      input: result.toString(),
    });
  };

  addDecimal = (val) => {
    if (this.state.input.indexOf(".") === -1)
      this.setState({
        input: this.state.input + val,
        nextOperation: "",
      });
  };

  cutInput = () => {
    this.setState({
      input: this.state.input.slice(0, -1),
    });
  };

  clearInput = () => {
    this.setState({
      input: "",
      previousNumber: "",
      operator: "",
    });
  };

  get_result = (operator) => {
    switch (operator) {
      case "plus":
        return (
          parseFloat(this.state.previousNumber) + parseFloat(this.state.input)
        );
      case "divide":
        return (
          parseFloat(this.state.previousNumber) / parseFloat(this.state.input)
        );
      case "multiply":
        return (
          parseFloat(this.state.previousNumber) * parseFloat(this.state.input)
        );
      case "subtract":
        return (
          parseFloat(this.state.previousNumber) - parseFloat(this.state.input)
        );
      default:
        return this.state.input;
    }
  };

  evaluteInput = () => {
    let result = this.get_result(this.state.operator);

    this.setState({
      input: result.toString(),
      previousNumber: "",
      operator: "",
      nextOperation: "clear",
    });
  };

  render() {
    return (
      <div className="index">
        <div className=".calc-wrapper">
          <div>
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>÷</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>00</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.clearInput}>AC</Button>
            <Button handleClick={this.cutInput}>C</Button>
            <Button handleClick={this.evaluteInput}>=</Button>
            <Button handleClick={this.percent}>%</Button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
