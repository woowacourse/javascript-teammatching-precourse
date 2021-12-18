import { EMPTY } from '../constants/index.js';
import { $showAlert } from './dom.js';

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

/**
 * 양의 정수인지 검사합니다.
 * 1. 값이 0일 수 없습니다.
 * 2. 값이 음수일 수 없습니다.
 * 3. 값이 소수일 수 없습니다.
 *
 * @param {number|string} target
 * @returns {number | ''}
 */
export const isPositiveInteger = (target, description) => {
  const parsed = +target;
  if (isEquals(parsed, 0)) return $showAlert('zeroError', description);
  if (parsed < 0) return $showAlert('negativeError', description);
  if (!isEquals(Number.isInteger(parsed), true)) return $showAlert('decimalError', description);
  return parsed;
};

/**
 * 숫자형에 대한 유효성을 검사합니다.
 *
 * @param {number} value
 * @param {string} placeholder
 * @returns {number}
 */
const numbersValidate = (value, placeholder) => {
  const parsed = isPositiveInteger(value, placeholder);
  if (isEmpty(parsed)) return EMPTY;
  return parsed;
};

/**
 * 모든 입력에 대한 유효성을 검사합니다.
 *
 * @param {object} param
 * @param {any[]} items
 * @returns {boolean}
 */
export const isValidate = ({ type, placeholder, value }, items = []) => {
  if (type === 'number') return numbersValidate(value, placeholder);
  const trimedValue = value.trim();
  if (trimedValue.length >= 6) return $showAlert('lengthOverError', placeholder);
  if (isEmpty(trimedValue)) return $showAlert('notDefined', placeholder);
  if (isDuplicate(value, items)) return $showAlert('dupError', `${placeholder}: [${value}]`);
  return value;
};
