import Component from "../../core/Component.js";

export default class CrewList extends Component {
  setup() {
    console.log("CrewList", this);
  }

  template() {
    const { courseName, currentCrews } = this.$props;

    if (!courseName) return ``;

    console.log(currentCrews);
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
            ${currentCrews
              .map((crewName, index) => {
                return `
                <tr >
                    <td>${index + 1}</td>
                    <td>${crewName}</td>
                    <td>
                        <button class="delete-crew-buttton">삭제</button>
                    </td>
                </tr>
                `;
              })
              .join("")}
            </tbody>
        </table>
    `;
  }

  mounted() {
    document
      .querySelectorAll(".delete-crew-buttton")
      .forEach((btn) =>
        this.addEvent("click", btn, (e) => this.onClickDeleteCrew(e))
      );
  }

  onClickDeleteCrew(e) {
    console.log(e.target);
  }
}
