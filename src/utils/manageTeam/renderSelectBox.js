import $ from '../common/selector.js';
import { teamTemplates } from '../../constants/templates/team.js';

export const renderSelectBox = () => {
  const { common, header } = teamTemplates;

  $('main').innerHTML = common;
  $('#section_1').innerHTML = header;
};
