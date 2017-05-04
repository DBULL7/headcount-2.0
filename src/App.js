import React, { Component } from 'react';
import './styles/App.css';
import CardGrid from './CardGrid.js'
import Input from './Input.js'
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      input: '',
      data: {},
      compareDistricts: []
    }
  }

  componentDidMount() {
    let data = new DistrictRepository(kinderData)
    this.setState({data: data.data})
  }



  handleComparedCards(cardTitle) {
   let searchedData = new DistrictRepository(kinderData).findByName(cardTitle)
   if (this.state.compareDistricts.length < 2) {
     let test = this.state.compareDistricts.concat(searchedData)
     this.setState({compareDistricts: test})
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
      console.log(test3);
      test2[key] = {'data': {}}
      test2[key].data = test3.data
    })


    console.log(test2)
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
          <CardGrid handleComparedCards={this.handleComparedCards.bind(this)} data={this.state.data}/>
        </div>
      </div>
    )
  }

}

export default App;
