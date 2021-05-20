// function to convert IST to mon dd yyyy format
let dateTime;
export const getDateMonth = dateOfBirth => {
  dateTime = new Date(dateOfBirth);
  var date = new Date(dateOfBirth.replace('IST', ''));
  let day = date.getDate();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let month = date.getMonth();
  let monthName = monthNames[month];
  let year = date.getFullYear();
  let dateMonth = monthName + ' ' + day + ' ' + year;
  return dateMonth;
};
