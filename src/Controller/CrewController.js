import { CREW_TAP_ID } from '../constants.js';
import CrewModel from '../Model/CrewModel.js';
import CrewInput from '../UserInput/CrewInput.js';
import CrewTapView from '../View/CrewTapView.js';

export default class CrewController {
  constructor() {
    this.crewTapView = new CrewTapView();
    this.crewModel = new CrewModel();
  }

  bindEventListener() {
    document.addEventListener('click', (event) => {
      const { id } = event.target;
      if (id === CREW_TAP_ID.radioFront || id === CREW_TAP_ID.radioBack) {
        const select = new CrewInput().getSelectValue();
        this.crewTapView.sectionView(select, this.crewModel.getStorage(select));
      }
      if (id === CREW_TAP_ID.crewAddButton) {
        event.preventDefault();
        this.clickCrewButton();
      }
      if (id === CREW_TAP_ID.crewDeleteButton) {
        this.clickDeleteButton(event);
      }
    });
  }

  clickCrewButton() {
    const crewInput = new CrewInput();
    const select = crewInput.getSelectValue();
    const name = crewInput.getCrewName();
    const storage = this.crewModel.getStorage(select);
    if (crewInput.isValidCrewName(storage) === true) {
      this.crewModel.addStorage(select, name);
      this.crewTapView.crewListView(select, this.crewModel.getStorage(select));
    }
    if (crewInput.isValidCrewName(storage) !== true) {
      console.log(crewInput.isValidCrewName(storage));
      this.crewTapView.errView(crewInput.isValidCrewName(storage));
    }
  }

  clickDeleteButton(event) {
    const trEl = event.target.closest('tr');
    const crewName = trEl.querySelector('.name').innerHTML;
    const select = new CrewInput().getSelectValue();
    this.crewModel.deleteStorage(select, crewName);
    this.crewTapView.crewListView(select, this.crewModel.getStorage(select));
  }
}
