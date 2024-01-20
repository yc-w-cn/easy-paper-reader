/**
 * 确保提供的值是一个数组。如果该值已经是数组，则直接返回。如果该值是真值但不是数组，
 * 则将其封装在新的数组中返回。如果该值是假值或未定义，则返回空数组。
 *
 * @param {any} target - 要确保为数组的值。
 * @returns {Array} 返回作为数组的输入值或包含输入值的新数组。
 *
 * @example
 * // 返回: [42]
 * const result = ensureArray(42);
 *
 * @example
 * // 返回: [1, 2, 3]
 * const result = ensureArray([1, 2, 3]);
 *
 * @example
 * // 返回: [true]
 * const result = ensureArray(true);
 *
 * @example
 * // 返回: []
 * const result = ensureArray(null);
 */
export function ensureArray(target: any) {
  if (Array.isArray(target)) {
    return target
  }
  if (target) {
    return [target]
  }
  return []
}

/**
 * Move an array item to a different position. 
 * @return Returns a new array with the item moved to the new position.
 */
export function arrayMove<T>(array: T[], from: number, to: number): T[] {
  const newArray = [...array]
  const [item] = newArray.splice(from, 1)
  newArray.splice(to, 0, item)
  return newArray
}
