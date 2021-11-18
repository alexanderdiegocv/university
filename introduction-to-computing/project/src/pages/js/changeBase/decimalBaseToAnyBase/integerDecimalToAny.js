import getInteger from '../getInteger.js'
import getRemainder from '../getRemainder.js'
import encodeHexadecimal from '../encodeHexadecimal.js'
/**
 * @param {Number} base
 * @param {Number} integer
 * @returns {String}
 */
const integerDecimalToAny = (base, integer) => {
  if (integer < base) return encodeHexadecimal(integer)
  const quotient = getInteger(integer / base)
  const remainder = getRemainder(integer, base)
  return `${integerDecimalToAny(base, quotient)}${remainder}`
}

export default integerDecimalToAny
