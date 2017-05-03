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
     const district = searchedDistrict.toUpperCase()
     return this.data[district]
   }

   findAllMatches(searchInput) {
     const locations = Object.keys(this.data)

     return searchInput ? locations.filter(location => location.includes(searchInput.toUpperCase()))
                        : locations.map(location => this.data[location])
   }
}
