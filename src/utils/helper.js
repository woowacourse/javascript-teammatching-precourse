// querySelector wrapper
export function $(selector, scope) {
  return (scope || document).querySelector(selector);
}

// querySelectorAll wrapper
export function $all(selector, scope) {
  return (scope || document).querySelectorAll(selector);
}
