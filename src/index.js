import control from './control/control.js';
import initRender from './views/initRender.js';

export default function teamMatching() {
  this.init = () => {
    initRender();
    control();
  };
}
const people = new teamMatching();
people.init();
