const axios = require("axios");

const EventPageModel = {};

function GetDaysOfWeek(startDate, endDate) {
  const daysOfweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let result = [];
  let i = 0;
  let start = new Date(startDate);
  const end = new Date(endDate);

  result[i++] = daysOfweek[start.getDay()];

  while (start.getTime() !== end.getTime()) {
    start.setDate(start.getDate() + 1);
    result[i++] = daysOfweek[start.getDay()];
  }

  return result;

  // let test= new Date("2021/12/1")
  // let test1= new Date("2021/12/2")
  // console.log(test.setDate(test.getDate() +1))
  // console.log(test.getDate() === test1.getDate())
  // console.log(test.getDay())
  // console.log(test, test1)
}

//this code is obtained from google api
//https://www.youtube.com/watch?v=29Dp2mSwS4w for learning how to use axios
//https://developers.google.com/maps/documentation/javascript/adding-a-google-map for the marker and init map
//https://developer.mapquest.com/documentation/open/geocoding-api/ how to use geocode here

EventPageModel.initMap = (dataAddress) => {
  console.log(dataAddress);

  const address = dataAddress;
  let location;

  axios
    .get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: address,
        key: "AIzaSyD83drqxn_tmCcwf8NB1_vNwed9BRkU1VE",
      },
    })
    .then(function (response) {
      location = response.data.results[0].geometry.location;
    });
  return location;
};

EventPageModel.getDetails = (data) => {
  const details = {
    category: "",
    startDate: "",
    endDate: "",
    venue: "",
    size: "",
    startTime: "",
    endTime: "",
    daysOfWeek: [],
  };

  if (data["category"]) {
    for (let key in details) {
      if (key !== "daysOfWeek") {
        details[key] = data[key];
      } else {
        details["daysOfWeek"] = GetDaysOfWeek(
          data["startDate"],
          data["endDate"]
        );
      }
    }
  }
  return details;
};

module.exports = EventPageModel;
