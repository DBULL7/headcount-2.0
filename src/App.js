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
      data: {}
    }
  }

  componentDidMount() {
    let data = new DistrictRepository(kinderData)
    // console.log(data.data)
    this.setState({data: data.data})
  }

  retrieveInput(input) {
    this.setState({input})
  }

  render() {
    return (
      <div>
        <h1>
          <img id='bookbag' src={require('./styles/images/backpack.png')} alt='bookbag logo'/>
          HeadCount
          <img id='bus' src={require('./styles/images/bus.png')} alt='schoolbus logo'/>
        </h1>
        <Input retrieveInput={this.retrieveInput.bind(this)}/>
        <div>
          <CardGrid data={this.state.data}/>
        </div>
      </div>
    )
  }

}

export default App;
