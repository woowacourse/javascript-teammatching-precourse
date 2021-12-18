import CrewController from './Controller/CrewController.js';
import TapController from './Controller/TapContorller.js';
import CrewTapView from './View/CrewTapView.js';
import TapView from './View/TapView.js';
import TeamTapView from './View/TeamTapView.js';

new TapView().render();
const tapController = new TapController();
tapController.bindEventListener();
