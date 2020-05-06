import React from "react";
import { findByRole } from "@testing-library/react";

class Counter extends React.Component {
  constructor(props) {
    // call the parent constructive and pass it Counter's props
    super(props);

    // adding a key to Counter instance called state
    // react expects it to be named state
    this.state = {
      clickCount: 0,
      clickDateTimes: [],
    };
  }

  // method added to class Counter
  handleClick = () => {
    // pass setState a NEW object which contains the keys
    // that should be updated on this.state object
    this.setState({
      clickCount: this.state.clickCount + 1,
      // clickDateTimes new value is a NEW array with all of the
      // current items, plus one new item added to the back
      clickDateTimes: [...this.state.clickDateTimes, new Date()],
    });
  };

  getDateTimeListItems() {
    const listItems = [];

    for (let i = 0; i < this.state.clickDateTimes.length; i++) {
      const dateTime = this.state.clickDateTimes[i];

      listItems.push(<li key={i}>{dateTime.toString()}</li>);
    }
    return listItems;
  }

  render() {
    return (
      // empty angle brackets is a JSX fragment, this or some kind of other container is needed, like a div when there are multiple children
      <>
        <button onClick={this.handleClick}>
          Clicked {this.state.clickCount}
        </button>

        <h2>Click Date Times</h2>
        <ul>
          {this.state.clickDateTimes.map((dateTime, i) => {
            return <li key={i}>{dateTime.toString()}</li>;
          })}
        </ul>

        {/* manually without .map */}
        <ul>{this.getDateTimeListItems()}</ul>
      </>
    );
  }
}

export default Counter;
