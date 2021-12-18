import CrewControlController from "../controller/CrewControlController.js";
import { controlCrewListTemplete, crewControlTemplete } from "../util/dom/crewControlTemplete.js";

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
        } else if (target.id === 'backend-course') {
          this.course = '백엔드';
        }
        this.renderControlCrew();
      })
    })
  }

  renderControlCrew() {
    const $contrlCrewList = document.querySelector('#control-crew-list');
    $contrlCrewList.innerHTML = controlCrewListTemplete(this.course);
    this.addCrew();
  }

  addCrew() {
    this.crewControlField.querySelector('#add-crew-buttton').addEventListener('click', (e) => {
      e.preventDefault();
      this.crewName = e.target.previousSibling.previousSibling.value;
      console.log(this.course)
      console.log(e);
    })
  }

}