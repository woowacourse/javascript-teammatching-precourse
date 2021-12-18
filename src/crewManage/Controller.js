import Model from './Model.js';
import View from './View.js';

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
      console.log('프론트');
      this.course = 'front';
      this.$renderDiv.style.visibility = 'visible';
      this.view.showList(this.model.FrontPeopleList);
      console.log(this.course);
    });
  }

  selectBack() {
    this.$backRadio.addEventListener('click', e => {
      console.log('백');
      this.course = 'back';
      this.$renderDiv.style.visibility = 'visible';
      this.view.showList(this.model.BackPeopleList);
      console.log(this.course);
    });
  }

  addPerson() {
    this.$addBtn.addEventListener('click', e => {
      console.log(this.ourse);
      // 이름 검증 함수 필요
      const name = this.$nameInput.value;

      if (this.course == 'front') {
        this.model.addPerson(this.frontAddIndex, name, 'front');
        this.frontAddIndex += 1;
        console.log(this.model.FrontPeopleList);
        this.view.showList(this.model.FrontPeopleList);
        this.deleteBtn = document.querySelectorAll('.delete-crew-button');
        this.setDelete();
      } else if (this.course == 'back') {
        this.model.addPerson(this.backAddIndex, name, 'back');
        this.backAddIndex += 1;
        console.log(this.model.BackPeopleList);
        this.view.showList(this.model.BackPeopleList);
        this.deleteBtn = document.querySelectorAll('.delete-crew-button');
        this.setDelete();
      }
    });
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

        if (this.course == 'front') {
          this.view.showList(this.model.FrontPeopleList);
        }
        if (this.course == 'back') {
          this.view.showList(this.model.BackPeopleList);
        }
      });
    });
  }
}
