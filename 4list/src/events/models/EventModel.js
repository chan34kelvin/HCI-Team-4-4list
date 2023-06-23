//outside models
const DateHelperModel = require('../helpers/DateHelper')

const EventModel = {}

EventModel.searchData = (rawData, key) => {
  const searching = [
    'description',
    'address',
    'place',
    'title',
    'category',
    'startDate',
    'endDate',
    'venue',
  ]
  return rawData.filter((data) => {
    let result = false
    for (let i = 0; i < searching.length; i += 1) {
      if (searching[i].toLowerCase().includes('date')) {
        let dataSearching = data[searching[i]].toLowerCase().replace("/", "-")
        result= result || dataSearching.includes(key.toLowerCase())
      } else {
        result =
          result || data[searching[i]].toLowerCase().includes(key.toLowerCase())
      }
    }
    return result
  })
}

EventModel.getAreaData = (rawData, area) => {

  //search for city
  return rawData.filter((info) => {
    return info["address"].toLowerCase().includes(area.City.toLowerCase())
  })
}
//page methods
EventModel.getDetails = (data) => {
  //gets all the details for the events
  const details = {
    category: '',
    startDate: '',
    endDate: '',
    venue: '',
    size: '',
    startTime: '',
    endTime: '',
    daysOfWeek: [],
  }

  if (data['category']) {
    for (let key in details) {
      if (key === 'daysOfWeek') {
        details['daysOfWeek'] = DateHelperModel.getDaysOfWeek(
          new Date(data['startDate']),
          new Date(data['endDate']),
        )
      } else {
        details[key] = data[key]
      }
    }
  }
  return details
}

EventModel.addDateToTitle = (startDate, endDate, title) => {
  if (startDate) {
    const start = startDate.split('/')
    const end = endDate.split('/')

    const startFormat = start[0] + '/' + start[1]
    const endFormat = end[0] + '/' + end[1]

    if (startFormat === endFormat) {
      return startFormat + '\t' + title
    }

    return startFormat + ' - ' + endFormat + '\t' + title
  }
  return ''
}

//list methods
EventModel.generateList = (data) => {
  let results = []
  let count = 0
  let uniquePost = new Set()
  function addIdsIntoUniqueList(ids) {
    for (let i = 0; i < ids.length; i += 1) {
      uniquePost.add(ids[i])
    }
  }
  //generates a list
  //using current date, keep going down until it hits the amount of post it has
  //check if that post exist within the date
  //return an object with the date and an array of the amount of post it has

  if (data.length > 0) {
    // let currentDate = new Date(Date.now())
    let currentDate = new Date("11-29-2021") //making sure the sample data can load after the due date
    // console.log(currentDate)
    let i = 0 //safety limit
    let j = 0 //how many days after

    while (i < 365 && j < 20) {
      const listOfCurrent = EventModel.findListOfCurrentDate(currentDate, data)
      addIdsIntoUniqueList(listOfCurrent['ids'])

      const arr = listOfCurrent['results']

      //add to the result list if that day has a post
      if (arr.length > 0) {
        let result = {
          data: arr,
          length: arr.length,
          weekDay: DateHelperModel.getDaysOfWeek(currentDate, currentDate)[0],
          date:
            currentDate.getMonth() +
            1 +
            '/' +
            currentDate.getDate() +
            '/' +
            currentDate.getFullYear(),
          day: currentDate.getDate(),
          month: currentDate.getMonth(),
          year: currentDate.getFullYear(),
        }

        results[count++] = result
      }

      //safety check
      const tempDate = new Date(currentDate)
      currentDate.setDate(currentDate.getDate() + 1)
      if (tempDate.getTime() === currentDate.getTime()) {
        console.log('time error in generating list')
        break
      }

      //check and give 20 more days after
      if (uniquePost.size >= data.length) {
        j += 1
      }

      i += 1
    }
  }

  return results
}

