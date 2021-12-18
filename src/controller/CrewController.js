export class CrewController {
  constructor(model, coreView) {
    this.model = model;
    this.coreView = coreView;
  }

  triggerEvent() {
    this.coreView.crewView.setOnRadioClick(this.onRadioClick.bind(this));
  }

  onRadioClick(course) {
    if (course === 'frontend') {
      const crewList = this.model.frontEndCrewList;
      this.coreView.crewView.showCrewList('프론트엔드', crewList);
      return;
    }
    const crewList = this.model.backEndCrewList;
    this.coreView.crewView.showCrewList('백엔드', crewList);
  }
}
