import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      // id: Date.now()
    }
  }

  displayData() {
    let test = Object.keys(this.props.data)
    let test2 = Object.values(this.props.data)
    let test3 = test.map((year, index) => {
      return (
        <h5 key={index}>{year} : {test2[index]}</h5>
      )
    })
    return test3
    // console.log(Object.values(test))
  }

  render() {
    return (
      <div className='card'>
        {this.props.title}
        {this.displayData()}
      </div>
    )
  }
}

export default Card
