import CrewControlController from "../controller/CrewControlController.js";
import { controlCrewListTemplete, crewControlTemplete, CrewListTemplete } from "../util/dom/crewControlTemplete.js";

export default class CrewControlView extends CrewControlController {

  render() {
    this.crewControlField.innerHTML = crewControlTemplete;
    this.$app.append(this.crewControlField);
  }

  selectCourse() {
    this.course;
    [...this.crewControlField.querySelectorAll('input')].map(select => {
      select.addEventListener('click', ({ target }) => {
        if (target.id === 'frontend-course') {
          this.course = '프론트엔드';
          this.getLocalFrontCrew();
        } else if (target.id === 'backend-course') {
          this.course = '백엔드';
          this.getLocalBackCrew();
        }
        this.renderControlCrew();
      })
    })
  }

  renderControlCrew() {
    const contrlCrewList = document.querySelector('#control-crew-list');
    contrlCrewList.innerHTML = controlCrewListTemplete(this.course);
    this.renderCrewList();
    this.addCrew();
  }

  addCrew() {
    this.crewControlField.querySelector('#add-crew-buttton').addEventListener('click', (e) => {
      e.preventDefault();
      this.crewName = e.target.previousSibling.previousSibling.value;
      this.setLocalCrewName();
      this.course === '프론트엔드' ? this.getLocalFrontCrew() : this.getLocalBackCrew();
      this.renderCrewList();
    })
  }

  renderCrewList() {
    const crewListField = document.querySelector('#crew-list-field')
    crewListField.innerHTML = "";
    this.course === '프론트엔드'
    ? this.crewListTemplete = this.frontCrew && this.frontCrew.map((crew, index) => CrewListTemplete(crew, index))
    : this.crewListTemplete = this.backCrew && this.backCrew.map((crew, index) => CrewListTemplete(crew, index));
    this.crewListTemplete ? this.crewListTemplete.map(v => crewListField.append(v)) : "";
    this.crewDelete();
  }

  crewDelete() {
    [...this.crewControlField.querySelectorAll('.delete-crew-buttton')].map(deleteButton => {
      deleteButton.addEventListener('click', ({ target }) => {
        if (confirm('정말 삭제하시겠습니까?')) {
          this.deleteCrewIndex = target.parentNode.parentNode.childNodes[1].innerText;
          target.parentNode.parentNode.remove();
          this.setDeleteCrew();
          this.getLocalFrontCrew();
          this.getLocalBackCrew();
          this.renderCrewList();
        } 
      })
    })
  }
  
}