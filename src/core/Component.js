import { $all } from '../utils/helper.js';

export default class Component {
  constructor($target, props = {}) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  template() {
    return '';
  }

  render() {
    this.beforeMounted();
    this.mountComponents();
    this.afterMounted();
  }

  beforeMounted() {}

  mountComponents() {
    this.$target.innerHTML = this.template();
  }

  afterMounted() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setEvent() {}

  addEvent(type, selector, callback) {
    const children = [...$all(selector, this.$target)];
    const isChildren = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(type, (e) => {
      if (!isChildren(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }
}
