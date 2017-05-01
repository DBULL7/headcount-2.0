export default class DistrictRepository {
  constructor(data) {
    this.data = data
  }

  cleanData() {
    let nonDuplicatedData = this.data.reduce((acc, dataPoint) => {
      let timeFrame = dataPoint.TimeFrame
      let data = dataPoint.Data
      if (dataPoint['Location'] === 'Colorado') {
        acc.years.push({[timeFrame]: data})
      }
      return acc
    }, {Location: 'Colorado', years: []} )
    console.log(nonDuplicatedData)
  }

  // test() {
  // let test = this.data.filter(dataPoint =>
  //   !dataPoint['Data'])
  // console.log(test)
  // }

}
