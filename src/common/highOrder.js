/**
 * 평가식이 falsy할 때 실행
 *
 * @param {*} predicate
 * @param {*} callback
 */
export const unless = (predicate, callback) => {
  if (!predicate) callback();
};
/**
 * 평가식이 truthy할 때 실행
 *
 * @param {*} predicate
 * @param {*} callback
 */
export const inCaseOf = (predicate, callback) => {
  if (predicate) callback();
};

export const curry = callback => {
  if (typeof callback !== 'function') throw new Error('No Function provided');

  return function curreid(...args) {
    if (args.length >= callback.length) return callback(...args);

    return (...params) => curreid(...args.concat([].slice.call(params)));
  };
};
