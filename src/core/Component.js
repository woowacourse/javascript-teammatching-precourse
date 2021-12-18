import { $ } from '../utils/element-tools.js';

export default class Component {
  constructor(target, props) {
    this.$target = target;
    this._props = props;
    this._state = {};

    this.init();
    this.bindEvents();
    this.render();
  }

  init() {}

  htmlTemplate() {
    return '';
  }

  domTemplate() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.htmlTemplate();
    this.$target.append(this.domTemplate());

    this.mounted();
  }

  mounted() {}

  bindEvents() {}

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }

  addMount(componentName, ComponentClass, props) {
    new ComponentClass($(`.component[data-component=${componentName}]`), props);
  }
}
