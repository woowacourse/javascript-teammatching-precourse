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

  mount() {}

  template() {
    return ``;
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mount();
  }

  setEvent() {}
}
