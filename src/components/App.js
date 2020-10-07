import React, { Component } from 'react';
import PropsTypes from 'prop-types';


const App = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    console.log(this.state.count)
    this.setState(
      { count: this.state.count + 1 }
    )
  }

  handleMinusButton = () => {
    console.log(this.state.count)
    this.setState(//setStateはrenderを更新する
      { count: this.state.count - 1 }
    )
  }

  render() {
    console.log("render")
    return (
      <React.Fragment>
        <div>
          count:{this.state.count}
          <button onClick={this.handlePlusButton}>+1</button>
          <button onClick={this.handleMinusButton}>-1</button>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
