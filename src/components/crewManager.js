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

  this.crewNameFormTemplate = (course) => {
    return `
      <h3>${course} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input"/>
        <button id="add-crew-button">확인</button>
      </form>
    `;
  };

  this.crewTableTemplate = (course) => {
    return `
      <h3>${course} 크루 목록</h3>
      <table border="1" id="crew-table">
        <thead>
         ${this.crewTableHeader()}
        </thead>
        <tbody>
        </tbody>
      </table>
    `;
  };

  this.crewTableHeader = () => {
    return `
      <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    `;
  };

  this.crewTableData = () => {
    return `
      <tr>
        <td>1</td>
        <td>준</td>
        <td>
          <button>삭제</button>
        </td>
      </tr>
    `;
  };

  this.onClickCrewRadioInput = (e) => {
    const crewNameFormSection = document.querySelector(
      '#crew-name-form-section'
    );
    const crewTableSection = document.querySelector('#crew-table-section');
    const course = e.target.value;

    if (e.target.id === 'frontend-course') {
      crewNameFormSection.innerHTML = this.crewNameFormTemplate(course);
      crewTableSection.innerHTML = this.crewTableTemplate(course);
    }
    if (e.target.id === 'backend-course') {
      crewNameFormSection.innerHTML = this.crewNameFormTemplate(course);
      crewTableSection.innerHTML = this.crewTableTemplate(course);
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
