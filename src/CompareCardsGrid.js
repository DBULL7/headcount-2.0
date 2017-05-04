import React from 'react'
import Card from './Card'
import CompareCard from './CompareCard'



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


// let renderCompareCard = () => {
//   return(
//     <CompareCard />
//   )
// }

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
      {/* {this.renderCompareCard} */}
    </div>
  )
}

export default CompareCardsGrid
