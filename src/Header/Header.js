import { customCreateElement } from '../utils/createElements.js';
import { ID_CONTAINER, NAV_TEMPLATE } from './constants.js';

const Header = () => {
  const Container = customCreateElement({ tag: 'section', id: ID_CONTAINER });
  Container.innerHTML = NAV_TEMPLATE;

  return Container;
};

export default Header;
