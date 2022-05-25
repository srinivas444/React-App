import React, { Component } from "react";
class Counter extends Component {
  formatCount = (val) => {
    if (val == 0) return "badge bg-warning m-2";
    else return "badge bg-secondary m-2";
  };
  render() {
    return (
      <div>
        <span className={this.formatCount(this.props.counter.value)}>
          {this.props.counter.value === 0 ? "Zero" : this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-success btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
