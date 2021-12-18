/* eslint-disable class-methods-use-this */
export default class Component {
  constructor($element, props) {
    this.$element = $element;
    this.state = {};
    this.props = props;

    this.init();
    this.render();
    this.setEvent();
  }

  init() {}

  render() {
    this.$element.innerHTML = this.template();
    this.mount();
  }

  template() {
    return '';
  }

  mount() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setEvent() {}

  addEvent(eventType, selector, callback) {
    const children = [...this.$element.querySelectorAll(selector)];

    const isTarget = (target) => children.includes(target) || target.closest(selector);

    this.$element.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);

      return true;
    });
  }
}
