/* initiate a date object */

const date = new Date();

/** name of the current day */

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDay = days[date.getDay()];
console.log("Current Day Name:", currentDay);

/* Current day of the month */

const currentDayOfMonth = date.getUTCDate();
console.log("Current day of the month:", currentDayOfMonth);

/**  Current month */
const months = [
  "January",
  "February",
  "March",
  "April",
  "Mai",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentMonth = months[date.getUTCMonth()];
console.log("Current month:", currentMonth);

/*  Current Year */

const currentYear = date.getFullYear();
console.log("Current Year:", currentYear);

function displayDate(currentDay, currentDayOfMonth, currentMonth, currentYear) {
  return `Today is ${currentDay} the ${currentDayOfMonth} of ${currentMonth}, ${currentYear}`;
}

console.log(
  displayDate(currentDay, currentDayOfMonth, currentMonth, currentYear)
);
