const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday']

function format(date, format) 
{
  function formatter(token) 
  {
    const hours = date.getHours()

    switch (token) 
    {
      case 'yyyy': return String(date.getFullYear())
      case 'y': return String(date.getFullYear()).slice(-2)

      case 'M': return date.getMonth() + 1
      case 'MM': return String(date.getMonth() + 1).padStart(2, '0')
      case 'MMM': return monthsShort[date.getMonth()]
      case 'MMMM': return monthsLong[date.getMonth()]

      case 'd': return date.getDate()
      case 'dd': return String(date.getDate()).padStart(2, '0')

      case 'E': return daysShort[date.getDay()]
      case 'EEEE': return daysLong[date.getDay()]

      case 'H': return hours
      case 'HH': return String(hours).padStart(2, '0')

      case 'h': return hours % 12 || 12
      case 'hh': return String(hours % 12 || 12).padStart(2, '0')

      case 'm': return date.getMinutes()
      case 'mm': return String(date.getMinutes()).padStart(2, '0')

      case 's': return date.getSeconds()
      case 'ss': return String(date.getSeconds()).padStart(2, '0')

      case 'a': return hours < 12 ? 'AM' : 'PM'
      case 'G': return date.getFullYear() >= 0 ? 'AD' : 'BC'
      case 'GGGG': return date.getFullYear() >= 0 ? 'Anno Domini' : 'Before Christ'
    }
  }
  return format.replace(/yyyy|MMMM|EEEE|GGGG|MMM|HH|hh|mm|dd|ss|y|M|d|E|h|H|m|s|a|G/g,formatter)
}


const d = new Date('7 January 1985, 3:08:19')
console.log(format(d, 'HH(mm)ss [dd] <MMM>')) 