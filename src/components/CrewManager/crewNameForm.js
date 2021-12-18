export default function CrewNameForm(container) {
  this.template = (course) => {
    return `
          <h3>${course} 크루 관리</h3>
          <form>
            <label>크루 이름</label>
            <input type="text" id="crew-name-input"/>
            <button id="add-crew-button">확인</button>
          </form>
        `;
  };

  this.onClickAddCrewButton = (e) => {
    e.preventDefault();
  };

  this.addEvent = () => {
    const addCrewButton = document.querySelector('#add-crew-button');
    addCrewButton.addEventListener('click', this.onClickAddCrewButton);
  };

  this.render = (course) => {
    console.log(container);
    container.innerHTML = this.template(course);
    this.addEvent();
  };
}
