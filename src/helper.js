export default class DistrictRepository {
  constructor(rawData) {
    this.data = this.cleanData(rawData)
  }

  cleanData(data) {
    return data.reduce((acc, dataPoint) => {
        const district = dataPoint.Location.toUpperCase()
        const timeFrame = dataPoint.TimeFrame
        const data = Math.round(1000*dataPoint.Data)/1000 || 0

        if (!acc[district]) {
          acc[district] = {'location': district, 'data': {}}
        }
        acc[district].data[timeFrame] = data;
        return acc
      }, {})
  }

   findByName(searchedDistrict='') {
     const district = searchedDistrict.toUpperCase()
     console.log(this.data[district])
     return this.data[district]
   }
}
