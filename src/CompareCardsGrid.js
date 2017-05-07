import React from 'react'
import Card from './Card'




const CompareCardsGrid = ({comparedDistricts, comparedAverage, handleComparedCards, removeCard}) => {
  let districtStats = []
  comparedDistricts.forEach(dataPoint => {
    districtStats.push(dataPoint.data)
  })

  let renderCompareCard = (comparedAverage) => {
    if(comparedAverage) {
      let districts = Object.keys(comparedAverage)
      let averages = Object.values(comparedAverage)
      return (
        <div id='compare-card'>
          <p>{districts[0]} : <span className='bold'>{averages[0]}</span></p>
          <p className='bold'>{comparedAverage.compared}</p>
          <p>{districts[1]} : <span className='bold'>{averages[1]}</span></p>
        </div>
      )
    }
  }

  return (
    <section id='compare-card-container'>
      {
        comparedDistricts.map((district, index) => {
          return <Card
                  className='district-cards'
                  title={district.location}
                  data={districtStats[index]}
                  isClicked={true}
                  handleComparedCards={handleComparedCards}
                  // removeCard={removeCard}
                  key={index}
                  id={district.location}/>
        })
      }
      {renderCompareCard(comparedAverage)}
    </section>
  )
}

export default CompareCardsGrid
