import React from 'react'
import Card from './Card'


const CardGrid = ({data, handleComparedCards}) => {
  let dataValues = Object.values(data)
  let districtStats = []


  dataValues.forEach(obj => {
    districtStats.push(obj.data)
  })
  // console.log(districtStats)
  return (
    <div id='card-container'>
      {
        Object.keys(data).map((district, index) => {
          return <Card
                  className='district-cards'
                  title={district}
                  data={districtStats[index]}
                  handleComparedCards={handleComparedCards}
                  key={index}
                 />
        })
      }
    </div>
  )
}


export default CardGrid
