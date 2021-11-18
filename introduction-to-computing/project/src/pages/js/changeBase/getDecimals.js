// Another way to use numbers in Javascript because in this the numbers are implemented are really bad
import { isHex } from './validateNumber.js'

/**
 * @param {String} number
 */
const getDecimals = number => {
  const strNumber = number.toString()
  if (!isHex(strNumber)) throw new TypeError('Argument most be a number')
  let decimalPart = 0
  const floatingPoint = strNumber.indexOf('.')
  if (floatingPoint !== -1) {
    decimalPart = parseFloat(`0.${strNumber.slice(floatingPoint + 1)}`)
  }
  return decimalPart.toString()
}

export default getDecimals
