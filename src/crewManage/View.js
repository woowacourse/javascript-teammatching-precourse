import * as func from '../storage/presentFunc.js';

export default class View {
  constructor(peopleList) {
    this.$tbody = document.querySelector('#crew-table-body');
    this.peopleList = peopleList;
  }

  showList(peopleList) {
    this.$tbody.innerHTML = '';
    func.createPeopleTbody(peopleList, this.$tbody);
  }
}
