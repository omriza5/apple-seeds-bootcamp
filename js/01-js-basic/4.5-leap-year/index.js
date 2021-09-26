const leapYearMessage = "It is indeed a leap year";
const regularYearMessage = "This is not a leap year.";
function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(leapYearMessage);
      } else {
        console.log(regularYearMessage);
      }
    } else {
      console.log(leapYearMessage);
    }
  } else {
    console.log(regularYearMessage);
  }
}
leapYear(2012);
leapYear(2100);
leapYear(2400);
