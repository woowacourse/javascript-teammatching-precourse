import { EMPTY } from '../constants/index.js';

/**
 * 값이 null인지 검사합니다.
 *
 * @param {string|number} value
 * @returns {boolean}
 */
export const isNull = value => value === null || value === undefined;

/**
 * 값이 비어있는지 검사합니다.
 *
 * @param {Array|number|string} value
 * @returns {boolean}
 */
export const isEmpty = value => {
  if (isNull(value)) return true;
  if (value instanceof Array) return value.length < 1 || value === [];
  if (typeof value === 'number') return value === 0;
  return value === EMPTY;
};

/**
 * 첫 번째 인자와 두 번째 인자의 값이 같은지 검사합니다.
 *
 * @param {string|number} value
 * @param {string|number} target
 * @returns {boolean}
 */
export const isEquals = (value, target) => value === target;

/**
 * 배열에 값이 포함 되어 있는지 검사합니다.
 *
 * @param {number|string} value
 * @param {any[]} items
 * @returns {boolean}
 */
export const isIncludes = (value, items) => items.includes(value);

/**
 * 중복 여부를 검사합니다.
 *
 * @param {string} value
 * @param {any[]} items
 * @returns {boolean}
 */
export const isDuplicate = (value, items) => !isNull(items.find(({ name }) => name === value));
