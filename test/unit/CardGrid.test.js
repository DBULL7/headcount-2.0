import React from 'react'
import CardGrid from '../../src/CardGrid'
import { shallow, mount } from 'enzyme'
import DistrictRepository from '../../src/helper.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js'

const scrubbedData = new DistrictRepository(kinderData)
const cardGrid = CardGrid(scrubbedData)

describe('CardGrid', () => {
  const shallowWrapper = shallow(<CardGrid data={scrubbedData.data}/>)
  // const mountWrapper = mount(<CardGrid data={scrubbedData}/>)

  it('take a data object that contains all of the district objects', () => {
    let districts = Object.keys(shallowWrapper.unrendered.props.data)
    expect(districts.length).toEqual(181)
  })

  it('should have 181 card components', () => {
    expect(shallowWrapper.props().children.length).toEqual(181)
  })

  it('should pass the district title as a prop to the Card component', () => {
    expect(shallowWrapper.props().children[0].props.title).toEqual('COLORADO')
  })

  it('should pass the district stats as a prop to the Card component', () => {
    expect(Object.keys(shallowWrapper.props().children[0].props.data).length).toEqual(11)
  })


})
