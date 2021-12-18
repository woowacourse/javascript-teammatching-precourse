const database = {
  init: (key, value = []) => {
    database.load(key) || localStorage.setItem(key, JSON.stringify(value));
  },

  load: key => {
    return JSON.parse(localStorage.getItem(key));
  },
};

export default database;
