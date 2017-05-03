import React, { Component } from 'react';
import './App.css';
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
    // console.log(data.data);
    this.setState({ data })
  }


  retrieveInput(input) {
    this.setState({input})
  }

  render() {
    return (
      <div>
        <h1>HeadCount</h1>
        <Input retrieveInput={this.retrieveInput.bind(this)}/>
        <CardGrid data={this.state.data}/>
      </div>
    )
  }
}

export default App;
