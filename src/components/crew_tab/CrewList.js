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
                <tr data-key=${index}>
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
    const { checkedCrewCourse, currentCrews, deleteCrew } = this.$props;
    const parentTr = e.target.closest("tr");
    const CrewKey = parentTr.getAttribute("data-key");

    if (this.isDeleteCrew()) {
      currentCrews.splice(CrewKey, 1);

      this.setDeleteCrew({
        crews: currentCrews,
        checkedCrewCourse,
        deleteCrew,
      });
    }
  }

  isDeleteCrew() {
    return window.confirm(`제거 하나요?`);
  }

  setDeleteCrew({ crews, checkedCrewCourse, deleteCrew }) {
    if (checkedCrewCourse === "frontend")
      return deleteCrew({ frontends: crews });
    if (checkedCrewCourse === "backend") return deleteCrew({ backends: crews });
  }
}
