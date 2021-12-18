import { $ } from '../utils/dom.js';
import { createCourseSelectSection } from './templates/index.js';

import { SELECTOR } from '../constants.js';

class CrewManageTabView {
  render() {
    $(`#${SELECTOR.tabContentMain}`).innerHTML = createCourseSelectSection();
  }
}

export default CrewManageTabView;
