import { useEffect, useState } from 'react'

//view
import EventListView from '../views/EventList.js'
//Model
const EventModel = require('../models/EventModel.js').default

const EventList = (props) => {
  const [data, setData] = useState(() => [])
  const [filterData, setFilterData] = useState(() => [])
  const [error, setError] = useState(() => false)
  const [states, setStates] = useState(() => ({
    category: '',
    month: '',
    day: '',
    weekDay: '',
    year: '',
    time: '',
    size: '',
    venue: '',
  }))

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db/events.txt`)
      .then((response) => response.text())
      .then((data) => {
        // Do something with your data
        const temp = JSON.parse(data)
        if (props.searchParam) {
          let searchData = EventModel.searchData(temp, props.searchParam)
          searchData= EventModel.getAreaData(searchData, props.area)
          console.log(searchData)
          setData(searchData)
          setFilterData(searchData)
        } else {
          let searchData= EventModel.getAreaData(temp, props.area)
          setData(searchData)
          setFilterData(searchData)
        }
      })
  }, [props.searchParam, props.area])

  useEffect(() => {
    //this will take effect as state is being modified by view from user input
    //filter with raw data first for category, active time, venue, size
    //2nd filter after list generated, day of week, mm dd yy
    let filtered = filterData
    filtered = EventModel.filterData(filtered, states)
    filtered = EventModel.generateList(filtered)
    filtered = EventModel.filterTimedData(filtered, states)
    setData(filtered)

    //show error page when nth was found
    if (filtered.length > 0) {
      setError(false)
    } else {
      setError(true)
    }
  }, [filterData, states])

  const venues = EventModel.getVenues(filterData)
  const categories = EventModel.getCategories(filterData)
  let text = 'Events'
  if (props.searchParam) {
    text = 'Event Search: ' + props.searchParam
  }

  return (
    <EventListView
      error={error}
      data={data}
      venues={venues}
      categories={categories}
      states={states}
      setStates={setStates}
      text={text}
    />
  )
}

export default EventList;