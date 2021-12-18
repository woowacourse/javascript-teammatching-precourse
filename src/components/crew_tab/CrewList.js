import Component from "../../core/Component.js";

export default class CrewList extends Component {
  setup() {
    console.log("CrewList", this);
  }

  template() {
    const { courseName } = this.$props;

    if (!courseName) return ``;

    return `
        <h3>${courseName} 크루 목록</h3>
        <table border="1" id="crew-table">
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
                <button id="delete-crew-buttton">삭제</button>
                </td>
            </tr>
            </tbody>
        </table>
    `;
  }
}
