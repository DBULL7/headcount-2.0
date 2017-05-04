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


  render() {
    return (
      <div id='search-field'>
        <input value={this.state.value}
               onChange={(event) => {
                 this.props.findByName(event.target.value);
                 this.props.findAllMatches(event.target.value);
                 this.localState(event.target.value)}}
               type='text'
               placeholder='Search By District'
        />

        <button>Find</button>
      </div>
    )
  }
}

export default Input
