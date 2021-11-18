import getInteger from './getInteger.js'

/**
 * @param {Number} value
 * @returns the representation of a number greater than 10 in hexadecimal or the value entered if it isn't in the range
 */
const encodeHexadecimal = value => {
  if (isNaN(value)) throw new TypeError('Argument must be a number')
  const strValue = getInteger(value)
  if (Number(strValue) <= 15) {
    if (strValue === '10') return 'A'
    else if (strValue === '11') return 'B'
    else if (strValue === '12') return 'C'
    else if (strValue === '13') return 'D'
    else if (strValue === '14') return 'E'
    else if (strValue === '15') return 'F'
    else return strValue
  } else {
    return `(${strValue})`
  }
}

export default encodeHexadecimal
