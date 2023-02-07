import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

export default class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 3,
      },
      {
        id: 2,
        value: 5,
      },
      {
        id: 3,
        value: 7,
      },
    ],
  };

  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== id),
    });
  };

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        return {
          ...counter,
          value: 0,
        };
      }),
    });
  };

  handleIncrement = (id) => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value + 1,
          };
        }
        return counter;
      }),
    });
  };

  handleDecrement = (id) => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value - 1,
          };
        }
        return counter;
      }),
    });
  };

  getCountersWithValue = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  };

  componentDidMount() {
    // api calls
    console.log("didmount");
  }

  render() {
    return (
      <div>
        <NavBar totalCount={this.getCountersWithValue()} />
        <div className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}
