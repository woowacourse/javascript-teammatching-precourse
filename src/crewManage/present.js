export default class CrewPresent {
  constructor() {
    this.$body = document.querySelector('body');
    this.showCrewPresent(true);
  }

  showCrewPresent() {
    // this.$body.innerHTML = '';
    const crewHtml = `
    <div id='crew-div'>
    <main>
      <section>
        <h3>크루를 관리할 코스를 선택해주세요</h3>
        <div>
          <input type="radio" name="course" value="frontend" id='frontend-course' />
          <label for="frontend">프론트엔드</label>
          <input type="radio" name="course" value="backend" id='backend-course'/>
          <label for="backend">백엔드</label>
        </div>
      </section>
      <section>
        <h3>프론트엔드 크루 관리</h3>
        <form>
          <label>크루 이름</label>
          <input type="text" id='cruw-name-input' />
          <button id='add-crew-button'>확인</button>
        </form>
      </section>
      <section>
        <h3>프론트엔드 크루 목록</h3>
        <table border="1">
          <thead>
            <tr>
              <th></th>
              <th>크루</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody id='crew-table'>
          </tbody>
        </table>
      </section>
    </main>
    </div>`;

    this.$body.insertAdjacentHTML('afterbegin', crewHtml);
  }
}
