const DateHelperModel = {};

DateHelperModel.checkIfWithinDate = (currentDate, startDate, endDate) => {
    
}

// part of the code reference from https://www.w3schools.com/jsref/jsref_getday.asp
DateHelperModel.getDaysOfWeek = (startDate, endDate) => {
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
};

module.exports = DateHelperModel;
