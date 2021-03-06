import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  // Reserved word. Does not change
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  // must call RollDice constructor if using state
  constructor(props) {
    // calls the parent constructor (Component) to enable THIS and register the class as a React Component
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      rolling: false
    }
    // bind the roll context
    this.roll = this.roll.bind(this);
  }
  roll() {
    //pick 2 new rolls
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    //set state with new rolls
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    //wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    )
  }
}

export default RollDice;