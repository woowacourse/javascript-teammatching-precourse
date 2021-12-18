import { DOM } from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';

class CrewManageController {
  constructor({ view, inputsModel }) {
    this.$view = view;
    this.$inputsModel = inputsModel;
    this.bindSelectEventHandler();
  }

  bindSelectEventHandler() {
    $(DOM.COURSE_SELECT_SECTION).addEventListener('input', this.onInputCourseSelect.bind(this));
  }

  onInputCourseSelect(e) {
    const {
      target: { name, value },
    } = e;
    this.mutateModelWithCourseInput(name, value);
  }

  mutateModelWithCourseInput(name, value) {
    this.$inputsModel.setInputByNameAttribute(name, value);
  }
}
export default CrewManageController;
