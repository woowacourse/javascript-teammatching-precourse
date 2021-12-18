import * as func from '../storage/presentFunc.js';

export default class View {
  constructor(peopleList) {
    this.$crewList = document.querySelector('#crews');
    this.$sectionList = document.querySelectorAll('.team-section');
    this.peopleList = peopleList;
    this.headTextList = ['미션의 팀 매칭', '팀 조회'];
  }

  showList(peopleList) {
    this.$crewList.innerHTML = '';
    func.createLi(this.$crewList, peopleList);
  }

  showSection() {
    console.log(this.$sectionList);
    this.$sectionList[1].style.visibility = 'hidden';
    this.$sectionList[2].style.visibility = 'hidden';
  }

  showMatching() {
    console.log(this.$sectionList);
    this.$sectionList[1].style.visibility = 'visible';
    this.$sectionList[2].style.visibility = 'hidden';
  }

  showResult() {
    console.log(this.$sectionList);
    this.$sectionList[1].style.visibility = 'hidden';
    this.$sectionList[2].style.visibility = 'visible';
  }

  showHead(course) {
    const $headList = document.querySelectorAll('.crew-head');

    $headList.forEach(head => {
      head.innerHTML = `${course} 크루 관리`;
    });
  }
}
