import Header from './components/header.js';

export default class Teammatching {
  constructor() {
    this.$target = '#app';
    this.initialize();
  }

  initialize() {
    new Header(this.$target);
  }
}

new Teammatching();
