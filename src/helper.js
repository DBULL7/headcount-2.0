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
   let district = searchedDistrict.toUpperCase()
   return this.data[district]
  }

  findAllMatches(searchInput) {
   const locations = Object.keys(this.data)

   return searchInput ? locations.filter(location => location.includes(searchInput.toUpperCase()))
                      : locations.map(location => this.data[location])
  }

  findAverage(district) {
   let districtObj = this.findByName(district)
   let years = Object.keys(districtObj.data)
   let sum = years.reduce((sum, year) => {
     return sum += districtObj.data[year]
   }, 0)
   let average = sum / years.length
   return Math.round(1000*average)/1000
  }

  compareDistrictAverages(district1, district2) {
     let avg1 = this.findAverage(district1)
     let avg2 = this.findAverage(district2)
     let combinedAvg = (avg1 / avg2)
     return {
       [district1]: avg1,
       [district2]: avg2,
       'compared': Math.round(1000*combinedAvg)/1000
     }
   }

}
