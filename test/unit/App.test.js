import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../src/App'
import { shallow, mount } from 'enzyme'
import kinderData from '../../data/kindergartners_in_full_day_program.js'

describe('App', () => {
  const app = new App()
  const shallowWrapper = shallow(<App />)
  const mountWrapper = mount(<App />)

  it('should brighten your day a little', () => {
    console.log('🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈  I hope your day is filled with rainbows  🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈')
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('have a title', () => {
    let title = shallowWrapper.find('h1')
    expect(title.children().nodes[1]).toEqual('HeadCount')
  })

  it('should have an input component', () => {
    expect(shallowWrapper.find('Input').length).toEqual(1)
  })

  it('should have an CardGrid component', () => {
    expect(shallowWrapper.find('CardGrid').length).toEqual(1)
  })

  it('should start with data', () => {
    expect(Object.keys(app.state.data).length).toEqual(181);
  } )

  it.skip('should allow user to type a district for which to search', () => {
    let searchField = mountWrapper.find('input[type="text"]')
    // console.log(searchField.props().onChange('Colorado'))
    expect(searchField.node.value).toEqual('')
    let test = searchField.simulate('change', {target: {value: 'COLORADO'}})
    expect(searchField.node.value).toEqual('COLORADO')
  })

  it('should change state if given data', () => {
    let keys= Object.keys(mountWrapper.nodes[0].state.data)
    expect(keys.length).toEqual(181)
  })

})
