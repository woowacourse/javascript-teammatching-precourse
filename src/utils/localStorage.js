export function getLocalStorageItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function setLocalStorageCrewList(key,newCrew) {
  const crewList = getLocalStorageItem(key);
  if (crewList === null) setLocalStorageItem(key, [newCrew]);
  else setLocalStorageItem(key, [...crewList, newCrew]);
}
