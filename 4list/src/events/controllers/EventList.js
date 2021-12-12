import { useEffect, useState } from "react";

//view
import EventListView from "../views/EventList.js";
//Model
const EventModel = require("../models/EventModel.js");

export default function EventList() {
  const URLPath = process.env.PUBLIC_URL;
  const [data, setData] = useState(() => []);
  const [filterData, setFilterData] = useState(() => []);
  const [error, setError] = useState(() => (false))
  const [states, setStates] = useState(() => ({
    category: "",
    month: "",
    day: "",
    weekDay: "",
    year: "",
    time: "",
    size: "",
    venue: "",
  }));

  useEffect(() => {
    fetch(URLPath + "/db/events.txt")
      .then((response) => response.text())
      .then((data) => {
        // Do something with your data
        const temp = JSON.parse(data);
        setData(temp);
        setFilterData(temp);
      });
  }, [URLPath]);

  useEffect(() => {
    //this will take effect as state is being modified by view from user input
    //filter with raw data first for category, active time, venue, size
    //2nd filter after list generated, day of week, mm dd yy
    let filtered = data;
    filtered = EventModel.filterData(filterData, states);
    filtered = EventModel.generateList(filtered);
    filtered = EventModel.filterTimedData(filtered, states);
    setData(filtered);

    //show error page when nth was found
    if(filtered.length > 0){
      setError(false)
    }else{
      setError(true)
    }
  }, [filterData, states]);

  const venues = EventModel.getVenues(filterData);
  const categories= EventModel.getCategories(filterData)

  return (
    <EventListView
      error={error}
      data={data}
      venues={venues}
      categories={categories}
      states={states}
      setStates={setStates}
    />
  );
}
