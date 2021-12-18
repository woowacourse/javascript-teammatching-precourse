import { isNameInputValid } from '../utils/validator.js';

export class CrewController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;
  }

  triggerEvent() {
    this.coreView.crewView.setOnRadioClick(this.onRadioClick.bind(this));
  }

  triggerCrewListEvent(course) {
    this.coreView.crewView.setOnCrewAddButtonClick(this.onCrewAddButtonClick.bind(this), course);
    this.coreView.crewView.setOnCrewDeleteButtonClick(
      this.onCrewDeleteButtonClick.bind(this),
      course,
    );
  }

  onRadioClick(course) {
    if (course === 'frontend') {
      const crewList = this.model.frontEndCrewList;
      this.coreView.crewView.showCourse('프론트엔드', crewList);
      this.triggerCrewListEvent(course);
      return;
    }
    const crewList = this.model.backEndCrewList;
    this.coreView.crewView.showCourse('백엔드', crewList);
    this.triggerCrewListEvent(course);
  }

  onCrewAddButtonClick(crewName, course) {
    if (!isNameInputValid(crewName)) {
      return;
    }
    const crewList = this.model.addCrewList(crewName, course);
    this.coreView.crewView.showCrewList(crewList);
  }

  onCrewDeleteButtonClick(crewName, course) {
    const crewList = this.model.deleteCrewList(crewName, course);
    this.coreView.crewView.showCrewList(crewList);
  }
}
