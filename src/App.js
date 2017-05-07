import React, { Component } from 'react';
import './styles/App.css';
import CardGrid from './CardGrid.js'
import Input from './Input.js'
import CompareCardsGrid from './CompareCardsGrid'
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js'

class App extends Component {

  constructor() {
    super()
    this.scrubbedData = new DistrictRepository(kinderData)
    this.state = {
      data: {},
      comparedDistricts: [],
      averageDistricts: {}
    }
  }

  componentDidMount() {
    this.setState({data: this.scrubbedData.data})
  }

  removeCard(cardTitle) {
    if (cardTitle === this.state.comparedDistricts[0].location) {
      this.state.comparedDistricts.shift()
      this.setState({comparedDistricts: this.state.comparedDistricts})
    } else {
      this.state.comparedDistricts.pop()
      this.setState({comparedDistricts: this.state.comparedDistricts})
    }
  }

  handleComparedCards(cardTitle) {
   let searchedData = this.scrubbedData.findByName(cardTitle)

   if (this.state.comparedDistricts.length < 2) {
     this.setState({comparedDistricts: this.state.comparedDistricts.concat(searchedData)})
   } else {
     this.state.comparedDistricts.shift()
     this.setState({comparedDistricts: this.state.comparedDistricts.concat(searchedData)})
   }
  }

  compareAverages() {
    if(this.state.comparedDistricts.length === 2) {
      let first = this.state.comparedDistricts[0].location
      let second = this.state.comparedDistricts[1].location
      let average = this.scrubbedData.compareDistrictAverages(first, second)
      return average
    }
  }

  findByName(input) {
    let searchedData = this.scrubbedData.findByName(input)
    if (searchedData) {
      this.setState({data: {searchedData}})
    }
  }

  findAllMatches(input) {
    let allMatches = this.scrubbedData.findAllMatches(input)
    let test2 = {}
    let test = allMatches.forEach(key => {
      let test3 = this.scrubbedData.findByName(key)

      test2[key] = {'data': {}}
      test2[key].data = test3.data
    })
    this.setState({data: test2})
  }

  render() {
    return (
      <section id='app-wrapper'>
        <h1>
          <img id='bookbag' src={require('./styles/images/backpack.png')} alt='bookbag logo'/>
          HeadCount
          <img id='bus' src={require('./styles/images/bus.png')} alt='schoolbus logo'/>
        </h1>
        <Input
          findByName={this.findByName.bind(this)}
          findAllMatches={this.findAllMatches.bind(this)}/>
        <CompareCardsGrid
          comparedDistricts={this.state.comparedDistricts}
          comparedAverage={this.compareAverages()}
          handleComparedCards={this.handleComparedCards.bind(this)}
          removeCard={this.removeCard.bind(this)} />
        <CardGrid handleComparedCards={this.handleComparedCards.bind(this)}
          data={this.state.data}/>
      </section>
    )
  }

}

export default App;
