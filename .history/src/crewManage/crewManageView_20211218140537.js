export default class CrewManageView {
  renderPage = (container) => {
    const template = `
    <header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav>
        <ul>
          <li>
            <button id="crew-tab">크루 관리</button>
          </li>
          <li>
            <button id="team-tab">팀 매칭 관리</button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h3>크루를 관리할 코스를 선택해주세요</h3>
        <div>
          <input type="radio" name="course" value="frontend" id="frontend-course"/>
          <label for="frontend">프론트엔드</label>
          <input type="radio" name="course" value="backend" id="backend-course"/>
          <label for="backend">백엔드</label>
        </div>
      </section>
      <div id="course-page"></div>
    </main>
    `;
    container.insertAdjacentHTML("beforeend", template);
  };

  renderFrontendCourse = (container) => {
    const template = `
      <h3>프론트엔드 크루 관리</h3>
        <form>
          <label>크루 이름</label>
          <input type="text" id="crew-name-input"/>
          <button id="add-crew-buttton">확인</button>
        </form>
      </section>
      <section>
        <h3>프론트엔드 크루 목록</h3>
        <table border="1" id="crew-table">
          <thead>
            <tr>
              <th></th>
              <th>크루</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody id="crew-table-body">
          </tbody>
    `;
    this.resetCoursePage(container);
    container.insertAdjacentHTML("beforeend", template);
  };

  renderBackendCourse = (container) => {
    const template = `
      <h3>백엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input"/>
        <button id="add-crew-buttton">확인</button>
      </form>
    </section>
    <section>
      <h3>백엔드 크루 목록</h3>
      <table border="1" id="crew-table">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody id="crew-table-body">
        </tbody>
    `;
    this.resetCoursePage(container);
    container.insertAdjacentHTML("beforeend", template);
  };

  resetCoursePage = (container) => {
    container.innerHTML = "";
  };

  renderCrewsTable = (crews, container) => {
    const template = crews.map((crew, idx) => {
      return `
        <tr>
          <td>${idx}</td>
          <td>${crew}</td>
          <td>
            <button id="delete-crew-buttto">삭제</button>
          <td>
        </tr>
      `;
    });
    container.innerHTML = template;
  };
}
