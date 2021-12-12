const DateHelperModel = require("../helpers/DateHelper")

const EventPageModel = {};

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
      if(key === "daysOfWeek") {
        details["daysOfWeek"] = DateHelperModel.getDaysOfWeek(
          data["startDate"],
          data["endDate"]
        );
      }else{
        details[key] = data[key];
      }
    }
  }
  return details;
};

module.exports = EventPageModel;
