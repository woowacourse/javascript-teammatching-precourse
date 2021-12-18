export default class State {
  constructor(value) {
    this._value = value;
    this._components = new Set();
  }

  _notify() {
    this._components.forEach((component) => component.render());
  }

  add(component) {
    this._components.add(component);
  }

  get value() {
    return this._value;
  }

  set value(data) {
    this._value = data;
    this._notify();
  }
}
