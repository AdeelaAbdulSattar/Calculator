import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
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
    let result = this.state.previousNumber / 100;
    this.setState({
      input: result,
    });
  };

  addDecimal = (val) => {
    if (this.state.input.indexOf(".") === -1)
      this.setState({ input: this.state.input + val });
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

  evaluteInput = () => {
    if (this.state.operator === "plus") {
      let result =
        parseFloat(this.state.previousNumber) + parseFloat(this.state.input);
      this.setState({
        input: result.toString(),
        previousNumber: "",
        operator: "",
        nextOperation: "clear",
      });
    } else if (this.state.operator === "divide") {
      let result =
        parseFloat(this.state.previousNumber) / parseFloat(this.state.input);
      this.setState({
        input: result.toString(),
        previousNumber: "",
        operator: "",
        nextOperation: "clear",
      });
    } else if (this.state.operator === "multiply") {
      let result =
        parseFloat(this.state.previousNumber) * parseFloat(this.state.input);
      this.setState({
        input: result.toString(),
        previousNumber: "",
        operator: "",
        nextOperation: "clear",
      });
    } else if (this.state.operator === "subtract") {
      let result =
        parseFloat(this.state.previousNumber) - parseFloat(this.state.input);
      this.setState({
        input: result.toString(),
        previousNumber: "",
        operator: "",
        nextOperation: "clear",
      });
    } else {
      this.setState({
        input: this.state.input,
      });
    }
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
