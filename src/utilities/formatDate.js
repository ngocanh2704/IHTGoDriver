export const formatDate = date => {
  return date;
  if (date) {
    date = date.split("-");
    var monthNames = [
      "tháng 1",
      "tháng 2",
      "tháng 3",
      "tháng 4",
      "tháng 5",
      "tháng 6",
      "tháng 7",
      "tháng 8",
      "tháng 9",
      "tháng 10",
      "tháng 11",
      "tháng 12"
    ];

    return date[0] + " " + monthNames[parseInt(date[1])] + " năm " + date[2];
  }
};
