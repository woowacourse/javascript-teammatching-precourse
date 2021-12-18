export class CrewController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;
  }

  triggerEvent() {
    this.coreView.crewView.setOnRadioClick(this.onRadioClick.bind(this));
  }

  triggerCrewAddEvent(course) {
    this.coreView.crewView.setOnCrewAddButtonClick(this.onCrewAddButtonClick.bind(this), course);
  }

  onRadioClick(course) {
    if (course === 'frontend') {
      const crewList = this.model.frontEndCrewList;
      this.coreView.crewView.showCourse('프론트엔드', crewList);
      this.triggerCrewAddEvent(course);
      return;
    }
    const crewList = this.model.backEndCrewList;
    this.coreView.crewView.showCourse('백엔드', crewList);
    this.triggerCrewAddEvent(course);
  }

  onCrewAddButtonClick(crewName, course) {
    const crewList = this.model.addCrewList(crewName, course);
    this.coreView.crewView.showCrewList(crewList);
  }
}
