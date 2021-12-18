import Controller from './controllers/controller.js';
import Model from './model/Model.js';
import App from './view/app.js';

window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const model = new Model();
  const view = new App(app);
  const controller = new Controller(view, model);
});
