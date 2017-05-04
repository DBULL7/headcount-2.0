import React, { Component } from 'react'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick() {
    let change = !this.state.clicked
    this.setState({clicked: change})
    if (change) {
      this.props.handleComparedCards(this.props.title)

    }
  }


  displayData() {
    let years = Object.keys(this.props.data)
    let districtStats = Object.values(this.props.data)
    let cardInfo = years.map((year, index) => {
      if (districtStats[index] > .5) {
        return (
          <h5 className='district-data' key={index}>{year} : <span className='above-average'>{districtStats[index]}</span></h5>
        )
      } else {
        return (
          <h5 className='district-data red' key={index}>{year} : <span className='below-average'>{districtStats[index]}</span></h5>
        )
      }
    })
    return cardInfo
    // console.log(Object.values(test))
  }

  render() {
    return (
      <div className='card-info' onClick={() => this.handleClick()}>
        <p className='district-name'>{this.props.title}</p>
        {this.displayData()}
      </div>
    )
  }
}

export default Card
