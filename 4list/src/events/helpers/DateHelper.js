const DateHelperModel = {};

DateHelperModel.checkIfWithinDate = (currentDate, startDate, endDate) => {
  if (startDate.getTime() === endDate.getTime()) {
    let year = startDate.getFullYear() === currentDate.getFullYear();
    let month = startDate.getMonth() === currentDate.getMonth();
    let day = startDate.getDate() === currentDate.getDate();

    if (year && month && day) {
      return true;
    }
  }

  if (startDate.getTime() !== endDate.getTime()) {
    while (startDate.getTime() !== endDate.getTime()) {
      let year = startDate.getFullYear() === currentDate.getFullYear();
      let month = startDate.getMonth() === currentDate.getMonth();
      let day = startDate.getDate() === currentDate.getDate();

      if (year && month && day) {
        return true;
      }
      startDate.setDate(startDate.getDate() + 1);
    }

    //   console.log(currentDate, startDate, endDate)
    let year = startDate.getFullYear() === currentDate.getFullYear();
    let month = startDate.getMonth() === currentDate.getMonth();
    let day = startDate.getDate() === currentDate.getDate();

    if (year && month && day) {
      return true;
    }
  }

  return false;
};

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

  result[i++] = daysOfweek[startDate.getDay()];

  while (startDate.getTime() !== endDate.getTime()) {
    startDate.setDate(startDate.getDate() + 1);
    result[i++] = daysOfweek[startDate.getDay()];
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
