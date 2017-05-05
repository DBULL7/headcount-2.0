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
    this.state = {
      input: '',
      data: {},
      compareDistricts: [],
      averageDistricts: {}
    }
  }

  componentDidMount() {
    let data = new DistrictRepository(kinderData)
    this.setState({data: data.data})
  }

  removeClickedCompareCard(card) {
    console.log(card)
  }

  handleComparedCards(cardTitle) {
   let searchedData = new DistrictRepository(kinderData).findByName(cardTitle)
   if (this.state.compareDistricts.length < 2) {
     let test = this.state.compareDistricts.concat(searchedData)
     this.setState({compareDistricts: test})
   } else {
     let test2 = this.state.compareDistricts.shift()
     let test3 = this.state.compareDistricts.concat(searchedData)
     this.setState({compareDistricts: test3})
   }
  }

  compareDistrictAverages() {
    if(this.state.compareDistricts.length === 2) {
      let first = this.state.compareDistricts[0].location
      let second = this.state.compareDistricts[1].location
      let average = new DistrictRepository(kinderData).compareDistrictAverages(first, second)
      return average
    }
  }



  findByName(input) {
    let searchedData = new DistrictRepository(kinderData).findByName(input)
    if (searchedData) {
      this.setState({data: {searchedData}})
    }
  }

  findAllMatches(input) {
    let allMatches = new DistrictRepository(kinderData).findAllMatches(input)
    let test2 = {}
    let test = allMatches.forEach(key => {
      let test3 = new DistrictRepository(kinderData).findByName(key)

      // console.log(test3);
      // console.log(key);

      test2[key] = {'data': {}}
      test2[key].data = test3.data
    })


    // console.log(test2)
    this.setState({data: test2})

  }

  render() {
    return (
      <div>
        <h1>
          <img id='bookbag' src={require('./styles/images/backpack.png')} alt='bookbag logo'/>
          HeadCount
          <img id='bus' src={require('./styles/images/bus.png')} alt='schoolbus logo'/>
        </h1>

        <Input findByName={this.findByName.bind(this)} findAllMatches={this.findAllMatches.bind(this)}/>
        <div>
          <CompareCardsGrid handleComparedCards={this.handleComparedCards.bind(this)} average={this.compareDistrictAverages()} compareCards={this.state.compareDistricts}/>
        </div>
        <div>
          <CardGrid handleComparedCards={this.handleComparedCards.bind(this)} data={this.state.data}/>
        </div>
      </div>
    )
  }

}

export default App;
