function addWeek(date)
{
      const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
                    "secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday","secondSunday",]
    let epoch = new Date("0001-01-01T00:00:00Z");
    const diffTime = date - epoch;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return days[diffDays % 14];
    
}

function timeTravel(dateObj)
{
   dateObj.date.setHours(dateObj.hour); 
   dateObj.date.setMinutes(dateObj.minute); 
   dateObj.date.setSeconds(dateObj.second);
   return dateObj.date;
}

// console.log(addWeek(new Date('0001-01-01')));
// let travelObj = 
//         { date: new Date('2020-05-29 23:25:22'),
//         hour: 21, minute: 22, second: 22};

// console.log(timeTravel(travelObj).toString());