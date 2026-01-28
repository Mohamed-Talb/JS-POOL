function matchCron(cron, date)
{
	if (typeof cron !== 'string' || !(date instanceof Date))
		return NaN;

	const cronParts = cron.trim().split(/\s+/);
	if (cronParts.length !== 5)
		return NaN;
	const [Minute, Hour, MonthDay, Month, WeekDay] = cronParts;
	let jsDay = date.getDay();
	let cronDay = jsDay === 0 ? 7 : jsDay; // make days from 1(Monday) -> 7(sunday)
    let MinuteValid = (Minute === '*') || (Number(Minute) === date.getMinutes());
    let HourValid = (Hour === '*') || (Number(Hour) === date.getHours());
    let MonthDayValid = (MonthDay === '*') || (Number(MonthDay) === date.getDate());
    let MonthValid = (Month === '*') || (Number(Month) === (date.getMonth()+1));
    let weekDayValid = (WeekDay === '*') || (Number(WeekDay) === cronDay);

	return MinuteValid && HourValid && MonthValid && MonthDayValid && weekDayValid;
}

// // matchCron tests

// // minute only
// console.log(matchCron("9 * * * *", new Date("2026-05-10 12:09:00"))); // true  (minute = 9)
// console.log(matchCron("9 * * * *", new Date("2026-05-10 12:08:00"))); // false (minute mismatch)
// console.log(matchCron("9 * * * *", new Date("invalid")));              // false (invalid date → fail)


// // hour match
// console.log(matchCron("* 15 * * *", new Date("2026-05-10 15:22:00"))); // true  (hour = 15)
// console.log(matchCron("* 15 * * *", new Date("2026-05-10 14:22:00"))); // false (hour mismatch)
// console.log(matchCron("* 15 * * *", new Date("invalid")));             // false (invalid date → fail)


// // day of month
// console.log(matchCron("* * 30 * *", new Date("2026-06-30 10:00:00"))); // true  (day 30)
// console.log(matchCron("* * 30 * *", new Date("2026-06-29 10:00:00"))); // false (day mismatch)
// console.log(matchCron("* * 30 * *", new Date("invalid")));             // false (invalid date → fail)


// // month match
// console.log(matchCron("* * * 2 *", new Date("2026-02-10 12:00:00")));  // true  (February)
// console.log(matchCron("* * * 2 *", new Date("2026-03-10 12:00:00")));  // false (month mismatch)
// console.log(matchCron("* * * 2 *", new Date("invalid")));              // false (invalid date → fail)


// // day of week (1 = Monday ... 7 = Sunday)
// console.log(matchCron("* * * * 7", new Date("2026-01-18")));           // true  (Sunday)
// console.log(matchCron("* * * * 1", new Date("2026-01-19")));           // true  (Monday)
// console.log(matchCron("* * * * 1", new Date("2026-01-20")));           // false (Tuesday mismatch)


// // full pattern
// console.log(matchCron("30 14 10 6 3", new Date("2026-06-10 14:30:00"))); // true  (matches all)
// console.log(matchCron("30 14 10 6 3", new Date("2026-06-10 15:30:00"))); // false (hour mismatch)
// console.log(matchCron("30 14 10 6 3", new Date("invalid")));             // false (invalid date → fail)
