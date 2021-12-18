import initialState from "./initialState.js";

class Store {
  constructor(initialState) {
    if (localStorage.getItem("state") === null) {
      localStorage.setItem("state", JSON.stringify({ ...initialState }));
    }
    this.state = JSON.parse(localStorage.getItem("state"));
  }

  subscribe(fn) {
    this.currentFunction = fn;
  }

  getState() {
    return JSON.parse(localStorage.getItem("state"));
  }

  setState(key, value) {
    this.state = {
      ...this.state,
      [key]: value,
    };
    this.notify();
  }

  notify() {
    localStorage.setItem("state", JSON.stringify(this.state));
    this.currentFunction(this.state);
  }
}

const store = new Store(initialState);
export default store;

export function setState(key, value) {
  store.setState(key, value);
}

export function getState() {
  return store.getState();
}
