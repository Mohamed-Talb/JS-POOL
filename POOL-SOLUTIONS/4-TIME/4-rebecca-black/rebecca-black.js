const isFriday = (date) => date.getDay() === 5;

const isWeekend = (date) => date.getDay() === 6 || date.getDay() === 0;

function isLeapYear(date)
{
    const y = date.getFullYear();
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
} 
    

function isLastDayOfMonth(date)
{
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate()+1);
    return newDate.getDate() === 1;
}


// // isFriday
// console.log(isFriday(new Date("2026-01-16"))); // true  (Friday)
// console.log(isFriday(new Date("2026-01-15"))); // false (Thursday)
// console.log(isFriday(new Date("invalid")));    // false (invalid date → fail)


// // isWeekend
// console.log(isWeekend(new Date("2026-01-17"))); // true  (Saturday)
// console.log(isWeekend(new Date("2026-01-14"))); // false (Wednesday)
// console.log(isWeekend(new Date("invalid")));    // false (invalid date → fail)


// // isLeapYear
// console.log(isLeapYear(new Date("2024-01-01"))); // true  (2024 divisible by 4)
// console.log(isLeapYear(new Date("2100-01-01"))); // false (2100 divisible by 100, not 400)
// console.log(isLeapYear(new Date("invalid")));    // false (invalid date → fail)


// // isLastDayOfMonth
// console.log(isLastDayOfMonth(new Date("2026-01-31"))); // true  (last day of Jan)
// console.log(isLastDayOfMonth(new Date("2026-01-30"))); // false (not last day)
// console.log(isLastDayOfMonth(new Date("invalid")));    // false (invalid date → fail)
