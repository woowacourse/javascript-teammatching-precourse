import $ from '../common/selector.js';
import { crewTemplates } from '../../constants/templates/crew.js';

export const renderRadioButtons = () => {
  const { common, header } = crewTemplates;

  $('main').innerHTML = common;
  $('#section_1').innerHTML = header;
};
