import dateUtil from './'

console.log(dateUtil.evaluate("2019-9-15", { separator: '-', today: 'false', format: "dd-MMMM-YYYY"}))
console.log(dateUtil.evaluate("2019-9-29", { separator: '--', today: 'false', format: "dd-MM-YYYY"}))
console.log(dateUtil.evaluate("MM-YY-DD", { separator: '-'}))
console.log(dateUtil.evaluate("DDDD-MM-YYYY", { separator: '/'}))