import { customCreateElement } from '../utils/createElements.js';
import { getChildDom } from '../utils/handleDOM.js';
import {
  ID_CONTAINER,
  ID_CREW_TAB_BUTTON,
  ID_TEAM_TAB_BUTTON,
  NAV_TEMPLATE,
} from './constants.js';
import { handleTabChange } from './eventHandler.js';

const Header = ({ renderTab }) => {
  const Container = customCreateElement({ tag: 'section', id: ID_CONTAINER });
  Container.innerHTML = NAV_TEMPLATE;

  const Buttons = [
    getChildDom(Container, `#${ID_CREW_TAB_BUTTON}`),
    getChildDom(Container, `#${ID_TEAM_TAB_BUTTON}`),
  ];

  Buttons.forEach((button) => {
    button.addEventListener('click', (e) => handleTabChange(e, renderTab));
  });

  return Container;
};

export default Header;
