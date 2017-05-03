import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      years: '',
      yearData: ''
    }
  }

  displayData() {
    let test = Object.keys(this.props.data)
    let test2 = Object.values(this.props.data)

    // console.log(Object.values(test))
  }

  render() {
    {this.displayData()}
    return (
      <div className='card'>
        {this.props.title}
      </div>
    )
  }
}

export default Card
