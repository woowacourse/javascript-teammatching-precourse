import CrewNameForm from './crewNameForm.js';
import CrewTable from './crewNameTable.js';

export default function CrewManager() {
  this.container = document.querySelector('#main-container');

  this.template = () => {
    return `
      <section id="course-button-section">
        ${this.courseButtonsTemplate()}
      </section>
      <section id="crew-name-form-section">
      </section>
      <section id="crew-table-section">
      </section>
    `;
  };

  this.courseButtonsTemplate = () => {
    return `
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div id="course-radio-container">
        <input type="radio" name="course" value="frontend" id="frontend-course"/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id="backend-course"/>
        <label for="backend">백엔드</label>
      </div>
    `;
  };

  this.onClickCrewRadioInput = (e) => {
    const crewNameForm = new CrewNameForm(
      document.querySelector('#crew-name-form-section')
    );
    const crewTable = new CrewTable(
      document.querySelector('#crew-table-section')
    );
    const course = e.target.value;

    if (e.target.id === 'frontend-course') {
      crewNameForm.render(course);
      crewTable.render(course);
    }
    if (e.target.id === 'backend-course') {
      crewNameForm.render(course);
      crewTable.render(course);
    }
  };

  this.addEvent = () => {
    const courseRadioContainer = document.querySelector(
      '#course-radio-container'
    );

    courseRadioContainer.addEventListener('click', this.onClickCrewRadioInput);
  };

  this.render = () => {
    this.container.innerHTML = this.template();
    this.addEvent();
  };
}
