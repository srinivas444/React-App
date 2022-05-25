import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
// import Counter from './components/counter';
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 1 },
      { id: 5, value: 0 },
    ],
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    console.log("Event Called", counterId);
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: newCounters });
  };
  handleIncrement = (counterId) => {
    const counters = this.state.counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value++;
        return counter;
      } else {
        return counter;
      }
    });
    this.setState({ counters });
  };
  handleAddItem = () => {
    const counters = [...this.state.counters];
    counters.push({ id: 7, value: 0 });
    this.setState({ counters });
  };
  render() {
    return (
      <div className="App">
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></Navbar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onAppDelete={this.handleDelete}
            onAppIncrement={this.handleIncrement}
            onAppReset={this.handleReset}
            onAppAddItem={this.handleAddItem}
          ></Counters>
        </main>
      </div>
    );
  }
}

export default App;
