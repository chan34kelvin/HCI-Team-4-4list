const DetailHelperModel = {};

DetailHelperModel.addDateToTitle = (startDate, endDate, title) => {
  if (startDate) {
    const start = startDate.split("/");
    const end = endDate.split("/");

    const startFormat = start[0] + "/" + start[1];
    const endFormat = end[0] + "/" + end[1];

    if(startFormat == endFormat){
      return startFormat + "\t" + title
    }
    console.log(startFormat)
    return startFormat + " -1 " + endFormat + "\t" + title;
  }
  console.log(startDate)
  return ""
};

module.exports = DetailHelperModel;
