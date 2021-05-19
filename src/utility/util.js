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

  // alert(monthName + ' ' + day + ' ' + year);

  let dateMonth = monthName + ' ' + day + ' ' + year;
  return dateMonth;
  // alert(date);
  // console.log('itemssss=============>');
};
