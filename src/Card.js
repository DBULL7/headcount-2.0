import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div className='card'>
        {this.props.title}
      </div>
    )
  }
}

export default Card
