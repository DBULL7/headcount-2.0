import React, { Component } from 'react'

class Input extends Component {


  render() {
    return (
      <section id='search-field'>
        <input onChange={(event) => {
                 this.props.findAllMatches(event.target.value)
               }}
               type='text'
               placeholder='Search By District' />
      </section>
    )
  }
}

export default Input
