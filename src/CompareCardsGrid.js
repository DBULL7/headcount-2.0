import React from 'react'
import Card from './Card'




const CompareCardsGrid = ({compareCards, comparedAverage, handleComparedCards, removeCard}) => {

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

  let renderCompareCard = (comparedAverage) => {
    if(comparedAverage) {
    let test = Object.keys(comparedAverage)
    let test2 = Object.values(comparedAverage)
    return (
      <div className='card-info' id='compare-card'>
        {test[0]} : {test2[0]}
        <br />
        {comparedAverage.compared}
        <br />
        {test[1]} : {test2[1]}
      </div>
    )
  }
  }

  return (
    <section id='compare-card-container'>
      {
        Object.keys(test).map((district, index) => {
          return <Card
                  className='district-cards'
                  title={district}
                  data={districtStats[index]}
                  handleComparedCards={handleComparedCards}
                  removeCard={removeCard}
                  key={index} />
        })
      }
      {renderCompareCard(comparedAverage)}
    </section>
  )
}

export default CompareCardsGrid
