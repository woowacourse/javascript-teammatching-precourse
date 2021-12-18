export default class TeamManage {
  constructor($target) {
    this.$target = $target;
    this.$state;
    this.setup();
    this.render();
  }

  setup() {}

  setEvent() {}

  template() {}

  render() {
    this.$target.innerHTML += this.template();
    this.setEvent();
  }
}
