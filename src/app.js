import CrewManagement from './components/crewManagement.js';

export default class Teammatching {
  constructor() {
    this.$target = '#app';
    this.initialize();
  }

  initialize() {
    new CrewManagement(this.$target);
  }
}

new Teammatching();
