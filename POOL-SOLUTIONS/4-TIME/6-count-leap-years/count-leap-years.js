// function countLeapYears(date)
// {
//     let year = date.getFullYear();
//     let count = 0;
//     if ( date.getMonth() < 1 || (date.getMonth() === 1 && date.getDate() < 29))
//         year--
//     // for (let i = 1; i <= year; i++)
//     // {
//     //     if (i % 4 == 0 && i % 100 !== 0) || i % 400 == 0))
//     //         count++;
//     // }
//     // if you need to avoid a loop you can calculat it using 
//     count = Math.floor(year/4) - Math.floor(year/100) + Math.floor(year/400)
//     return count;
// }


function countLeapYears(date) {
  let year = date.getFullYear()

  // If we're before Feb 29, don't count current year
  if (
    date.getMonth() < 1 || 
    (date.getMonth() === 1 && date.getDate() < 29)
  ) {
    year--
  }

  return Math.floor(year / 4)
       - Math.floor(year / 100)
       + Math.floor(year / 400)
}


let date = new Date("2026-01-01");
console.log(countLeapYears(date));
date = new Date('1664-08-09');
console.log(countLeapYears(date));