import { useEffect, useState } from "react";

//view
import EventListView from "../views/EventList.js";
//Model
const EventModel = require("../models/EventModel.js");

export default function EventPage() {
  const URLPath = process.env.PUBLIC_URL;
  const [data, setData] = useState(() => ([]));
  const [filterData, setFilterData] = useState(() => ([]));
  const [states, setStates] = useState(() => ({
      category: "",
      month: "",
      day: "",
      weekday: "",
      year: "",
      time: "",
      size: "",
      venue: "",
  }))

  useEffect(() => {
    fetch(URLPath + "/db/events.txt")
      .then((response) => response.text())
      .then((data) => {
        // Do something with your data
        const temp = JSON.parse(data)
        setData(temp);
        setFilterData(temp)
      });
  }, [URLPath]);

  useEffect(() => {

    //filter with raw data first for category, active time, venue, size
    //2nd filter after list generated, day of week, mm dd yy
    let filtered = data
    filtered = EventModel.filterData(filterData, states)
    filtered = EventModel.generateList(filtered)

    console.log(filtered)

  }, [filterData, states])

  return (
    <EventListView/>
  );
}