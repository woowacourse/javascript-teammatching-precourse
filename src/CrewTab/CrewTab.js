import { customCreateElement } from '../utils/createElements.js';
import { ID_CONTAINER, TEMPLATE_BASE } from './constants.js';

const CrewTab = () => {
  const Container = customCreateElement({ tag: 'section', id: ID_CONTAINER });
  Container.innerHTML = TEMPLATE_BASE;
  return Container;
};

export default CrewTab;
