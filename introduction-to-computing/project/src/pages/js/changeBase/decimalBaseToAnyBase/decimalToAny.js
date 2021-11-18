import getInteger from '../getInteger.js'
import getDecimals from '../getDecimals.js'
import integerDecimalToAny from './integerDecimalToAny.js'
import decimalsDecimalToAny from './decimalsDecimalToAny.js'

// Convert a number in decimal base to another base
/**
 * @param {Number} base
 * @param {String} strNumber
 * @returns
 */
const decimalToAny = (base, strNumber) => {
  const integerPart = integerDecimalToAny(base, getInteger(strNumber))
  const decimalPart = `0.${decimalsDecimalToAny(base, getDecimals(strNumber))}`
  return {
    base,
    number: `${integerPart}${decimalPart === '0.0' ? '' : `${decimalPart.slice(1)}`}`,
    integer: integerPart,
    decimal: decimalPart
  }
}

export default decimalToAny
