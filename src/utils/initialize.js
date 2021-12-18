import attachMainMenuEvent from '../dom/attachMainMenuEvent.js';
import printHeader from '../dom/printHeader.js';
import printMain from '../dom/printMain.js';

const initialize = () => {
  printHeader();
  printMain();
  attachMainMenuEvent();
};

export default initialize;
