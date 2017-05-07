import React from 'react'
import Card from './Card'


// const CardGrid = ({data, handleComparedCards}) => {
//   let dataValues = Object.values(data)
//   let districtStats = []
//
//
//   dataValues.forEach(obj => {
//     districtStats.push(obj.data)
//   })
//   // console.log(districtStats)
//   return (
//     <div id='card-container'>
//       {
//         Object.keys(data).map((district, index) => {
//           return <Card
//                   className='district-cards'
//                   title={district}
//                   data={districtStats[index]}
//                   handleComparedCards={handleComparedCards}
//                   key={index}
//                  />
//         })
//       }
//     </div>
//   )
// }

//***************************Working Code*******************





const CardGrid = ({data, handleComparedCards, comparedDistricts}) => {
  let dataValues = Object.values(data)
  let districtStats = []

  dataValues.forEach(obj => {
    districtStats.push(obj.data)
  })




  let noClickedCards = () => {
    if(comparedDistricts.length===0) {
      return (
        Object.keys(data).map((district, index) => {
          return (
              <Card
                className='district-cards'
                title={district}
                data={districtStats[index]}
                handleComparedCards={handleComparedCards}
                key={district}
                isClicked={false}
               />
          )
        })
      )
    }
  }

  let clickedCardsPresent = () => {
    if(comparedDistricts.length >= 1) {
      console.log('clicked cards present')
      return (
        
      )
    }
  }

  return (
    <div id='card-container'>
      {noClickedCards()}
      {clickedCardsPresent()}


    </div>
  )
}


export default CardGrid
