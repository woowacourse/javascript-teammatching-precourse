import View from './view/index.js';
import Model from './model/index.js';
import Controller from './controller/index.js';

const teamMatching = () => {
  const view = new View();
  const model = new Model();
  const controller = new Controller(view, model);
  controller.addEventListeners();
};

teamMatching();
