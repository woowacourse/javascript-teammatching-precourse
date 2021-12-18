import $ from './selector.js';
import { templates } from '../../constants/templates/tabs.js';

export const renderTabs = () => {
  $('#app').insertAdjacentHTML('afterbegin', templates.tabs);
};
