export const getLocalStorage = (name) => {
  const storedContent = localStorage.getItem(name);
  return JSON.parse(storedContent);
};

export const setLocalStorage = (storageName, storageValue) => {
  localStorage.setItem(storageName, JSON.stringify(storageValue));
};
