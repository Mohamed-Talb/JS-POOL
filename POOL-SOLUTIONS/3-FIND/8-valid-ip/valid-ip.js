function findIP(str) {
  const ip ='(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}';
  const port ='(6553[0-5]|655[0-2]\\d|65[0-4]\\d{2}|6[0-4]\\d{3}|[1-5]?\\d{1,4})';
  const regex = new RegExp(`(?<!\\d)(?:${ip}:${port}|${ip}(?!:))(?!\\d)`,'g');
  return str.match(regex) || [];
}

// console.log(findIP("192.168.1.1 and 8.8.8.8"));