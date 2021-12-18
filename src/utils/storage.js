export const getStorage = () => {
    return JSON.parse(localStorage.matcher);
};
  
export const updateStorage = (instance) => {
    localStorage.matcher = JSON.stringify(instance);
};

export const loadStorage = (instance) => {
    const parsed = getStorage();
    instance.crews = parsed.crews;
}
export const checkStorage = () => {
    if (localStorage.matcher === undefined) {
      return false;
    } else {
      return true;
    }
};
  