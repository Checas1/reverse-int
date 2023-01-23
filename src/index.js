module.exports = function reverse (n) {
  n = n >= 0? n : n * (-1)
  let revers = n + ''
  let smth = revers.split('')
  let rever = smth.reverse() 
  return Number(rever.join(''))
}
