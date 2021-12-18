import Model from './Model.js';
import View from './View.js';
import { checkName } from '../storage/validator.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.$nameInput = document.querySelector('#crew-name-input');
    this.$addBtn = document.querySelector('#add-crew-button');
    this.$frontRadio = document.querySelector('#frontend-course');
    this.$backRadio = document.querySelector('#backend-course');
    this.$renderDiv = document.querySelector('#crew-section');
    this.frontAddIndex = 1;
    this.backAddIndex = 1;
    this.selectFront();
    this.selectBack();
    this.course = '';
    this.addPerson();
  }

  selectFront() {
    this.$frontRadio.addEventListener('click', e => {
      this.course = '프론트엔드';
      this.$renderDiv.style.visibility = 'visible';
      this.view.showList(this.model.FrontPeopleList);
      this.view.showHead(this.course);
    });
  }

  selectBack() {
    this.$backRadio.addEventListener('click', e => {
      this.course = '백엔드';
      this.$renderDiv.style.visibility = 'visible';
      this.view.showList(this.model.BackPeopleList);
      console.log(this.course);
      this.view.showHead(this.course);
    });
  }

  addPerson() {
    this.$addBtn.addEventListener('click', e => {
      e.preventDefault();
      const name = this.$nameInput.value;

      if (this.course == '프론트엔드') {
        this.addFrontendCrew(name);
      } else if (this.course == '백엔드') {
        this.addBackendCrew(name);
      }
    });
  }

  addFrontendCrew(name) {
    console.log('프론트');
    if (!checkName(name, this.model.FrontPeopleList)) {
      return;
    }

    this.model.addPerson(this.frontAddIndex, name, '프론트엔드');
    this.frontAddIndex += 1;

    this.view.showList(this.model.FrontPeopleList);
    this.deleteBtn = document.querySelectorAll('.delete-crew-button');
    this.setDelete();
  }

  addBackendCrew(name) {
    console.log('백');
    if (!checkName(name, this.model.BackPeopleList)) {
      return;
    }

    this.model.addPerson(this.backAddIndex, name, '백엔드');
    this.backAddIndex += 1;

    this.view.showList(this.model.BackPeopleList);
    this.deleteBtn = document.querySelectorAll('.delete-crew-button');
    this.setDelete();
  }

  setDelete() {
    this.deletePerson();
  }

  deletePerson() {
    console.log(this.deleteBtn);
    this.deleteBtn.forEach((btn, idx) => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        console.log('delete');
        this.model.removePerson(idx, this.course);

        if (this.course == '프론트엔드') {
          this.view.showList(this.model.FrontPeopleList);
        }
        if (this.course == '백엔드') {
          this.view.showList(this.model.BackPeopleList);
        }
      });
    });
  }

  getPeopleList() {
    const frontList = this.model.FrontPeopleList;
    const backList = this.model.BackPeopleList;

    return {
      front: frontList,
      back: backList,
    };
  }
}
