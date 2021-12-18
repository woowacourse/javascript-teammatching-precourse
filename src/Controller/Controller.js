export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.displayCrewManage(this.model.crew);
    this.view.displayTeamManage(this.model.crew);
    this.view.bindAddCrew(this.addCrewHandler);
    this.view.bindDeleteCrew(this.deleteCrewHandler);
    this.view.bindTeamMatch(this.teamMatchHandler);
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

  deleteCrewHandler = (index, course) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      this.model.deleteCrew(index - 1, course);
    }
  };

  crewHandler = (course, crew) => {
    this.view.displayCrewTable(course, crew);
  };

  teamMatchHandler = (course, number) => {
    console.log(course, number);
    if (number < 2) {
      alert("1보다 큰 수를 입력해주세요");
      return;
    }
    if (course === "frontend") {
      if (number > this.model.front.length) {
        alert("팀 인원수를 넘는 값은 불가능합니다.");
        return;
      }
    }
    if (course === "backend") {
      if (number > this.mdoel.back.length) {
        alert("팀 인원수를 넘는 값은 불가능합니다.");
        return;
      }
    }

    let crewNumber = this.model.front.length;
    if (course === "backend") crewNumber = this.model.back.length;
    const teamList = this.findTeamNumber(number, crewNumber);
    console.log(
      this.changeToName(this.findTeamMember(teamList, course), course)
    );
  };

  findTeamNumber = (number, crewNumber) => {
    let list = [];
    for (let i = 1; i < crewNumber / number; i++) {
      list.push(+number);
    }
    console.log(list);
    for (let i = 0; i < crewNumber % number; i++) {
      list[i] += 1;
    }
    return list;
  };

  findTeamMember = (number, course) => {
    let shuffleIndex = [];
    if (course === "frontend") {
      shuffleIndex = this.model.front.map((name, index) => index);
      shuffleIndex = MissionUtils.Random.shuffle(shuffleIndex);
    } else {
      shuffleIndex = this.model.back.map((name, index) => index);
      shuffleIndex = MissionUtils.Random.shuffle(shuffleIndex);
    }
    let members = [];
    let j = 0;
    for (let i = 0; i < number.length; i++) {
      const mem = shuffleIndex.slice(j, j + number[i]);
      j += number[i];
      members.push(mem);
    }

    return members;
  };

  changeToName = (members, course) => {
    let name = [];
    let crew = this.model.front;
    if (course === "backend") crew = this.model.back;
    for (let i = 0; i < members.length; i++) {
      let list = [];
      for (let j = 0; j < members[i].length; j++) {
        list.push(crew[members[i][j]]);
      }
      name.push(list);
    }
    return name;
  };
}
