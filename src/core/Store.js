/* eslint-disable class-methods-use-this */
export default class Store {
  constructor(value) {
    this.value = value;
    this.components = new Set();
    this.init();
  }

  init() {}

  notify() {
    this.components.forEach((component) => component.render());
  }

  add(componenet) {
    this.components.add(componenet);
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    this.value = { ...this.value, ...newValue };
    this.notify();
  }
}
