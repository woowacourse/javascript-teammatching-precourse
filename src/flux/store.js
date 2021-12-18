import Singleton from '../abstracts/singleton.js';
import { LOCAL_STORAGE_KEY } from '../constants/index.js';

class Store extends Singleton {
  constructor(rootReducer, initialState = {}) {
    super();
    this.state = initialState;
    this.reducer = rootReducer;
    this.subscribers = [];
    this.unsubscribers = [];
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.subscribers.push(listener);
    const unsubscribe = () => {
      this.subscribers = this.subscribers.filter((e) => e !== listener);
    };
    return unsubscribe;
  }

  replaceReducer(nextReducer) {
    this.reducer = nextReducer;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    // console.log('state after reduce:', this.state);
    // this.saveDataToLocalStorage(this.state);
    this.subscribers.forEach((listener) => listener.shouldNotify() && listener.notify());
  }

  saveDataToLocalStorage(state) {
    const json = JSON.stringify(state);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, json);
  }
}

export default Store;
