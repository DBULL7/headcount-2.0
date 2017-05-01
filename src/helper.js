export default class DistrictRepository {
  constructor(data) {
    this.data = data
  }
  cleanData() {
    let nonDuplicatedData = this.data.reduce((acc, dataPoint) => {
      dataPoint.forEach( => {
        if acc {
          console.log('duplicate!')
        } else {
          acc.push(key)
        }
      })
      return acc
    }, [] )
  }

  // test() {
  // let test = this.data.filter(dataPoint =>
  //   !dataPoint['Data'])
  // console.log(test)
  // }

}
