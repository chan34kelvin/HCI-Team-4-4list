const DateHelperModel= require("../helpers/DateHelper")
const EventListModel = {};

EventListModel.generateList = () => {

    //using current date, keep going down until it hits the amount of post it has
    //check if that post exist within the date
    //return an object with the date and an array of the amount of post it has
    
    const currentDate= Date.now()
    console.log(currentDate)

}

module.exports = EventListModel;