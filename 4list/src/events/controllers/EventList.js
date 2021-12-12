import { useEffect, useState } from "react";

//view
import EventListView from "../views/EventList.js";
//Model
const EventListModel = require("../models/EventList.js");

export default function EventPage() {
  const URLPath = process.env.PUBLIC_URL;
  const [data, setData] = useState(() => []);

  useEffect(() => {
    fetch(URLPath + "/db/events.txt")
      .then((response) => response.text())
      .then((data) => {
        // Do something with your data
        const temp = JSON.parse(data)
        setData(temp);
      });
  }, []);

  EventListModel.generateList()

  return (
    <EventListView/>
  );
}