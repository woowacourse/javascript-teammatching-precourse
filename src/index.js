import TapController from './Controller/TapContorller.js';
import TapView from './View/TapView.js';

new TapView().render();
const tapController = new TapController();
tapController.bindEventListener();
