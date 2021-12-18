export default function CrewManager() {
  this.container = document.querySelector('#app');

  this.template = () => {
    return `
      <main>
        ${this.courseButtonsTemplate()}
      </main>
    `;
  };

  this.courseButtonsTemplate = () => {
    return `
      <section>
        <h3>크루를 관리할 코스를 선택해주세요</h3>
        <div>
          <input type="radio" name="course" value="frontend" id="frontend-course"/>
          <label for="frontend">프론트엔드</label>
          <input type="radio" name="course" value="backend" id="backend-course"/>
          <label for="backend">백엔드</label>
        </div>
      </section>
    `;
  };

  this.render = () => {
    this.container.innerHTML += this.template();
  };
}
