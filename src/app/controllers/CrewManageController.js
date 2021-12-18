import { COURSE, DOM, PLAIN_TEXT } from '../../lib/constants.js';
import {
  $,
  isCourseBackend,
  isCourseFrontend,
  isCourseSectionMounted,
  isDeleteButtonClick,
  isValidCrewName,
} from '../../lib/utils.js';

class CrewManageController {
  constructor({ view, inputsModel, crewModel }) {
    this.$view = view;
    this.$inputsModel = inputsModel;
    this.$crewModel = crewModel;
    this.bindEventHandler();
  }

  bindEventHandler() {
    this.bindSelectEventHandler();

    const { courseName } = this.$inputsModel.getCrewInputsModel();

    if (isCourseSectionMounted(courseName)) {
      this.bindManageEventHandler();
    }
  }

  bindSelectEventHandler() {
    $(DOM.COURSE_SELECT_SECTION).addEventListener('input', this.onInputCourseSelect.bind(this));
  }

  onInputCourseSelect(e) {
    const {
      target: { name, value },
    } = e;
    this.mutateModelWithCourseInput(name, value);
    this.renderViewWithNewCourse();
    /** Course가 변경되면 이벤트 핸들러를 다시 등록한다. 날라가게된다. */
    this.bindManageEventHandler();
  }

  mutateModelWithCourseInput(name, value) {
    this.$inputsModel.setInputByNameAttribute(name, value);
  }

  renderViewWithNewCourse() {
    const { courseName, frontendInput, backendInput } = this.$inputsModel.getCrewInputsModel();
    if (courseName === COURSE.FRONTEND) {
      const crewList = this.$crewModel.getFrontendCrewList();
      this.$view.renderFrontendCourse(frontendInput, crewList);
    }
    if (courseName === COURSE.BACKEND) {
      const crewList = this.$crewModel.getBackendCrewList();
      this.$view.renderBackendCourse(backendInput, crewList);
    }
  }

  bindManageEventHandler() {
    $(DOM.CREW_INPUT_FORM_ID).addEventListener('input', this.onInputCrewInputForm.bind(this));
    $(DOM.CREW_INPUT_FORM_ID).addEventListener('submit', this.onSubmitCrewInputForm.bind(this));
    $(DOM.CREW_TABLE_ID).addEventListener('click', this.onClickDeleteButton.bind(this));
  }

  onInputCrewInputForm(e) {
    const {
      target: {
        value,
        dataset: { course },
      },
    } = e;
    this.mutateModelWithNewInput(course, value);
  }

  mutateModelWithNewInput(name, value) {
    this.$inputsModel.setInputByNameAttribute(name, value);
  }

  onSubmitCrewInputForm(e) {
    e.preventDefault();
    const { courseName, frontendInput, backendInput } = this.$inputsModel.getCrewInputsModel();
    if (isCourseFrontend(courseName)) {
      this.triggerAddFrontendCrew(frontendInput);
    }
    if (isCourseBackend(courseName)) {
      this.triggerAddBackendCrew(backendInput);
    }
  }
  /** 중복을 제거해보자 */

  triggerAddFrontendCrew(input) {
    const frontendCrewList = this.$crewModel.getFrontendCrewList();
    const newCrew = this.makeNewCrew(input, frontendCrewList);
    if (newCrew) {
      this.mutateModelWithNewFrontendCrew(newCrew);
      this.renderViewWithFrontendCrew();
    }
  }

  triggerAddBackendCrew(input) {
    const backendCrewList = this.$crewModel.getBackendCrewList();
    const newCrew = this.makeNewCrew(input, backendCrewList);
    if (newCrew) {
      this.mutateModelWithNewBackendCrew(newCrew);
      this.renderViewWithBackendCrew();
    }
  }

  mutateModelWithNewFrontendCrew(newCrew) {
    this.$inputsModel.setInputByNameAttribute(COURSE.FRONTEND, PLAIN_TEXT);
    this.$crewModel.addFrontendCrew(newCrew);
  }

  mutateModelWithNewBackendCrew(newCrew) {
    this.$inputsModel.setInputByNameAttribute(COURSE.BACKEND, PLAIN_TEXT);
    this.$crewModel.addBackendCrew(newCrew);
  }

  renderViewWithFrontendCrew() {
    const { frontendInput } = this.$inputsModel.getCrewInputsModel();
    const crewList = this.$crewModel.getFrontendCrewList();
    this.$view.renderWithNewInput(frontendInput);
    this.$view.renderWithNewCrewList(crewList);
  }

  renderViewWithBackendCrew() {
    const { backendInput } = this.$inputsModel.getCrewInputsModel();
    const crewList = this.$crewModel.getBackendCrewList();
    this.$view.renderWithNewInput(backendInput);
    this.$view.renderWithNewCrewList(crewList);
  }

  makeNewCrew(name, list) {
    try {
      if (isValidCrewName(name, list)) {
        return {
          name,
        };
      }
    } catch (error) {
      alert(error);
    }
    return false;
  }

  onClickDeleteButton(e) {
    const {
      target: {
        className,
        dataset: { index: position },
      },
    } = e;

    if (isDeleteButtonClick(className)) {
      this.mutateModelToDeleteCrew(Number(position));
      this.renderViewWithNewCrewList();
    }
  }

  mutateModelToDeleteCrew(position) {
    const { courseName } = this.$inputsModel.getCrewInputsModel();

    this.$crewModel.deleteCrew(courseName, position);
  }

  renderViewWithNewCrewList() {
    const { courseName } = this.$inputsModel.getCrewInputsModel();
    if (courseName === COURSE.FRONTEND) {
      const crewList = this.$crewModel.getFrontendCrewList();
      this.renderViewWithFrontendCrew(crewList);
    }
    if (courseName === COURSE.BACKEND) {
      const crewList = this.$crewModel.getBackendCrewList();
      this.renderViewWithBackendCrew(crewList);
    }
  }
}
export default CrewManageController;
