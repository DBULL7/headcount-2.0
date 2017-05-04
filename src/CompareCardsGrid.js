import React from 'react'
import Card from './Card'


const CompareCardsGrid = ({compareCards}) => {

  let test = compareCards.reduce((acc, district) => {
    if(!acc[district]) {
      acc[district['location']] = {location: district.location, data: district.data}
    }
    return acc
  },{})

  let dataValues = Object.values(test)
  let districtStats = []

  dataValues.forEach(obj => {
    districtStats.push(obj.data)
  })



  return (
    <div id='compare-card-container'>
      {
        Object.keys(test).map((district, index) => {
          return <Card
                  className='district-cards'
                  title={district}
                  data={districtStats[index]}
                  key={index}
                 />
        })
      }
    </div>
  )
}

export default CompareCardsGrid
