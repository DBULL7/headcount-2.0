import React from 'react'
import Card from './Card'


const CompareCardsGrid = ({compareCards}) => {
  // console.log(compareCards)
  // if(compareCards[0]) {
  // let dataValues = Object.values(compareCards[0].data)
  //   console.log(dataValues)
  // }
  // let dataValues = compareCards.reduce((obj, district) => {
  //
  //   return obj
  // }, {})
  console.log('Compare Cards');
  console.log(compareCards);
  // console.log(dataValues)
  let districtStats = []

  if (compareCards !== []) {
    compareCards.forEach(obj => {
      // console.log(obj.data)
      districtStats.push(obj.data)
      // console.log(districtStats)
    })

  }
  // console.log('new districtStats');
  // console.log(districtStats);
  return (
    <div>
      {compareCards.map((district, index) => {
        // console.log(districtStats[index])
        return <Card
                className='district-cards'
                title={district}
                data={districtStats[index]}
                key={index}
               />
      })}
    </div>
  )
}

export default CompareCardsGrid
