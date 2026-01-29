const weekMap = new Map([
    ["1", "Monday"],
    ["2", "Tuesday"],
    ["3", "Wednesday"],
    ["4", "Thursday"],
    ["5", "Friday"],
    ["6", "Saturday"],])

function sunnySunday(date)
{
    if (!(date instanceof Date) || isNaN(date.getTime()))
        return NaN;
    const day = date.getDay();
    const Index = day === 0 ? 6 : day;
    return weekMap.get(String(Index));
}

// const date = new Date("0001-01-01");
// console.log(date.getDay());

// console.log(sunnySunday(new Date("2024-01-01"))); // Tuesday → returns "Tuesday"
// console.log(sunnySunday(new Date("2024-01-03"))); // Wednesday → returns "Wednesday"
// console.log(sunnySunday(new Date("2024-01-06"))); // Saturday → "Saturday"
// console.log(sunnySunday(new Date("2024-01-07"))); // Sunday → returns "Saturday"
// console.log(sunnySunday(new Date("0001-01-01"))); // Monday → "Monday"
// console.log(sunnySunday("not a date"));   // NaN
// console.log(sunnySunday(new Date("xxx"))); // NaN
