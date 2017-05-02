export default class DistrictRepository {
  constructor(rawData) {
    this.data = this.cleanData(rawData)
  }

  cleanData(rawData) {
    return rawData.reduce((acc, dataPoint) => {

      if (!acc[dataPoint.Location]) {
        acc[dataPoint.Location] = []
      }

      acc[dataPoint.Location].push({[dataPoint.TimeFrame]: dataPoint.Data})


      return acc
    }, {})
  }
}
