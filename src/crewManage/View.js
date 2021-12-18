import * as func from '../storage/presentFunc.js';

export default class View {
  constructor(peopleList) {
    this.$tbody = document.querySelector('#crew-table-body');
    this.peopleList = peopleList;
    this.headTextList = ['크루 관리', '크루 목록'];
  }

  showList(peopleList) {
    this.$tbody.innerHTML = '';
    func.createPeopleTbody(peopleList, this.$tbody);
  }

  showHead(course) {
    const $headList = document.querySelectorAll('.crew-head');

    $headList.forEach(head => {
      head.innerHTML = `${course} 크루 관리`;
    });
  }
}
