export default {
  init(element) {
    this.element = element;
    return this;
  },
  on(event, handler) {
    this.element.addEventListener(event, handler);
    return this;
  },
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.element.dispatchEvent(evt);
    return this;
  },
  child(selector) {
    return this.element.querySelector(selector);
  },
  children(selector) {
    return this.element.querySelectorAll(selector);
  },
};
