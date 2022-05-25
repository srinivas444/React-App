import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //   state = {
  //     counters: [
  //       { id: 1, value: 2 },
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 1 },
  //       { id: 5, value: 0 },
  //     ],
  //   };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onAppReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={this.props.onAppAddItem}
          className="btn btn-default btn-sm m-2"
        >
          Add Item
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onAppDelete}
            onIncrement={this.props.onAppIncrement}
            counter={counter}
          ></Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
