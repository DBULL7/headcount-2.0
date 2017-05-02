export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data)
  }

  cleanData(raw) {
    return raw.reduce((acc, dataPoint) => {

      if (!acc[dataPoint.Location]) {
        acc[dataPoint.Location] = []
      }

      acc[dataPoint.Location].push({[dataPoint.TimeFrame]: dataPoint.Data})


      return acc
    }, {})
  }
}
