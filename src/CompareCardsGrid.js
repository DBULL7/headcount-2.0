import React from 'react'
import Card from './Card'
// import CompareCard from './CompareCard'



const CompareCardsGrid = ({compareCards, average, handleComparedCards}) => {
  console.log('average in compare card grid')
  console.log(average)
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


let renderCompareCard = (average) => {
  console.log(average)

  if(average) {
    let test = Object.keys(average)
    let test2 = Object.values(average)
    console.log(test)
    return (
      <div id='compare-card'>
        {test[0]} : {test2[0]}
        <br />
        {average.compared}
        <br />
        {test[1]} : {test2[1]}
      </div>
    )
  }

}

  return (
    <div id='compare-card-container'>
      {
        Object.keys(test).map((district, index) => {
          return <Card
                  className='district-cards'
                  title={district}
                  data={districtStats[index]}
                  handleComparedCards={handleComparedCards}
                  key={index}
                 />
        })
      }
      {renderCompareCard(average)}
    </div>
  )
}

export default CompareCardsGrid
