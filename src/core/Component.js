export default class Component {
  $target;
  $props;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.$state = null;
    this.setup();
    this.render();
  }

  setup() {}

  template() {
    return ``;
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mount();
  }

  mount() {}

  setEvent() {}
}
