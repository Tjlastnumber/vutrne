export function isNumber (v) {
  return typeof v === 'number'
}

export function isNone (o) {
  return o === undefined || o === null || typeof o === 'undefined'
}

export function isUndef (v) {
  return v === undefined
}

export function isObj (o) {
  return o !== null && typeof o === 'object'
}

export function isString (v) {
  return typeof v === 'string'
}

/**
 * @param {String} v
 **/
export function emptyString (v) {
  return isNumber(v) || isNone(v) || v.trim() === ''
}
