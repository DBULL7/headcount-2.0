import React, { Component } from 'react'

class Card extends Component {
  constructor({isClicked}) {
    super()
    this.state = {
      clicked: isClicked || false
    }
  }

  handleClick() {
    if(this.state.clicked === false) {
      this.setState({clicked:  true})
      this.props.handleComparedCards(this.props.title)
    } else {
      this.setState({clicked: false})
      this.props.removeCard(this.props.title)
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
  }

  render() {
    if(this.props.isClicked === true){
      return (
        <div className='card-info clicked' onClick={() => this.handleClick()}>
          <p className='district-name'>{this.props.title}</p>
          {this.displayData()}
        </div>
      )
    } else {
      return (
        <div className='card-info' onClick={() => this.handleClick()}>
          <p className='district-name'>{this.props.title}</p>
          {this.displayData()}
        </div>
      )
    }

  }
}

export default Card
