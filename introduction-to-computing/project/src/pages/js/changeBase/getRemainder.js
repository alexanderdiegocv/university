import encodeHexadecimal from './encodeHexadecimal.js'

/**
 * @param {Number} dividend
 * @param {Number} divisor
 * @returns {String}
 */
const getRemainder = (dividend, divisor) => {
  if (isNaN(dividend) || isNaN(divisor)) throw new TypeError('Arguments must be numbers')
  return encodeHexadecimal(dividend % divisor)
}

export default getRemainder
