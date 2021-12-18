export default class Component {
  $target;
  $props;
  $state;
  $children;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.$children = {};
    this.setup();
    this.setEvent();
    this.render();
  }

  $(selector) {
    return this.$target.querySelector(selector);
  }

  $$(selector) {
    return this.$target.querySelectorAll(selector);
  }

  setup() {}

  template() {
    return '';
  }

  applyProps() {}

  mounted() {}

  render() {
    this.applyProps();
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {}

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = target => children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }

  setProps(newProps, isRender = true) {
    this.$props = newProps;

    if (isRender) {
      this.render();
    }
  }
}
