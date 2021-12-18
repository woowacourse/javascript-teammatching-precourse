export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.displayCrewManage(this.model.crew);
    this.view.bindAddCrew(this.addCrewHandler);
    this.model.bindCrew(this.crewHandler);
  }

  addCrewHandler = (name, course) => {
    if (this.model.front.includes(name) || this.model.back.includes(name)) {
      alert("이미 존재하는 이름입니다");
      return;
    }
    if (name.length > 5) {
      alert("5자 이하의 이름을 입력해주세요");
      return;
    }

    this.model.addCrew(name, course);
  };

  crewHandler = (course, crew) => {
    this.view.displayCrewTable(course, crew);
  };
}
