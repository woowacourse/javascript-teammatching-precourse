import Render from '../view/Render.js';

export default class Controller {
  constructor() {
    this.render = new Render();
  }

  mainTemplateRender = () => {
    this.render.mainTemplate();
  };

  main = () => {
    this.mainTemplateRender();
  };
}
