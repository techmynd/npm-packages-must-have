// https://momentjs.com
const moment = require('moment');

let output;
// Format Dates
output = moment().format('YYYY-MM-DD'); // 2019-07-28
output = moment().format('DD-MM-YYYY'); // 28-07-2019
output = moment().format('DD'); // 28
output = moment().format('MM'); // 07
output = moment().format('YYYY'); // 2019
output = moment().format('MMMM Do YYYY, h:mm:ss a'); // July 28th 2019, 10:34:38 pm
output = moment().format('dddd'); // Sunday
output = moment().format('MMM Do YY'); // Jul 28th 19
//
output = moment().format('YYYY'); // 2019
output = moment().format('YY'); // 19
output = moment().format('Y'); // 2019

output = moment().format('MMMM'); // July
output = moment().format('MMM'); // Jul
output = moment().format('MM'); // 07
output = moment().format('M'); // 7

output = moment().format('dddd'); // Sunday
output = moment().format('ddd'); // Sun
output = moment().format('dd'); // Su
output = moment().format('d'); // 0 // number of the day

// Relative Time
output = moment('20111031', 'YYYYMMDD').fromNow(); // 8 years ago
output = moment()
  .startOf('day')
  .fromNow(); // a day ago
output = moment()
  .endOf('day')
  .fromNow(); // in an hour
output = moment()
  .startOf('hour')
  .fromNow();

// Calendar Time
output = moment()
  .subtract(6, 'days')
  .calendar(); // Last Monday at 10:38 PM

output = moment()
  .subtract(1, 'days')
  .calendar(); // Yesterday at 10:39 PM

output = moment().calendar(); // Today at 10:39 PM

output = moment()
  .add(1, 'days')
  .calendar(); // Tomorrow at 10:40 PM

output = moment()
  .add(3, 'days')
  .calendar(); // Wednesday at 10:40 PM

output = moment().format('LT'); // 11:23 PM
output = moment().format('LTS'); // 11:24:23 PM

output = moment().format('LL'); // July 28, 2019
output = moment().format('ll'); // Jul 28, 2019
output = moment().format('lll'); // Jul 28, 2019 11:24 PM
output = moment().format('LLLL'); // Sunday, July 28, 2019 11:25 PM

output = moment('2005-03-05').format('LLLL'); // Saturday, March 5, 2005 12:00 AM

console.log(output);
