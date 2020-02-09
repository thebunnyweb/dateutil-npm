import dateUtil from './'

// Date Conversions
console.log(dateUtil.evaluate("2019-9-15", { separator: '-', today: 'false', format: "dd-MMMM-YYYY"})) // 15-September-2019
console.log(dateUtil.evaluate("2019-9-29", { separator: '--', today: 'false', format: "dd-MM-YYYY"})) // 29--Sep--2019
console.log(dateUtil.evaluate("MM-YY-DD", { separator: '-'})) // Feb-20-Sun
console.log(dateUtil.evaluate("DDDD-MM-YYYY", { separator: '/'})) // Sunday/Feb/2020


// Logging
dateUtil.dateLog("Logging with timestamp") // Sun Feb 09 2020 22:40:58 GMT+0530 (IST) : Logging with timestamp


// Date Comparers
console.log(dateUtil.comparer("2019-9-15", "weeks")) 
// 21
console.log(dateUtil.comparer("2019-9-15", "days")) 
// 147
console.log(dateUtil.comparer("2019-9-15", "hours"))
// 3527
console.log(dateUtil.comparer("2019-9-15", "minutes"))
// 211650
console.log(dateUtil.comparer("2019-9-15", "absolute"))
// 4 months ago