EventModel.findListOfCurrentDate = (currentDate, data) => {
  let results = []
  let ids = []
  let count = 0 //count in result list
  let i = 0 //current count
  while (i < data.length) {
    const currentData = data[i]

    // console.log(currentData["id"])
    if (
      DateHelperModel.checkIfWithinDate(
        currentDate,
        new Date(currentData['startDate']),
        new Date(currentData['endDate']),
      )
    ) {
      ids[count] = currentData['id']
      results[count++] = {
        id: currentData['id'],
        title: currentData['title'],
        image: currentData['image'],
        details: EventModel.getDetails(currentData),
      }
    }
    i += 1
  }

  return { ids: ids, results: results }
}

//filter
EventModel.filterData = (filterData, states) => {
  //for time, find if is between or the active time
  //for size, find if is within that range

  let filteredData = filterData
  const whatToCheck = ['category', 'venue', 'size', 'time']

  if (filteredData.length > 0) {
    for (let key in states) {
      if (whatToCheck.includes(key)) {
        if (key === 'time') {
          if (states[key] !== '') {
            filteredData = filteredData.filter((data) => {
              let date = data['startDate']
              let start = date + ' ' + data['startTime']
              let end = date + ' ' + data['endTime']
              let filter = date + ' ' + states['time']
              return EventModel.checkTimeRange(
                new Date(start),
                new Date(end),
                new Date(filter),
              )
            })
          }
        } else if (key === 'size') {
          if (states[key] !== '') {
            filteredData = filteredData.filter((data) => {
              return EventModel.checkSizeRange(data['size'], states['size'])
            })
          }
        } else {
          if (states[key] !== '') {
            filteredData = filteredData.filter((data) => {
              return data[key] === states[key]
            })
          }
        }
      }
    }
  }

  return filteredData
}

EventModel.filterTimedData = (filterData, states) => {
  let filteredData = filterData
  const whatToCheck = ['month', 'day', 'year', 'weekDay']

  if (filteredData.length > 0) {
    for (let key in states) {
      if (whatToCheck.includes(key)) {
        if (states[key] !== '') {
          // console.log(filteredData, "before", states)
          const prev = [...filteredData]
          filteredData = prev.filter((data) => {
            // console.log(data[key] == states[key], data[key].toString() === states[key], data[key], states[key], key, data)
            return data[key].toString() === states[key]
          })
          // console.log(filteredData)
        }
      }
    }
  }
  
  return filteredData
}

EventModel.checkTimeRange = (startTime, endTime, filterTime) => {
  if (startTime.getHours() === endTime.getHours()) {
    if (filterTime.getHours() === startTime.getHours()) {
      return true
    }
  } else {
    while (startTime.getHours() !== endTime.getHours()) {
      if (filterTime.getHours() === startTime.getHours()) {
        return true
      }
      startTime.setHours(startTime.getHours() + 1)
    }
    if (filterTime.getHours() === startTime.getHours()) {
      return true
    }
  }

  return false
}

EventModel.checkSizeRange = (size, filterSize) => {
  let actualSize = 0
  if (size === '>10') {
    actualSize = 11
  } else {
    actualSize = parseInt(size, 10)
  }

  if (filterSize === 'less than 5 ppl') {
    return actualSize < 5
  }
  if (filterSize === '5 to 9 ppl') {
    return 5 <= actualSize && actualSize <= 9
  }
  if (filterSize === '10 ppl or more') {
    return actualSize >= 10
  } else {
    return false
  }
}

EventModel.getVenues = (data) => {
  let uniqueVenues = new Set()

  if (data) {
    for (let i = 0; i < data.length; i += 1) {
      uniqueVenues.add(data[i]['venue'])
    }
  }

  return Array.from(uniqueVenues)
}

EventModel.getCategories = (data) => {
  let uniqueCategory = new Set()

  if (data) {
    for (let i = 0; i < data.length; i += 1) {
      uniqueCategory.add(data[i]['category'])
    }
  }

  return Array.from(uniqueCategory)
}

module.exports = EventModel
