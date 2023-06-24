import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

//Views
import EventPageView from "../views/EventPage";

//Models
const axios = require("axios");
const EventModel = require("../models/EventModel.js").default;

export default function EventPage() {
  const [data, setData] = useState(() => []);
  const [center, setCenter] = useState(() => null);
  const [user, setUser] = useState(() => null);
  const parameter = useParams()["id"];
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db/events.txt`)
      .then((response) => response.text())
      .then((data) => {
        // Do something with your data
        const temp = JSON.parse(data).filter((card) => {
          return card["id"] === parameter;
        })[0];

        setData(temp);
        const address = temp["address"];

        //get the poster info from a list of users
        fetch(`${process.env.PUBLIC_URL}/db/users.txt`)
          .then((response) => response.text())
          .then((data) => {
            // find the matching user info
            const temp1 = JSON.parse(data).filter((card) => {
              return card["userId"] === temp["userId"];
            })[0];
            setUser(temp1);
          });

        //this code is referenced from google api
        //https://www.youtube.com/watch?v=29Dp2mSwS4w for learning how to use axios
        //https://developers.google.com/maps/documentation/javascript/adding-a-google-map for the marker and init map
        //https://developer.mapquest.com/documentation/open/geocoding-api/ how to use geocode here
        //get location from geocode
        axios
          .get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
              address: address,
              key: process.env.GOOGLE_MAP_API_KEY,
            },
          })
          .then(function (response) {
            setCenter(response.data.results[0].geometry.location);
          })
          .catch(function (error){
            setCenter({
              lat: 37.7749,
              lng: -122.4194
            })
          });
      });
  }, [parameter]);

  //revert back to old page if not found
  if (!data) {
    history.replace("/event");
    return history.go(0);
  }

  //four element a view needs
  const id= data["id"]
  const image = `${process.env.PUBLIC_URL}/images/` + data["image"];
  const details = EventModel.getDetails(data);
  const title = EventModel.addDateToTitle(data["startDate"], data["endDate"], data["title"])
  const description = data["description"];
  const address = data["address"];
  const locDetails = { place: data["place"], parking: data["parking"] };

  return (
    <EventPageView
      id={id}
      title={title}
      details={details}
      description={description}
      address={address}
      image={image}
      center={center}
      locDetails={locDetails}
      user={user}
    />
  );
}
