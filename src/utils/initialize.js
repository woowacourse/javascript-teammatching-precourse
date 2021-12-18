import attachMainEvent from '../dom/attachMainEvent.js';
import attachMainMenuEvent from '../dom/attachMainMenuEvent.js';
import printHeader from '../dom/printHeader.js';
import printMain from '../dom/printMain.js';

const initialize = () => {
  printHeader();
  printMain();
  attachMainMenuEvent();
  attachMainEvent();
};

export default initialize;
