import React from 'react'
import Card from './Card'

const CardGrid = ({data}) => {
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
