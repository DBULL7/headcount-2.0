import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('should have data', () => {
    let app = new App
    console.log(app.data)
  })
})
