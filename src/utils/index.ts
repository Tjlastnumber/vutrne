export const isArray = Array.isArray

export function isNumber (v: any) {
  return typeof v === 'number'
}

export function isNone (o: any) {
  return o === undefined || o === null || typeof o === 'undefined'
}

export function isUndef (v: any) {
  return v === undefined
}

export function isObj (o: object): boolean {
  return o !== null && typeof o === 'object'
}

const _toString = Object.prototype.toString

export function isString (v: object) {
  return typeof v === 'string'
}

export function isPlainObject(obj: any): boolean {
  return _toString.call(obj) === '[object Object]'
}

/**
 * @param {String} v
 **/
export function emptyString (v: string): boolean {
  return isNumber(v) || isNone(v) || v.trim() === ''
}

export function toNumber(v: string): number | string {
  const n = parseFloat(v)
  return isNaN(n) ? v : n
}

export function toString(v: any): string {
  return v == null
  ? '' 
  : isArray(v) || (isPlainObject(v) && v.toString === _toString)
  ? JSON.stringify(v, null, 2)
  : String(v)
}
