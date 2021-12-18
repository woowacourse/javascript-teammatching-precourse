import { app } from './controller/controller.js';
import { handlers } from './controller/handlers.js';

const render = () => {
  app();
  handlers();
};

render();
