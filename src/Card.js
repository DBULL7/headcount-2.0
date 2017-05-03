import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      // id: Date.now()
    }
  }

  displayData() {
    let years = Object.keys(this.props.data)
    let districtStats = Object.values(this.props.data)
    let cardInfo = years.map((year, index) => {
      return (
        <h5 className='district-data' key={index}>{year} : {districtStats[index]}</h5>
      )
    })
    return cardInfo
    // console.log(Object.values(test))
  }

  render() {
    return (
      <div className='card-info'>
        <p className='district-name'>{this.props.title}</p>
        {this.displayData()}
      </div>
    )
  }
}

export default Card
