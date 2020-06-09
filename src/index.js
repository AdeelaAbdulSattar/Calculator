import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Button extends React.Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }

  handleClick(i) {
    console.log("value i= " + i);
  }

  renderButton(i) {
    return <Button name={i} onClick={() => this.handleClick(i)} />;
  }

  render() {
    return (
      <div>
        <div id="display" className="display-row"></div>
        <div className="board-row">
          {this.renderButton("AC")}
          {this.renderButton("+/-")}
          {this.renderButton("%")}
          {this.renderButton("÷")}
        </div>
        <div className="board-row">
          {this.renderButton("1")}
          {this.renderButton("2")}
          {this.renderButton("3")}
          {this.renderButton("*")}
        </div>
        <div className="board-row">
          {this.renderButton("4")}
          {this.renderButton("5")}
          {this.renderButton("6")}
          {this.renderButton("-")}
        </div>
        <div className="board-row">
          {this.renderButton("7")}
          {this.renderButton("8")}
          {this.renderButton("9")}
          {this.renderButton("+")}
        </div>
        <div className="board-row">
          {this.renderButton("00")}
          {this.renderButton("0")}
          {this.renderButton(".")}
          {this.renderButton("=")}
        </div>
      </div>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div className="display">
        <Panel />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
