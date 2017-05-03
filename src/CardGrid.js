import React from 'react'
import Card from './Card'


const CardGrid = ({data}) => {
  let dataValues = Object.values(data)
  let districtStats = []


  dataValues.forEach(obj => {
    // console.log(obj.data)
    districtStats.push(obj.data)
  })

  return (
    <div id='card-container'>
      {
        Object.keys(data).map((district, index) => {
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


export default CardGrid
