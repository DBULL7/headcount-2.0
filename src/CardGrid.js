import React from 'react'
import Card from './Card'

const CardGrid = ( { data } ) => {
  console.log(data.data)
  if (data.data) {
    let keys = Object.keys(data.data)
    console.log(keys);
  }
  return (
    <div>
      {
        Object.keys(data).map(district => {
          return <Card title={district} />
        })
      }
    </div>
  )
}


export default CardGrid
