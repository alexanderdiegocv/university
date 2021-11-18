import firstDigit from '../firstDigit.js'

/**
 * @param {Number} base
 * @param {String} strInteger
 */
const integerAnyToDecimal = (base, strInteger) => {
  const digit = firstDigit(strInteger)
  if (strInteger.length === 1) return digit.asNumber
  const positionValue = base ** (strInteger.length - 1)
  return integerAnyToDecimal(base, strInteger.slice(digit.length)) + digit.asNumber * positionValue
}

export default integerAnyToDecimal
