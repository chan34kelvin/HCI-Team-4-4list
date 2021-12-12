const DetailHelperModel = {};

DetailHelperModel.addDateToTitle = (startDate, endDate, title) => {
  if (startDate) {
    const start = startDate.split("/");
    const end = endDate.split("/");

    const startFormat = start[0] + "/" + start[1];
    const endFormat = end[0] + "/" + end[1];

    return startFormat + " - " + endFormat + "\t" + title;
  }
  return ""
};

module.exports = DetailHelperModel;
