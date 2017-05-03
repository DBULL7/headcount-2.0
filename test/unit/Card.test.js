import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../../src/Card'
import { shallow, mount } from 'enzyme'
import DistrictRepository from '../../src/helper.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js'
import CardGrid from '../../src/CardGrid'

const scrubbedData = new DistrictRepository(kinderData)
const cardGrid = CardGrid(scrubbedData)
// console.log(cardGrid)
// const dataValues = Object.values(scrubbedData)
// const districtStats = []
// dataValues.forEach(obj => {
//   // console.log(obj.data)
//   districtStats.push(obj.data)
// })

describe('A Card', () => {
  const card = new Card()
  const shallowWrapper = shallow(<Card />)
  const mountWrapper = mount(<Card />)

  it('should be a test', () => {
    console.log('hi Dhere')
    // console.log(districtStats)
  })

})
