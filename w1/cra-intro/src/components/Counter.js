import React from "react";

class Counter extends React.Component {
  constructor(props) {
    // call the parent constructor and pass it Counter's props
    super(props);

    // adding a key to Counter instance called state
    // react expects it to be named this
    this.state = {
      clickCount: 0
    };

    // fix for 'this' being undefined, not needed if using arrow functions
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log(`the component updated: `, prevProps);
  }

  handleClick = () => {
    console.log(this);

    this.setState({
      clickCount: this.state.clickCount + 1
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.btnText} {this.state.clickCount}
      </button>
    );
  }
}

export default Counter;
