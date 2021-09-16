import React, { Component } from "react";
class Counter extends Component {
  // state = { value: this.props.counter.value, tags: ["tag1", "tag2", "tag3"] };
  /*constructor() {
    super();
    {
      /* without super we get error 
    }
    this.handleIncrement = this.handleIncrement.bind(this);
    {
      *when a method is called with object then this refers to obj,when standalone function is called then this refers to global obj
       *  (window in our case) 
       * but for every eventhandler you have to bind (ineff)
       * instead we can use arrow functions because they inherit bind 
    }
  }*/
  render() {
    //console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>
          {/* one way to create your own style.create an obj style and mention styling there*/}
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          style={{ fontSize: 15 }}
          className="btn btn-secondary btn-sm"
        >
          {/*2nd way is inline styling*/}
          Increment
        </button>
        <button
          className="btn btn-danger m-2 btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter.value;
    return count === 0 ? "Zero" : count; // we can render html tag like return count === 0 ? <h1>Zero<h1> : count;
  }
}

export default Counter;
