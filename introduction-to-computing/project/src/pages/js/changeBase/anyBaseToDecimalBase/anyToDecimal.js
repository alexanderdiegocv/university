import getInteger from '../getInteger.js'
import getDecimals from '../getDecimals.js'
import integerAnyBaseToDecimal from './integerAnyToDecimal.js'
import decimalsAnyToDecimal from './decimalsAnyToDecimal.js'

// Convert a number in any base to decimal base

const anyToDecimal = (base, strNumber) => {
  const integerPart = integerAnyBaseToDecimal(base, getInteger(strNumber))
  const decimalPart = decimalsAnyToDecimal(base, getDecimals(strNumber).slice(2))
  return {
    base: 10,
    number: integerPart + decimalPart,
    integer: integerPart,
    decimals: decimalPart
  }
}

export default anyToDecimal
