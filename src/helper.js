export default class DistrictRepository {
  constructor(rawData) {
    this.data = this.cleanData(rawData)
    // console.log(this.data)
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
     let findDistrict = this.findByName(district)
     let test = Object.keys(findDistrict.data)
    //  console.log(Object.keys(findDistrict.data))
     let test2 = test.reduce((acc, year) => {
       return acc += findDistrict.data[year]
     }, 0)
    let test3 = test2 / test.length
    return Math.round(1000*test3)/1000

   }

   compareDistrictAverages(firstAvg, secondAvg) {
     let test = this.findAverage(firstAvg)
     let test2 = this.findAverage(secondAvg)
     console.log(test2)
     let combinedAvg = (test / test2)
     return {[firstAvg.toUpperCase()]: test, [secondAvg.toUpperCase()]: test2, 'compared': Math.round(1000*combinedAvg)/1000}
   }
}
