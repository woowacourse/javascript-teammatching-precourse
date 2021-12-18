import initRender from './views/initRender.js';

export default function teamMatching() {
  this.init = () => {
    initRender();
  };
}
const people = new teamMatching();
people.init();
