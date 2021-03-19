export * from './nextTickScheduler'
export * from './traverse'

export function isObject(obj: any) {
  return typeof obj === 'object' && obj !== null
}

export const isMap = (val: any): val is Map<any, any> =>
  val.toString() === '[object Map]'

export const isSet = (val: any): val is Set<any> =>
  val.toString() === '[object Set]'
