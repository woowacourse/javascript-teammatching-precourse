import $ from '../common/selector.js';
import { templates } from '../../constants/templates/crew.js';

export const renderRadioButtons = () => {
  $('main').innerHTML = templates.common;
  $('#section_1').innerHTML = templates.header;
};
