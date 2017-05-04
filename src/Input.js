import React, { Component } from 'react'

class Input extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  localState(event) {
    this.setState({value: event})
  }

  buttonClicked() {
    this.props.findByName(this.state.value)
  }

  render() {
    return (
      <div id='search-field'>
        <input value={this.state.value}
               onChange={(event) => {
                 this.props.findAllMatches(event.target.value);
                 this.localState(event.target.value)}}
               type='text'
               placeholder='Search By District'
        />

        <button onClick={() => {this.buttonClicked()}}>Find</button>
      </div>
    )
  }
}

export default Input
