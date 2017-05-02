import React, { Component } from 'react';
import './App.css';
import Card from './Card.js'
import Input from './Input.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  retrieveInput(input) {
    this.setState({input: input})
  }

  render() {
    return (
      <div>
        <h1>HeadCount</h1>
        <Input retrieveInput={this.retrieveInput.bind(this)}/>
        <Card />
      </div>
    )
  }
}

export default App;
