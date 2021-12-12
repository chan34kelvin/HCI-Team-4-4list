import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

//view
import EventPageView from "../views/EventPage";
//Model
const axios = require("axios");
const EventPageModel = require("../models/EventPage.js");
const DetailHelperModel = require("../helpers/DetailHelper")

export default function EventPage() {
  const URLPath = process.env.PUBLIC_URL;
  const [data, setData] = useState(() => []);
  const [center, setCenter] = useState(() => null);
  const [user, setUser] = useState(() => null);
  const parameter = useParams()["id"];
  const history = useHistory();

  useEffect(() => {
    fetch(URLPath + "/db/events.txt")
      .then((response) => response.text())
      .then((data) => {
        // Do something with your data
        const temp = JSON.parse(data).filter((card) => {
          return card["id"] === parameter;
        })[0];

        setData(temp);
        const address = temp["address"];

        //get user info
        fetch(URLPath + "/db/users.txt")
          .then((response) => response.text())
          .then((data) => {
            // Do something with your data
            const temp1 = JSON.parse(data).filter((card) => {
              return card["userId"] === temp["userId"];
            })[0];
            setUser(temp1);
            console.log(temp1);
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
              key: "AIzaSyD83drqxn_tmCcwf8NB1_vNwed9BRkU1VE",
            },
          })
          .then(function (response) {
            setCenter(response.data.results[0].geometry.location);
          });
      });
  }, [parameter]);

  if (!data) {
    //revert back to old page if not found
    history.replace("/event");
    return history.go(0);
  }

  //four element a view needs
  const image = "/images/" + data["image"];
  const details = EventPageModel.getDetails(data);
  const title = DetailHelperModel.addDateToTitle(data["startDate"], data["endDate"], data["title"])
  const description = data["description"];
  const address = data["address"];
  const locDetails = { place: data["place"], parking: data["parking"] };

  return (
    <EventPageView
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

  // var fs = require('browserify-fs');

  // fs.readFile('/home/hello-world1.txt', 'utf-8', function(err, data) {
  //   console.log(data);
  // });
  // fs.mkdir('/home', function() {
  //     fs.writeFile('/home/hello-world.txt', 'Hello world11!\n', function() {
  //         fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
  //             console.log(data);
  //         });
  //     });
  // });
}
