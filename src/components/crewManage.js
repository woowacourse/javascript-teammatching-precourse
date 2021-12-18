import { $ } from '../utils/selector.js';
import { SELECTOR } from '../constant/constant.js';
import { crewTemplate } from '../templates/crew-template.js';
import { isValidCrewName } from '../utils/validate.js';
import { setStateToLocalStorage } from '../utils/localStorage.js';
import { setCrewTable } from './crewAdd.js';

export default class CrewManage {
  constructor($state) {
    this.$target = $(`#${SELECTOR.ID.MAIN}`);
    this.$state = $state;
    this.render();
  }

  setStateOfCourse(course) {
    //front, back
    this.$state.course = course;
    setStateToLocalStorage(this.$state);
  }

  setStateOfCrew(crew) {
    if (this.$state.course == 'front') {
      this.$state.front.crews.push(crew);
    } else if (this.$state.course == 'back') {
      this.$state.back.crews.push(crew);
    }

    setStateToLocalStorage(this.$state);

    this.render();
    this.displayBlock();
  }

  getClickedProduct(e, products) {
    const clickProductName = e.path[2].children[0].childNodes[3];
    const clickProduct = products.find(
      (item) => item.name === clickProductName
    );
    return clickProduct;
  }

  deleteCrew(e) {
    const clickCrewName = e.path[2].children[1].innerHTML;
    // const clickCrew = this.$state.find(
    // (item) => item.name === clickProductName
    // );
    // const clickCrew = this.getClickedProduct(e, this.getProducts());
    // if (!isAbleToPurchase(clickProduct, this.getCharge())) {
    //   alert(ERROR.PURCHASE);
    //   return;
    // }

    // this.setStateOfCharge(-clickProduct.price);
    // this.setStateOfProduct(clickProduct);
  }

  addCrew() {
    const name = $(`#${SELECTOR.ID.CREW_NAME_INPUT}`).value.trim();
    let validation = {};
    $(`#${SELECTOR.ID.CREW_NAME_INPUT}`).value = '';
    if (this.$state.course == 'front') {
      validation = isValidCrewName(name, this.$state.front.crews);
    } else if (this.$state.course == 'back') {
      validation = isValidCrewName(name, this.$state.back.crews);
    }
    if (!validation.valid) {
      alert(validation.ERROR_MESSAGE);
      return;
    }
    this.setStateOfCrew(name);
  }

  setAddEvent() {
    const deleteButtons = document.querySelectorAll(
      `.${SELECTOR.CLASS.DELETE_CREW_BUTTON}`
    );
    for (const deleteButton of deleteButtons) {
      deleteButton.addEventListener('click', (e) => {
        this.deleteCrew(e);
      });
    }

    $(`#${SELECTOR.ID.ADD_CREW_BUTTON}`).addEventListener('click', (e) => {
      this.addCrew();
    });
  }

  setEvent() {
    $(`#${SELECTOR.ID.FRONTEND_COURSE}`).addEventListener('click', (e) => {
      console.log(`f`);
      this.setStateOfCourse('front');
      this.displayBlock();
      this.setAddEvent();
    });
    $(`#${SELECTOR.ID.BACKEND_COURSE}`).addEventListener('click', (e) => {
      this.setStateOfCourse('back');
      this.displayBlock();
      this.setAddEvent();
    });
  }

  displayBlock() {
    $(`#${SELECTOR.ID.CREW_ADD_SECTION}`).style.display = 'block';
    $(`#${SELECTOR.ID.CREW_TABLE_SECTION}`).style.display = 'block';
    if (this.$state.course == 'front') {
      $(`#${SELECTOR.ID.FRONTEND_COURSE}`).checked = true;
      setCrewTable(this.$state.front.crews);
    } else if (this.$state.course == 'back') {
      $(`#${SELECTOR.ID.BACKEND_COURSE}`).checked = true;
      setCrewTable(this.$state.back.crews);
    }
  }

  template() {
    return crewTemplate();
  }

  render() {
    this.$target.innerHTML = this.template();
    if ($(`#${SELECTOR.ID.ADD_CREW_BUTTON}`)) this.setEvent();
    this.setAddEvent();
  }
}
