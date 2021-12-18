import createMainPage from './components/main-page.js';
import Controller from './Controller/controller.js';
import addEvents from './event.js';

const controller = new Controller();
createMainPage();
addEvents(controller);
