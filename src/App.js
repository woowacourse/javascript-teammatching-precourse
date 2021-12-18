import Component from "./core/Component.js";

import Api from "./libs/api.js";

export default class App extends Component {
  setup() {
    console.log("app");
    this.callAPI = new Api();
    this.initCallAPI();
  }

  initCallAPI() {
    this.callAPI.setup();
    this.$state = this.callAPI.getTeamMatching();
  }

  template() {
    return `
        <header>
            <h1>우테코 크루와 팀 매칭 관리 보드</h1>
            <nav>
            <ul>
                <li>
                <button>크루 관리</button>
                </li>
                <li>
                <button>팀 매칭 관리</button>
                </li>
            </ul>
            </nav>
        </header>
        <main>
            <section>
            <h3>크루를 관리할 코스를 선택해주세요</h3>
            <div>
                <input type="radio" name="course" value="frontend" />
                <label for="frontend">프론트엔드</label>
                <input type="radio" name="course" value="backend" />
                <label for="backend">백엔드</label>
            </div>
            </section>
            <section>
            <h3>프론트엔드 크루 관리</h3>
            <form>
                <label>크루 이름</label>
                <input type="text" />
                <button>확인</button>
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
                <tbody>
                <tr>
                    <td>1</td>
                    <td>준</td>
                    <td>
                    <button>삭제</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </section>
        </main>
    `;
  }
}
