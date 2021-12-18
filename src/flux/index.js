import Store from './store.js';

const createStore = (reducer, preloadedState = {}) => {
  const store = new Store(reducer, preloadedState);
  return store;
};

export default createStore;
