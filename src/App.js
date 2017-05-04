import React, { Component } from 'react';
import './styles/App.css';
import CardGrid from './CardGrid.js'
import Input from './Input.js'
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js'

class App extends Component {

  constructor() {
    // let data = new DistrictRepository(kinderData)
    super()
    this.state = {
      input: '',
      data: {}
    }
  }

  componentDidMount() {
    let data = new DistrictRepository(kinderData)
    // console.log(data.data)
    // console.log('fired');
    this.setState({data: data.data})
  }

  findByName(input) {
    let searchedData = new DistrictRepository(kinderData).findByName(input)
    // let allMatches = new DistrictRepository(kinderData).findAllMatches(input)
    if (searchedData) {
      // console.log(searchedData);
      this.setState({data: {searchedData}})
    // } else {
    //   // console.log(allMatches)
    //   let filtered
    //   let test = allMatches.map(location => {
    //     console.log(location)
    //     return searchedData(location)
    //   })
      // console.log(test);
      // this.setState({data: {test}})
    }
    // this.setState({data: searchedData.data})
  }

  findAllMatches(input) {
    let allMatches = new DistrictRepository(kinderData).findAllMatches(input)
    // console.log(allMatches)
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
    // console.log(test2);

    // console.log(this.state.data);

    // let test4 = test.reduce((obj, next) => {
    //
    //   return obj
    // }, {})

    // let bullshit = allMatches.map(key => {
    //   // console.log(key);
    //   // let test = this.findByName(key)
    //   // return test
    // })
    // console.log(bullshit);
    // this.setState({data: {bullshit}})
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
          <CardGrid data={this.state.data}/>
        </div>
      </div>
    )
  }

}

export default App;
