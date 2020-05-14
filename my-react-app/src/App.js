// import React from 'react';
import React, { Component } from 'react';
import './App.css';
// import propTypes from 'prop-types';

function App(){
  return(
    <Counter></Counter>
  )
}

class Counter extends Component{
  constructor(props) {
    super(props)
    console.log(this.state);
    this.state = {count:0}
  }

  handlePlusButton = () => {
    console.log("handle");
    console.log(this.state.count)
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    console.log("minus");
    console.log(this.state.count);
    this.setState({count: this.state.count - 1})
  }

  render() {
    console.log('render');
    console.log(this.state);
    return(
    <React.Fragment>
      <div>counter: {this.state.count}</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>
    )
  }
}


// User.propTypes = {
//   name: propTypes.string,
//   age: propTypes.number.isRequired
// }

export default App;