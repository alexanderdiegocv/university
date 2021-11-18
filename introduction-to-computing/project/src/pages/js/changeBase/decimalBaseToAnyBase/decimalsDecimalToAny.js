import getInteger from '../getInteger.js'
import getDecimals from '../getDecimals.js'
import encodeHexadecimal from '../encodeHexadecimal.js'

/**
 * @param {Number} base
 * @param {Number} decimalPart
 * @param {Number} precision
 * @returns {String}
 */
const decimalsDecimalToAny = (base, decimalPart, precision = 0) => {
  if (precision === 100) return ''
  const numberXdecimals = decimalPart * base
  if (numberXdecimals === 0) return 0
  const digitToLeave = encodeHexadecimal(getInteger(numberXdecimals))
  const remainder = getDecimals(numberXdecimals.toString()) - getDecimals(digitToLeave)
  return `${digitToLeave}${decimalsDecimalToAny(base, remainder, ++precision)}`
}

export default decimalsDecimalToAny
