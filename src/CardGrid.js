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
                className='district-cards unclicked'
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
      return (
        Object.keys(data).map((district, index) => {
          console.log(comparedDistricts[0].location)
          console.log(data[district].location)
          if(data[district].location === comparedDistricts[0].location){
            return(
              <Card
                className='district-cards clicked'
                title={district}
                data={districtStats[index]}
                handleComparedCards={handleComparedCards}
                key={district}
                isClicked={true}
              />
            )
          } else {
            return(
              <Card
                className='district-cards clicked'
                title={district}
                data={districtStats[index]}
                handleComparedCards={handleComparedCards}
                key={district}
                isClicked={false}
              />
            )
          }
        })
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
