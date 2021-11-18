/**
 * @param {String} strNumber
 * @returns
 */
export const isHex = strNumber => {
  return strNumber.search(/^[0-9A-Fa-f]+(\.[0-9A-Fa-f]+)?$/) !== -1
}

/**
 * @param {String} strNumber
 * @returns
 */
export const isNumber = strNumber => {
  return strNumber.search(/^[0-9]+(\.[0-9]+)?$/) !== -1
}

/**
 * @param {String} strNumber
 * @returns
 */
export const isInteger = strNumber => {
  return strNumber.search(/^[0-9]+$/) !== -1
}
