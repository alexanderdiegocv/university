import decodeDigitHexadecimal from './decodeDigitHexadecimal.js'
import encodeHexadecimal from './encodeHexadecimal.js'

/**
 * @param {String} strNumber
 */
const firstDigit = strNumber => {
  const search = strNumber.match(/[0-9A-F]|(\(\d+\))/)
  if (!search) return { asNumber: 0, asText: '0', length: 1 }
  return {
    asNumber: decodeDigitHexadecimal(search[0]),
    asText: encodeHexadecimal(search[0]),
    length: search[0].length
  }
}

export default firstDigit
