import React from 'react'
import Card from './Card'




const CompareCardsGrid = ({comparedDistricts, comparedAverage, handleComparedCards, removeCard}) => {
  console.log('comparedDistricts')
  console.log(comparedDistricts)
  let districtStats = []
  
  let comparison = comparedDistricts.reduce((comparisonObj, district) => {
    if(!comparisonObj[district]) {
      comparisonObj[district.location] = {location: district.location, data: district.data}
    }
    return comparisonObj
  },{})

  comparedDistricts.forEach(dataPoint => {
    districtStats.push(dataPoint.data)
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
        Object.keys(comparison).map((district, index) => {
          return <Card
                  className='district-cards'
                  title={district}
                  data={districtStats[index]}
                  compareCardState={true}
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
