// querySelector wrapper
export function $(selector, scope) {
  return (scope || document).querySelector(selector);
}

// querySelectorAll wrapper
export function $all(selector, scope) {
  return (scope || document).querySelectorAll(selector);
}

export const cloneObject = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;

  const clone = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    clone[key] =
      typeof obj[key] === 'object' && obj[key] !== null
        ? cloneObject(obj[key])
        : (clone[key] = obj[key]);
  });

  return clone;
};
