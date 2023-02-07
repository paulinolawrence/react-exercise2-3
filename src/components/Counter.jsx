import React, { Component } from "react";

export default class Counter extends Component {
  getName() {
    return <h1>Big Name</h1>;
  }

  getClassName() {
    if (this.props.counter.value > 0) {
      return "badge bg-primary";
    }
    return "badge bg-warning text-dark";
  }

  formatText() {
    if (this.props.counter.value > 0) {
      return this.props.counter.value;
    }
    return "Zero";
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }

  render() {
    const { counter, children } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="m-4">
          {/* <img src={this.props.counter.image}></img>
        <a href={this.props.counter.image}>{this.getName()}</a> */}
          {children}
          <span className={this.getClassName()}>{this.formatText()}</span>
          <button
            onClick={() => this.props.onIncrement(counter.id)}
            className="btn btn-primary ms-4"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(counter.id)}
            className="btn btn-secondary ms-1"
            disabled={counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(counter.id)}
            className="btn btn-danger ms-1"
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}
