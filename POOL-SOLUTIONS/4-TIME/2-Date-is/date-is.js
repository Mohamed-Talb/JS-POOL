function isValid(date)
{
  if (date instanceof Date) 
    return !isNaN(date.getTime())
  if (typeof date === 'number')
    return !isNaN(new Date(date).getTime())
  return false
}


function isAfter(date, cmpDate)
{
    return isValid(date) && isValid(cmpDate) && date > cmpDate;
}
function isBefore(date, cmpDate)
{
    return isValid(date) && isValid(cmpDate) && date < cmpDate;
}
function isFuture(date)
{
    const now = new Date();
    return isValid(date) && date > now; 
}
function isPast(date)
{
    const now = new Date();
    return isValid(date) && date < now; 
}

// console.log(isValid(Date.now()));