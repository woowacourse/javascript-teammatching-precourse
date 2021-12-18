export function getLocalStorage(key) {
  return localStorage.getItem(key);
}

export function getLocalStorageArray(key) {
  let array = [];

  if (getLocalStorage(key)) {
    array = JSON.parse(getLocalStorage(key));
  }

  return array;
}

export function setLocalStorage(key, value) {
  return localStorage.setItem(key, value);
}
