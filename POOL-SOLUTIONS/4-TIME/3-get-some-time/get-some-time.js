function formatDate(date)
{
    const sDate = `${date.getDate()}`;
    const sMonth = `${date.getMonth()+1}`;
    const sYear = `${date.getFullYear()}`;
    return  sDate.padStart(2, '0') + '-' + sMonth.padStart(2, '0') + '-' + sYear;
}

function firstDayWeek(week, year) 
{
    const baseDate = new Date(`${year}-01-01`);
    const firstYearDay = baseDate.getDay();
    const mondeyIndex = firstYearDay === 0 ? 7 : firstYearDay;
    const firstMonday = new Date(baseDate);
    firstMonday.setDate(baseDate.getDate() - (mondeyIndex-1));
    firstMonday.setDate(firstMonday.getDate() + (week - 1) * 7);
    if (firstMonday < baseDate)
        return formatDate(baseDate);
    return formatDate(firstMonday);
}


console.log(firstDayWeek(1, "0001"));