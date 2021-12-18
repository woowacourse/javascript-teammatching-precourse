export const saveCrewToLocalStorage = (key, target) => {
  let targets = getCrewsFromLocalStorage(key);

  targets.push(target);
  localStorage.setItem(key, JSON.stringify(targets));
};

export const getCrewsFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const saveCrewsToLocalStorage = (key, targets) => {
  localStorage.setItem(key, JSON.stringify(targets));
};
