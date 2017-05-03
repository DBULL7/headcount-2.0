import React from 'react'
import Card from './Card'


const CardGrid = ({data}) => {
  let test = Object.values(data)
  let test2 = []
  test.forEach(obj => {
    // console.log(obj.data)
    test2.push(obj.data)
  })
  return (
    <div>
      {
        Object.keys(data).map((district, index) => {

          return <Card
                  title={district}
                  data={test2[index]}
                  key={index}
                 />
        })
      }
    </div>
  )
}


export default CardGrid
